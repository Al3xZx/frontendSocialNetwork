import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DiarioComponent} from './diario/diario.component';
import {AmiciComponent} from './amici/amici.component';
import {RicercaUtentiComponent} from './ricerca-utenti/ricerca-utenti.component';
import {LoginComponent} from './login/login.component';
import {RoutGuardService} from './services/rout-guard.service';
import {ErrorComponent} from './error/error.component';
import {RegistrazioneComponent} from './registrazione/registrazione.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'index', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'home', component: HomeComponent, canActivate: [RoutGuardService]},
  {path: 'diario/:userId', component: DiarioComponent, canActivate: [RoutGuardService]},
  {path: 'amici', component: AmiciComponent, canActivate: [RoutGuardService]},
  {path: 'ricerca', component: RicercaUtentiComponent, canActivate: [RoutGuardService]},
  {path: 'ricerca/:nome/:cognome', component: RicercaUtentiComponent, canActivate: [RoutGuardService]},
  {path: 'ricerca/:nome', component: RicercaUtentiComponent, canActivate: [RoutGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
