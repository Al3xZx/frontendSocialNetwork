import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CreaPostComponent } from './crea-post/crea-post.component';
import {FormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import { CommentoComponent } from './commento/commento.component';
import { RichiestaComponent } from './richiesta/richiesta.component';
import { DiarioComponent } from './diario/diario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CreaPostComponent,
    PostComponent,
    CommentoComponent,
    RichiestaComponent,
    DiarioComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
