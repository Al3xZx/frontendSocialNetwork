import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RicercaUtentiComponent} from '../ricerca-utenti/ricerca-utenti.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url = "";
  ricercaUtente = '';
  nome = '';
  cognome = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;

  }

  logout() {
    console.log("logout eseguito");
    console.log(this.url);
  }

  cercaUtente() {
    console.log(this.ricercaUtente);
    let split = this.ricercaUtente.split(" ");
    this.nome = split[0];
    if(split[1] != null) {
      this.cognome = split[1];
      this.router.navigate(['ricerca', this.nome, this.cognome]);
    }else
      this.router.navigate(['ricerca', this.nome]);
  }
}
