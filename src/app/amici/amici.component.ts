import { Component, OnInit } from '@angular/core';
import {Utente} from '../classi/classi';

@Component({
  selector: 'app-amici',
  templateUrl: './amici.component.html',
  styleUrls: ['./amici.component.css']
})
export class AmiciComponent implements OnInit {

  utente: Utente
  constructor() { }

  ngOnInit(): void {
    this.utente = new Utente(null, "Ale", "Moli");
    this.utente.amici = [
      new Utente(null,"Nome", "Utente"),
      new Utente(null,"Nome", "Utente"),
      new Utente(null,"Nome", "Utente"),
      new Utente(null,"Nome", "Utente"),
      new Utente(null,"Nome", "Utente"),
    ];
  }

}
