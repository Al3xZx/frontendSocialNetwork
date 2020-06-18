import { Component, OnInit } from '@angular/core';
import {Post, Utente} from '../classi/classi';
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
  // posts= [
  //   new Post(0, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
  //   new Post(2, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
  //   new Post(1, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
  //   new Post(3, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
  // ];

  posts: Post[];
  pagePost = 1;



  errMsg: string;

  datiUtente: Utente;//contine solo i dati e l'area geografica, non post, amici, like ecc
  nome = '';
  cognome = '';

  idUtenteDiario: number;
  amiciConUtenteLoggato = false;

  errMsgRichiesta: string;
  errMsgUtenteNonTrovato: string;
  disabilitaContinua = false;
  msgContinua: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostDataService,
    public account: AccountingService,
    private utenteService: UtenteDataService) { }

  ngOnInit(): void {
    this.idUtenteDiario = Number(this.route.snapshot.paramMap.get('userId'));
    this.prelevaDatiUtente();//
    this.verificaAmicizia();
    this.prelevaPost()

  }



  inviaRichiesta(){

  }

  verificaAmicizia(){
    if(this.idUtenteDiario !== this.account.loggedUser()) {
      this.utenteService.verificaAmicizia(this.idUtenteDiario).subscribe(
        response => {
          this.amiciConUtenteLoggato = response;
        }
      );
    }
  }

  prelevaDatiUtente(){
    this.utenteService.getDatiUtente(this.idUtenteDiario).subscribe(
      response =>{
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

  prelevaPost(){
    this.postService.listaPostUtente(this.idUtenteDiario,this.pagePost,15).subscribe(
      response => {
        this.posts = response;
      }
    )
  }


  altriPost() {
    this.pagePost++;
    console.log("altri post pag"+this.pagePost)
    this.postService.listaPostUtente(this.idUtenteDiario,this.pagePost,15).subscribe(
      response => {
        if(response.length === 0) {
          this.disabilitaContinua = true;
          this.msgContinua = "non ci sono altri post!"
        }
        for(let p of response)
          this.posts.push(p);
      }
    )
  }
}
