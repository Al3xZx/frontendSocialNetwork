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

  constructor(private postServ: PostDataService) { }

  ngOnInit(): void {
    this.posts = this.postServ.listaPost();
  }
}
