import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountingService} from '../services/data/accounting.service';

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
  constructor(private router: Router, public autenticazione: AccountingService) { }

  ngOnInit(): void {
    this.url = this.router.url;

  }

  logout() {
    this.autenticazione.logoutUser();
    console.log("logout eseguito");
    console.log(this.url);
    this.router.navigate(["/login"])
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
