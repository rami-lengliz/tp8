import { Component, OnInit } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-chanteurs',
  templateUrl: './chanteurs.component.html',
  styleUrls: ['./chanteurs.component.css']
})
export class ChanteursComponent implements OnInit {
  chanteurs: Chanteur[] = [];

  constructor(private chanteurService: ChanteurService) {}

  ngOnInit(): void {
    this.chanteurs = this.chanteurService.listeChanteurs();
  }
  supprimerChanteur(p: Chanteur)
{
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.chanteurService.supprimerChanteur(p);
}
}
