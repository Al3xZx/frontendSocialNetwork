import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AccountingService} from './data/accounting.service';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardService implements CanActivate{

  constructor(private autenticazione: AccountingService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let ret = this.autenticazione.isLogged();
    if(!ret){
      this.route.navigate(['/login']);
    }
    return ret;
  }
}
