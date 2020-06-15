import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DiarioComponent} from './diario/diario.component';
import {AmiciComponent} from './amici/amici.component';
import {RicercaUtentiComponent} from './ricerca-utenti/ricerca-utenti.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'diario', component: DiarioComponent},
  {path: 'amici', component: AmiciComponent},
  {path: 'ricerca', component: RicercaUtentiComponent},
  {path: 'ricerca/:nome/:cognome', component: RicercaUtentiComponent},
  {path: 'ricerca/:nome', component: RicercaUtentiComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
