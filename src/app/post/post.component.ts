import {Component, Input, OnInit} from '@angular/core';
import {Commento, Like, Post, Utente} from '../classi/classi';
import {PostDataService} from '../services/data/post-data.service';
import {AccountingService} from '../services/data/accounting.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  testoNuovoCommento = "";
  numLike : number;

  utente: Utente;

  likes: Like[];
  commenti: Commento[];

  errMsgLike: string;
  errMsgCommento: string;

  constructor(private postServ: PostDataService, private account: AccountingService) { }

  ngOnInit(): void {
    // if(this.post.utente != null)
    //   this.nomeUtente = this.post.utente.nome+" "+this.post.utente.cognome;
    // else
    //   this.nomeUtente = "Nome Utente";
    this.utente = this.post.utente;
    this.likes = this.post.likes;
    this.commenti = this.post.commenti;
    this.numLike = this.likes.length;
  }

  //Test Like parallelo
  // addLike(){
  //   let i = 0;
  //   while (i < 10) {
  //     this.addLike2(173);
  //     this.addLike2(172);
  //     i++;
  //   }
  // }

  addLike() {
      this.postServ.aggiungiLike(this.post.id).subscribe(
        response => {
          this.likes.push(response);

          this.numLike = this.likes.length;
        }//,
        // err => {
        //   this.errMsgLike = err.error.message;
        // }
      )
  }

  addCommento() {
    // console.log("aggiunto commento");
    // var nuovoCommento = new Commento(null,new Date(),this.testoNuovoCommento, null,new Utente(25,"Mario", "Rossi"))
    // this.postServ.aggiungiCommento(this.post.id, nuovoCommento)
    // this.testoNuovoCommento = '';
    this.postServ.aggiungiCommento(this.post.id, new Commento(this.testoNuovoCommento)).subscribe(
      response =>{
        this.commenti.push(response);
      },
      error => {
        this.errMsgCommento = error.error.message;
      }
    )
  }
}
