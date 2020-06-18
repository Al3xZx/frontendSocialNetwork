import { Injectable } from '@angular/core';
import {Commento, Like, Post, Utente} from '../../classi/classi';
import {AccountingService} from './accounting.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  // post=[
  //   new Post(0, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Gabry","Moli"), null, null),
  //   new Post(2, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ele","Pal"), null, null),
  //   new Post(1, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
  //   new Post(3, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"test","test"), null, null),
  //   ];

  server = "localhost";
  port = '8080';

  constructor(private account: AccountingService, private httpClient: HttpClient) { }

  listaPostDiAmici(numPage: number, numInPage: number){
    return this.httpClient.get<Post[]>(`http://${this.server}:${this.port}/post/friends/${this.account.loggedUser()}/${numPage}/${numInPage}`);
  }

  listaPostUtente(userId: number, numPage: number, numInPage: number){
    return this.httpClient.get<Post[]>(`http://${this.server}:${this.port}/post/${userId}/page_post_list/${numPage}/${numInPage}`);
  }

  aggiungiPost(post: Post){
    // if(this.post == null){
    //   p.id = 0;
    //   this.post = [p];
    // }else{
    //   p.id = this.post.length;
    //   this.post.push(p);
    // }
    // console.log(this.post)
    return this.httpClient.post<Post>(`http://${this.server}:${this.port}/post/add/${this.account.loggedUser()}`, post); //ALT+0096 => `
  }

  aggiungiCommento(idPost: number, commento: Commento){
    // for(let p of this.post){
    //   if (p.id === idPost) {
    //     if(p.commenti == null)
    //       p.commenti = [commento];
    //     else
    //       p.commenti.push(commento);
    //   }
    // }
    return this.httpClient.post<Commento>(`http://${this.server}:${this.port}/post/${idPost}/add_comment_from/${this.account.loggedUser()}`,commento);
  }

  aggiungiLike(idPost: number) {
    // for (let p of this.post)
    //   if (p.id === idPost) {
    //     var l = new Like(null, new Date(), p, null)
    //       if(p.likes == null)
    //         p.likes = [l];
    //       else
    //         p.likes.push(l);
    //     }
    return this.httpClient.post<Like>(`http://${this.server}:${this.port}/post/${idPost}/add_like_from/${this.account.loggedUser()}`,null);
  }

  eliminaPost(idPost: number){
    //TODO
  }
}
