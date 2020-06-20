import {Component, Input, OnInit} from '@angular/core';
import {PostDataService} from '../services/data/post-data.service';
import {Commento, Like, Post, Utente} from '../classi/classi';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-crea-post',
  templateUrl: './crea-post.component.html',
  styleUrls: ['./crea-post.component.css']
})
export class CreaPostComponent implements OnInit {


  @Input() posts: Post[]
  testo = '';


  errMsg: string;
  sucMsg: string;

  constructor(private postServ: PostDataService) { }

  ngOnInit(): void {

  }

  creaPost(){
     this.postServ.aggiungiPost(new Post(this.testo)).subscribe(
      response => {
        this.sucMsg = "post pubblicato correttamente!";
        if(this.posts != null) this.posts.splice(0,0,response);
        setTimeout( ()=>{this.sucMsg = '' }, 2500);

      },
      err =>{
        this.errMsg = "errore nella pubblicazione del post!";
        setTimeout( ()=>{this.errMsg = '' }, 2500);
      }
    )
    this.testo = '';
  }

}
