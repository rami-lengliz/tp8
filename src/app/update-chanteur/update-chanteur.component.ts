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
  categories!: Categorie[]; 
  updatedHipHopId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private chanteurService: ChanteurService
  ) {}

  ngOnInit(): void {
    this.currentChanteur = this.chanteurService.consulterChanteur(this.activatedRoute.snapshot.params['id']);
    this.categories = this.chanteurService.listeCategories();
    this.updatedHipHopId = this.currentChanteur.categorie?.idHipHop; }

  updateChanteur() {
    this.currentChanteur.categorie = this.chanteurService.consulterCategorie(this.updatedHipHopId);
    this.chanteurService.updateChanteur(this.currentChanteur);
    this.router.navigate(['chanteurs']);
  }
}
