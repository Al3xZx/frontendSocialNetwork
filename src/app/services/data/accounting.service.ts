import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountUtente, Utente} from '../../classi/classi';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  server = "localhost";
  port = '8080';

  constructor(private httpClient: HttpClient) { }


  autentica(account: AccountUtente){
    return this.httpClient.post<Utente>(`http://${this.server}:${this.port}/accounting/verifica_accesso`, account);
  }

  loggedUser(): number{
    return Number(sessionStorage.getItem('userId'));
  }

  isLogged(): boolean{
    return (sessionStorage.getItem('userId') != null) ? true : false;
  }

  logoutUser(){
    sessionStorage.removeItem('userId');
  }
}
