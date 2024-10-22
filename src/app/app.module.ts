import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChanteursComponent } from './chanteurs/chanteurs.component';
import { AddChanteurComponent } from './add-chanteur/add-chanteur.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms/index';



@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChanteursComponent,
    AddChanteurComponent,
    UpdateChanteurComponent,
    LoginComponent,
    RechercheParCategorieComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
