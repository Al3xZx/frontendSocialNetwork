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

  @Input() listaPost: Post[]; //lista nella quale è visualizzato questo post

  @Input() post: Post;

  testoNuovoCommento = "";
  numLike : number;

  utente: Utente;

  likes: Like[];
  commenti: Commento[];

  errMsgLike: string;
  errMsgCommento: string;

  msgSucDel: string;
  msgErrDel: string;

  constructor(
    private postServ: PostDataService,
    public account: AccountingService
  ) { }

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
  // addMultipleLikeTester(){
  //   let i = 0;
  //   while (i < 10) {
  //     this.addLike(173);
  //     this.addLike(172);
  //     i++;
  //   }
  // }

  addLike() {

    function contiene(likes: Like[], idUtenteCorrente: number) {
      for(let like of likes)
        if(like.utente.id === idUtenteCorrente)
          return true;
      return false;
    }

    if(!contiene(this.likes, this.account.loggedUser())){//per evitare continue richieste: (lato api è comunque protetto dal vincolo unique)
      this.postServ.aggiungiLike(this.post.id).subscribe(
        response => {
          this.likes.push(response);

          this.numLike = this.likes.length;
        }//,
        // err => {
        //   this.errMsgLike = err.error.message;
        // }
      )
    }else{
      this.errMsgLike = "hai già messo like!";
      setTimeout( ()=>{this.errMsgLike = '' }, 2500);
    }
  }

  addCommento() {
    // console.log("aggiunto commento");
    // var nuovoCommento = new Commento(null,new Date(),this.testoNuovoCommento, null,new Utente(25,"Mario", "Rossi"))
    // this.postServ.aggiungiCommento(this.post.id, nuovoCommento)
    // this.testoNuovoCommento = '';
    this.postServ.aggiungiCommento(this.post.id, new Commento(this.testoNuovoCommento)).subscribe(
      response =>{
        this.commenti.push(response);
        this.testoNuovoCommento = '';
      },
      error => {
        this.errMsgCommento = error.error.message;
        this.testoNuovoCommento = '';
        setTimeout( ()=>{this.errMsgCommento = '' }, 2500);
      }
    )
  }

  eliminaPost(){
    this.postServ.eliminaPost(this.post.id).subscribe(
      response =>{
        this.msgSucDel = response.msg;
        // setTimeout( ()=>{this.msgSucDel = null }, 2500);
        let i = 0;
        for(let c of this.listaPost){
          if(c.id === this.post.id) {
            this.listaPost.splice(i, 1);
            break;
          }
          i++;
        }
        //window.location.reload();
      },error => {
        this.msgErrDel = error.error.message;
        setTimeout( ()=>{this.msgErrDel = null }, 2500);
      }
    )
  }
}
