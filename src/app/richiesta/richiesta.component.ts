import {Component, Input, OnInit} from '@angular/core';
import {Utente} from '../classi/classi';
import {UtenteDataService} from '../services/data/utente-data.service';

@Component({
  selector: 'app-richiesta',
  templateUrl: './richiesta.component.html',
  styleUrls: ['./richiesta.component.css']
})
export class RichiestaComponent implements OnInit {

  @Input() utenteRichiedente: Utente;
  @Input() listaRichieste: Utente[];
  @Input() indiceInLista: number;

  constructor(private utenteDataService: UtenteDataService) { }

  ngOnInit(): void {
  }

  accettaRichiesta() {
    this.utenteDataService.accettaRichiestaAmicizia(this.utenteRichiedente.id).subscribe(
      response => {
        this.listaRichieste.splice(this.indiceInLista,1);
        console.log("richiesta accettata!")
      }
    )

  }

  rifiutaRichiesta() {
    this.utenteDataService.rifiutaRichiestaAmicizia(this.utenteRichiedente.id).subscribe(
      response => {
        this.listaRichieste.splice(this.indiceInLista,1);
        console.log("richiesta rifiutata!")
      }
    )
  }
}
