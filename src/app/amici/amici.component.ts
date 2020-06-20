import { Component, OnInit } from '@angular/core';
import {Utente} from '../classi/classi';
import {ActivatedRoute} from '@angular/router';
import {UtenteDataService} from '../services/data/utente-data.service';

@Component({
  selector: 'app-amici',
  templateUrl: './amici.component.html',
  styleUrls: ['./amici.component.css']
})
export class AmiciComponent implements OnInit {

  idUtenteDiario: number
  listaAmici: Utente[];
  constructor(
    private route: ActivatedRoute,
    private utenteDataService: UtenteDataService
  ) { }

  ngOnInit(): void {
    this.idUtenteDiario = Number(this.route.snapshot.paramMap.get('userId'));
    this.utenteDataService.listaAmici(this.idUtenteDiario).subscribe(
      response =>{
        this.listaAmici = response;
      }
    )
  }

}
