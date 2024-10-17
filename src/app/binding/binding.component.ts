import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {
  titre : string ="dumo du data"
  status :boolean =false;
  changerTitre(){
    this.titre="new titlee";
  }
  nom : string="nadhem bel ha"

}
