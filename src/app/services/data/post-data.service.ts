import { Injectable } from '@angular/core';
import {Commento, Like, Post, Utente} from '../../classi/classi';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  post=[
    new Post(0, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Gabry","Moli"), null, null),
    new Post(2, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ele","Pal"), null, null),
    new Post(1, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
    new Post(3, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"test","test"), null, null),
    ];

  constructor() { }

  listaPost(): Post[]{
    return this.post;
  }

  aggiungiPost(p: Post){
    if(this.post == null){
      p.id = 0;
      this.post = [p];
    }else{
      p.id = this.post.length;
      this.post.push(p);
    }
    console.log(this.post)
  }

  aggiungiCommento(idPost: number, commento: Commento){
    for(let p of this.post){
      if (p.id === idPost) {
        if(p.commenti == null)
          p.commenti = [commento];
        else
          p.commenti.push(commento);
      }
    }
  }

  aggiungiLike(idPost: number) {
    for (let p of this.post)
      if (p.id === idPost) {
        var l = new Like(null, new Date(), p, null)
          if(p.likes == null)
            p.likes = [l];
          else
            p.likes.push(l);
        }
  }
}
