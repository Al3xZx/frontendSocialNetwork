import { Component, OnInit } from '@angular/core';
import {Post, Utente} from '../classi/classi';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  posts= [
    new Post(0, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
    new Post(2, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
    new Post(1, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
    new Post(3, new Date(), "jhsfdbdsfkdhfkhskfhdskf", new Utente(null,"Ale","Mol"), null, null),
  ];

  utente: Utente;

  constructor() { }

  ngOnInit(): void {
    if(this.utente == null)
      this.utente = new Utente(null,"Alessandro", "Molinaro");
  }



}
