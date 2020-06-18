import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccountingService} from '../services/data/accounting.service';
import {AccountUtente, Utente} from '../classi/classi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utenteLoggato: Utente;

  errMsg: string;

  username='';
  password='';

  constructor(private autenticazione: AccountingService, private router: Router) { }

  ngOnInit(): void {
  }

  accedi(){
    this.autenticazione.autentica(new AccountUtente(this.username,this.password)).subscribe(
      response => {
        this.utenteLoggato = response;
        sessionStorage.setItem("userId", this.utenteLoggato.id.toString());
        this.router.navigate(["/home"])
      },
      error =>{
        this.errMsg = "errore di autenticazione, riprova ad inserire i dati!";
      }
    )

  }

}
