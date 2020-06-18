import { Injectable } from '@angular/core';
import {AccountingService} from './accounting.service';
import {HttpClient} from '@angular/common/http';
import {Messaggio, Post, Utente} from '../../classi/classi';

@Injectable({
  providedIn: 'root'
})
export class UtenteDataService {

  server = "localhost";
  port = '8080';

  constructor(private account: AccountingService, private httpClient: HttpClient) { }

  getDatiUtente(idUtente: number){
    return this.httpClient.get<Utente>(`http://${this.server}:${this.port}/user/${idUtente}/info`);
  }

  inviaRichiestaAmicizia(userIdRicevente: number){
    return this.httpClient.post<Messaggio>(`http://${this.server}:${this.port}/user/${this.account.loggedUser()}/send_friend_request/${userIdRicevente}`,null);
  }

  accettaRichiestaAmicizia(userIdRicevente: number){
    return this.httpClient.post<Messaggio>(`http://${this.server}:${this.port}/user/${this.account.loggedUser()}/accept_friend_request/${userIdRicevente}`,null);
  }

  rifiutaRichiestaAmicizia(userIdRicevente: number){
    return this.httpClient.post<Messaggio>(`http://${this.server}:${this.port}/user/${this.account.loggedUser()}/reject_friend_request/${userIdRicevente}`,null);
  }

  //richieste di amicizia fatte all'utente attualmente loggato
  richiesteAmicizia(){
    return this.httpClient.get<Utente[]>(`http://${this.server}:${this.port}/user/${this.account.loggedUser()}/friends_request`);
  }

  //lista amici utente attualmente loggato
  listaAmici(userId: number){
    return this.httpClient.get<Utente[]>(`http://${this.server}:${this.port}/user/${userId}/friends_list`);
  }

  //lista post utente attualmente loggato
  listaPost(userId: number){
    return this.httpClient.get<Post[]>(`http://${this.server}:${this.port}/user/${userId}/post_list`);
  }

  cercaUtente(nome: string, cognome: string, numPage: number, numInPage: number){
    return this.httpClient.get<Utente[]>(`http://${this.server}:${this.port}/user/search/${nome}/${cognome}/${numPage}/${numInPage}`);
  }

  verificaAmicizia(userIdDaVerificare: number){
    return this.httpClient.get<boolean>(`http://${this.server}:${this.port}/user/${this.account.loggedUser()}/verifiva_amicizia/${userIdDaVerificare}`);
  }

}
