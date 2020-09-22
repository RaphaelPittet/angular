import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composant/utilisateur/utilisateur.component';
import { DonneesService} from './service/donnees.service';
import {FormsModule} from '@angular/forms';
import { ProfilViewComponent } from './composant/profil-view/profil-view.component';
import { AuthComponent } from './composant/auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './service/auth.service';
import { SingleCatchComponent } from './composant/single-catch/single-catch.component';
import {FourOhFourComponent} from './composant/four-oh-four/four-oh-four.component';
import {AuthGuardService} from './service/auth-guard.service';


const appRoutes: Routes = [
  { path: 'profil', canActivate:[AuthGuardService], component: ProfilViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'fishs/:id', canActivate:[AuthGuardService], component: SingleCatchComponent},
  { path: '', component: AuthComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ProfilViewComponent,
    AuthComponent,
    SingleCatchComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DonneesService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
