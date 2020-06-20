import {Component, Injectable, OnInit} from '@angular/core';
import {Utente} from '../classi/classi';
import {UtenteDataService} from '../services/data/utente-data.service';

@Component({
  selector: 'app-ricerca-utenti',
  templateUrl: './ricerca-utenti.component.html',
  styleUrls: ['./ricerca-utenti.component.css']
})
export class RicercaUtentiComponent implements OnInit {

  page = 1;
  numInPage = 25;
  disabilitaContinua = false;
  msgContinua: string;

  utenti: Utente[];
  private nome: string;
  private cognome: string;
  utenteDaRicercare = '';

  constructor(private utenteDataService: UtenteDataService) { }

  ngOnInit(): void {
  }

  public cercaUtente(){
    let split = this.utenteDaRicercare.split(" ");
    this.nome = split[0];
    if(split[1] != null) {
      this.cognome = split[1];
    }else {
      this.cognome = "";
    }
    this.utenteDataService.cercaUtente(this.nome, this.cognome, this.page,this.numInPage).subscribe(
      response => {
        this.utenti = response;
        this.utenteDaRicercare = '';
      }
    )
  }

  altriRisultati(){
    this.page++;
    this.utenteDataService.cercaUtente(this.nome, this.cognome, this.page,this.numInPage).subscribe(
      response => {
        if(response.length === 0) {
          this.disabilitaContinua = true;
          this.msgContinua = "non ci sono altri risultati"
        }
        for(let p of response)
          this.utenti.push(p);
      }
    )
  }

}
