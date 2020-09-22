import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composant/utilisateur/utilisateur.component';
import { DonneesService} from './service/donnees.service';


import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DonneesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
