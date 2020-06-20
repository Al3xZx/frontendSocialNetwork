import { Component } from '@angular/core';
import {AccountingService} from './services/data/accounting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public account: AccountingService) {
  }
}
