import { Component, OnInit } from '@angular/core';
import {AreaGeografica, Post, Utente} from '../classi/classi';
import {ActivatedRoute} from '@angular/router';
import {PostDataService} from '../services/data/post-data.service';
import {AccountingService} from '../services/data/accounting.service';
import {UtenteDataService} from '../services/data/utente-data.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {

  posts: Post[];
  pagePost = 1;
  numInPage = 15;

  datiUtente: Utente;//contine solo i dati e l'area geografica, non post, amici, like ecc
  nome = '';
  cognome = '';

  idUtenteDiario: number;
  amiciConUtenteLoggato = false;

  msgRichiesta: string;
  errMsgRichiesta: string;
  errMsgUtenteNonTrovato: string;

  disabilitaContinua = false;
  msgContinua: string;

  viewAddArea = false;
  nazione: string;
  regione: string;
  citta: string;
  errMsgAddArea: string;
  succMsgAddArea: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostDataService,
    public account: AccountingService,
    private utenteService: UtenteDataService) {
  }

  ngOnInit(): void {
    this.idUtenteDiario = Number(this.route.snapshot.paramMap.get('userId'));
    this.prelevaDatiUtente();//
    this.verificaAmicizia();
    this.prelevaPost()
  }


  inviaRichiesta() {
    this.utenteService.inviaRichiestaAmicizia(this.idUtenteDiario).subscribe(
      response => {
        this.msgRichiesta = response.msg;
        setTimeout(() => {this.msgRichiesta = ''}, 2500);
      }, error => {
        this.errMsgRichiesta = error.error.message;
        setTimeout(() => {this.errMsgRichiesta = ''}, 3500);
      }
    )
  }

  verificaAmicizia() {
    if (this.idUtenteDiario !== this.account.loggedUser()) {
      this.utenteService.verificaAmicizia(this.idUtenteDiario).subscribe(
        response => {
          this.amiciConUtenteLoggato = response;
        }
      );
    }
  }

  prelevaDatiUtente() {
    this.utenteService.getDatiUtente(this.idUtenteDiario).subscribe(
      response => {
        this.datiUtente = response;
        this.nome = this.datiUtente.nome;
        this.cognome = this.datiUtente.cognome;
      },
      error => {
        //this.utenteNonEsistente = true;
        this.errMsgUtenteNonTrovato = "Utente non trovato";
      }
    )
  }

  prelevaPost() {
    this.postService.listaPostUtente(this.idUtenteDiario, this.pagePost, this.numInPage).subscribe(
      response => {
        this.posts = response;
      }
    )
  }


  altriPost() {
    this.pagePost++;
    //console.log("altri post pag "+this.pagePost)
    this.postService.listaPostUtente(this.idUtenteDiario, this.pagePost, this.numInPage).subscribe(
      response => {
        if (response.length === 0) {
          this.disabilitaContinua = true;
          this.msgContinua = "non ci sono altri post!"
        }
        for (let p of response)
          this.posts.push(p);
      }
    )
  }

  viewAggiungiArea() {
    this.viewAddArea = true;
  }

  aggiungiArea() {
    if (this.nazione || this.regione || this.citta) {
      var areaGeografica = new AreaGeografica(
        this.nazione != null ? this.nazione.charAt(0).toUpperCase() + this.nazione.slice(1).toLowerCase() : null,
        this.regione != null ? this.regione.charAt(0).toUpperCase() + this.regione.slice(1).toLowerCase() : null,
        this.citta != null ? this.citta.charAt(0).toUpperCase() + this.citta.slice(1).toLowerCase() : null
      );
    }
    this.account.aggiungiAreaGeografica(areaGeografica).subscribe(
      response =>{
        this.succMsgAddArea = "area aggiunta/modificata";
        setTimeout(() => {this.succMsgAddArea = '', window.location.reload()}, 1500);
      },error => {
        this.errMsgAddArea = error.error.message;
        setTimeout(() => {this.errMsgAddArea = ''}, 3500);
      }
    )

  }
}
