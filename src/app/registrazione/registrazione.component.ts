import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../services/data/accounting.service';
import {AccountUtente, AreaGeografica, Utente} from '../classi/classi';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  nome: string;
  cognome: string;
  email: string;
  genere: boolean;

  username: string;
  password: string;
  ripPsw: string

  nazione: string;
  regione: string;
  citta: string;

  errRegistrazione: string;
  succReg: string;


  constructor(private account: AccountingService) { }

  ngOnInit(): void {
  }

  impostaGenere(gen: boolean) {
    this.genere = gen;
    console.log(this.genere);
  }

  registra(){
    if(!this.verificaCampi())
      return;
    var utente = new Utente(this.nome, this.cognome, this.email, this.genere);
    if(this.nazione || this.regione || this.citta){
      var areaGeografica = new AreaGeografica(
        this.nazione != null ? this.nazione.charAt(0).toUpperCase() + this.nazione.slice(1).toLowerCase() : null,
        this.regione != null ? this.regione.charAt(0).toUpperCase() + this.regione.slice(1).toLowerCase() : null,
        this.citta != null ? this.citta.charAt(0).toUpperCase() + this.citta.slice(1).toLowerCase(): null
      );
      utente.areaGeografica = areaGeografica;
   }
   var accountUtente = new AccountUtente(this.username,this.password);
   this.account.registraUtente(utente,accountUtente).subscribe(
     response => {
       console.log(response);
       this.succReg = "registrazione avvenuta con successo!"
     },error => {
       this.errRegistrazione = error.error.message;
     }
   )
  }

  private verificaCampi(): boolean{
    if(this.password !== this.ripPsw){
      this.errRegistrazione = "le password non coincidono";
      return false;
    }
    if(!this.nome || !this.cognome){
      this.errRegistrazione = "nome e cognome obbligatorio";
      return false;
    }
    if(!this.username){
      this.errRegistrazione = "username obbligatorio";
      return false;
    }
    return true;
  }

}
