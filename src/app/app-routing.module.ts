import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DiarioComponent} from './diario/diario.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'diario', component: DiarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
