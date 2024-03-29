import {ApplicationRef, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountingService} from '../services/data/accounting.service';
import {Utente} from '../classi/classi';
import {UtenteDataService} from '../services/data/utente-data.service';
import {RicercaUtentiComponent} from '../ricerca-utenti/ricerca-utenti.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() loadInfo;

  datiUtente: Utente;
  nome = '';
  cognome = '';

  richiesteAmicizia: Utente[];

  constructor(
    private router: Router,
    public autenticazione: AccountingService,
    private utenteService: UtenteDataService
  ) { }

  ngOnInit(): void {
    if(this.loadInfo) {
      this.prelevaDatiUtenteCorrente();
      this.prelevaRichieste();
    }
  }

  logout() {
    this.autenticazione.logoutUser();
    //console.log("logout eseguito");
    this.router.navigate(["/login"])
  }

  prelevaDatiUtenteCorrente(){
    this.utenteService.getDatiUtente(this.autenticazione.loggedUser()).subscribe(
      response =>{
        this.datiUtente = response;
        this.nome = this.datiUtente.nome;
        this.cognome = this.datiUtente.cognome;
      }
    )
  }

  prelevaRichieste(){
    this.utenteService.richiesteAmicizia().subscribe(
      response =>{
        this.richiesteAmicizia = response;
      }
    )
  }
}
