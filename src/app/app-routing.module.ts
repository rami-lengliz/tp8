import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChanteursComponent } from './chanteurs/chanteurs.component';
import * as addChanteurComponent from './add-chanteur/add-chanteur.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';


const routes: Routes = [{path: "chanteurs", component : ChanteursComponent},
{path: "add", component : addChanteurComponent.AddChanteurComponent},
{path: "updateChanteur/:id", component: UpdateChanteurComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{ path: "", redirectTo: "chanteurs", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
