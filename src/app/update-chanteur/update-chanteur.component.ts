import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chanteur } from '../model/chanteur.model';
import { Categorie } from '../model/categorie.model'; // Ensure this import matches your model's location
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-update-chanteur',
  templateUrl: './update-chanteur.component.html',
  styles: []
})
export class UpdateChanteurComponent implements OnInit {
  currentChanteur = new Chanteur();
  categories!: Categorie[]; // Using non-null assertion operator to indicate categories will be defined
  updatedHipHopId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, // Ensure Router is properly defined
    private chanteurService: ChanteurService
  ) {}

  ngOnInit(): void {
    // Correcting typo from 'parmas' to 'params'
    this.currentChanteur = this.chanteurService.consulterChanteur(this.activatedRoute.snapshot.params['id']);
    this.categories = this.chanteurService.listeCategories();
    this.updatedHipHopId = this.currentChanteur.categorie?.idHipHop; // Use optional chaining to avoid errors if categorie is undefined
  }

  updateChanteur() {
    this.currentChanteur.categorie = this.chanteurService.consulterCategorie(this.updatedHipHopId);
    this.chanteurService.updateChanteur(this.currentChanteur);
    this.router.navigate(['chanteurs']); // Make sure the route is correct
  }
}
