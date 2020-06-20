import {Component, OnInit} from '@angular/core';
import {Post} from '../classi/classi';
import {PostDataService} from '../services/data/post-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  pagePost: number;
  numInPage = 50;

  errMsg: string;

  disabilitaContinua = false;
  msgContinua: string;


  constructor(private postServ: PostDataService) { }

  ngOnInit(): void {
    this.pagePost = 1;
    this.loadPostDiAmici();
  }

  loadPostDiAmici(){
    this.postServ.listaPostDiAmici(this.pagePost, this.numInPage).subscribe(
      response => {
        this.posts = response;
        if(this.posts.length == 0)
          this.errMsg = "non ci sono post!";
      },
      error => {
        this.errMsg = "non è stato possibile caricare i post degli amici";
      }
    )
  }

  altriPost() {
    this.pagePost++;
    //console.log("altri post pag "+this.pagePost)
    this.postServ.listaPostDiAmici(this.pagePost, this.numInPage).subscribe(
      response => {
        if(response.length === 0) {
          this.disabilitaContinua = true;
          this.msgContinua = "non ci sono altri post!"
        }
        for(let p of response)
          this.posts.push(p);
      }
    )
  }
}
