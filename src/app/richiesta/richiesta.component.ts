import {Component, Input, OnInit} from '@angular/core';
import {Utente} from '../classi/classi';

@Component({
  selector: 'app-richiesta',
  templateUrl: './richiesta.component.html',
  styleUrls: ['./richiesta.component.css']
})
export class RichiestaComponent implements OnInit {

  @Input() utenteRichiedente: Utente;

  constructor() { }

  ngOnInit(): void {
    if(this.utenteRichiedente == null)
      this.utenteRichiedente = new Utente(null,"Alessandro", "Molinaro");
  }

  accettaRichiesta() {
    console.log("richiesta accettata!")
  }

  rifiutaRichiesta() {
    console.log("richiesta rifiutata!")
  }
}
