import {Component, Input, OnInit} from '@angular/core';
import {Commento} from '../classi/classi';
import {PostDataService} from '../services/data/post-data.service';
import {AccountingService} from '../services/data/accounting.service';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {

  nomeUtente: string;

  @Input() commento: Commento;

  @Input() listaCommento: Commento[]; //lista dei commenti alla quale appartiene questo commento

  msgSucDel: string;
  msgErrDel: string;

  constructor(
    private postDataService: PostDataService,
    public account: AccountingService
  ) { }

  ngOnInit(): void {
      this.nomeUtente = this.commento.utente.nome+" "+this.commento.utente.cognome;
  }

  eliminaCommento(){
    this.postDataService.eliminaCommento(this.commento.id).subscribe(
      response =>{
        this.msgSucDel = response.msg;
        //setTimeout( ()=>{this.msgSucDel = null }, 2500);
        let i = 0;
        for(let c of this.listaCommento){
          if(c.id === this.commento.id) {
            this.listaCommento.splice(i, 1);
            break;
          }
          i++;
        }
      },error => {
        this.msgErrDel = error.error.message;
        setTimeout( ()=>{this.msgErrDel = null }, 2500);
      }
    )
  }

}
