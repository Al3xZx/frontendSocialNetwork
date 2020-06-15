import {Component, Input, OnInit} from '@angular/core';
import {Commento} from '../classi/classi';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {

  nomeUtente: string;

  @Input() commento: Commento;

  constructor() { }

  ngOnInit(): void {
    if(this.commento.utente != null)
      this.nomeUtente = this.commento.utente.nome+" "+this.commento.utente.cognome;
    else
      this.nomeUtente = "Nome Utente";
  }

}
