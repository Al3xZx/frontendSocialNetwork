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
import { AmiciComponent } from './amici/amici.component';
import { RicercaUtentiComponent } from './ricerca-utenti/ricerca-utenti.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import {HttpClientModule} from '@angular/common/http';
import { MsgSucComponent } from './msg-suc/msg-suc.component';
import { MsgErrComponent } from './msg-err/msg-err.component';

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
    DiarioComponent,
    AmiciComponent,
    RicercaUtentiComponent,
    LoginComponent,
    ErrorComponent,
    RegistrazioneComponent,
    MsgSucComponent,
    MsgErrComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
