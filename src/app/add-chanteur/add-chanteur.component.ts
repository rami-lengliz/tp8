import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Correct import for Router
import { Categorie } from '../model/categorie.model';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-add-chanteur',
  templateUrl: './add-chanteur.component.html',
  styleUrls: ['./add-chanteur.component.css'] // Use styleUrls instead of styleUrl
})
export class AddChanteurComponent implements OnInit {

  newChanteur = new Chanteur();
  categories!: Categorie[];
  newIdHipHop!: number;
  newCategorie!: Categorie;

  message: string = "";

  constructor(private chanteurService: ChanteurService, private router: Router) { // Added missing comma

  }

  ngOnInit(): void {
    // Removed the addition here; this should only be done when ready to add
    this.categories = this.chanteurService.listeCategories(); // Load categories on initialization
  }

  addChanteur() {
    console.log(this.newChanteur);
    this.newCategorie = this.chanteurService.consulterCategorie(this.newIdHipHop);
    this.newChanteur.categorie = this.newCategorie;

    this.chanteurService.ajouterChanteur(this.newChanteur);
    this.router.navigate(["chanteurs"]);
  }

}
