import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChanteursComponent } from './chanteurs/chanteurs.component';
import * as addChanteurComponent from './add-chanteur/add-chanteur.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path: "chanteurs", component : ChanteursComponent},
{path: "add", component : addChanteurComponent.AddChanteurComponent},
{path: "updateChanteur/:id", component: UpdateChanteurComponent},
{path: 'login', component: LoginComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path:"register" , component:RegisterComponent},
{ path: "", redirectTo: "chanteurs", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
