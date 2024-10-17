import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Chanteur } from '../model/chanteur.model';

@Injectable({
  providedIn: 'root'
})
export class ChanteurService {

  chanteurs: Chanteur[];
  categories: Categorie[];

  constructor() { 
    this.categories=[
      {idHipHop:1, nomHipHop:"gg"}

    ];

    this.chanteurs = [
      {idChanteur: 1, nomChanteur: "50 Cent", prixChanteur: 500000, datenais: new Date("2011-01-14") , categorie :{idHipHop:1, nomHipHop:"gg"}},
      {idChanteur: 2, nomChanteur: "Drake", prixChanteur: 450000, datenais: new Date("2010-12-17") ,categorie :{idHipHop:1, nomHipHop:"gg"}},
      {idChanteur: 3, nomChanteur: "Diddy", prixChanteur: 900000, datenais: new Date("2020-02-20"),categorie :{idHipHop:1, nomHipHop:"gg"}}
    ];
  }

  // Return the list of chanteurs
  listeChanteurs(): Chanteur[] {
    return this.chanteurs;
  }

  // Add a new chanteur to the list
  ajouterChanteur(chanteur: Chanteur) {
    this.chanteurs.push(chanteur);
  }
  supprimerChanteur( prod: Chanteur){
    //supprimer le produit prod du tableau produits
    const index = this.chanteurs.indexOf(prod, 0);
    if (index > -1) {
    this.chanteurs.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterChanteur(id:number): Chanteur{
      return this.chanteurs.find(p => p.idChanteur == id)!;
    }
    updateChanteur(p:Chanteur){
      //console.log(p);
      this.supprimerChanteur(p);
      this.ajouterChanteur(p);
      this.trierProduits();
        }
        trierProduits(){
          this.chanteurs = this.chanteurs.sort((n1,n2) => {
          if (n1.idChanteur! > n2.idChanteur!) {
          return 1;
          } 
          if (n1.idChanteur! < n2.idChanteur!) {
          return -1;
          }
          return 0;
          });
          }
          listeCategories():Categorie[] {
            return this.categories;
            }
            consulterCategorie(id:number): Categorie{
            return this.categories.find(HipHop => HipHop.idHipHop == id)!;
            }
        }
          
    

