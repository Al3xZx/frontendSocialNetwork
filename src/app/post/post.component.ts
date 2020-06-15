import {Component, Input, OnInit} from '@angular/core';
import {Commento, Like, Post, Utente} from '../classi/classi';
import {PostDataService} from '../services/data/post-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  testoNuovoCommento = "";
  numLike : number;
  nomeUtente: string;

  @Input() post: Post;

  constructor(private postServ: PostDataService) { }

  ngOnInit(): void {
    if(this.post.utente != null)
      this.nomeUtente = this.post.utente.nome+" "+this.post.utente.cognome;
    else
      this.nomeUtente = "Nome Utente";
    this.numLike = this.post.likes != null ? this.post.likes.length : 0;
  }


  addLike() {
    this.postServ.aggiungiLike(this.post.id);
    this.numLike = this.post.likes != null ? this.post.likes.length : 1;
  }

  addCommento() {
    console.log("aggiunto commento");
    var nuovoCommento = new Commento(null,new Date(),this.testoNuovoCommento, null,new Utente(25,"Mario", "Rossi"))
    this.postServ.aggiungiCommento(this.post.id, nuovoCommento)
    this.testoNuovoCommento = '';
  }
}
