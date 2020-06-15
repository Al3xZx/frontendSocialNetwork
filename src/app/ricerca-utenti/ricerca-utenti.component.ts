import { Component, OnInit } from '@angular/core';
import {Utente} from '../classi/classi';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ricerca-utenti',
  templateUrl: './ricerca-utenti.component.html',
  styleUrls: ['./ricerca-utenti.component.css']
})
export class RicercaUtentiComponent implements OnInit {

  utenti: Utente[];
  // nome =this.route.snapshot.paramMap.get('nome');
  // cognome = this.route.snapshot.paramMap.get('cognome');
  // utenti = [new Utente(null, this.nome, this.cognome)];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nome =this.route.snapshot.paramMap.get('nome');
    const cognome = this.route.snapshot.paramMap.get('cognome');
    this.utenti = [new Utente(null, nome, cognome)];
  }

  ricerca(){

  }

}
