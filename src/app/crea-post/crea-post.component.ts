import { Component, OnInit } from '@angular/core';
import {PostDataService} from '../services/data/post-data.service';
import {Commento, Like, Post} from '../classi/classi';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-crea-post',
  templateUrl: './crea-post.component.html',
  styleUrls: ['./crea-post.component.css']
})
export class CreaPostComponent implements OnInit {

  testo = '';

  constructor(private postServ: PostDataService) { }

  ngOnInit(): void {
  }

  creaPost(){
    var p: Post;
    p = new Post(null, new Date(), this.testo, null, null, null);
    console.log(p)
    this.postServ.aggiungiPost(p)
    this.testo = '';
  }

}
