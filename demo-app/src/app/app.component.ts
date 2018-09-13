import { Component, ViewEncapsulation } from '@angular/core';
import Zoo from './model/zoo';
import Herbivore from './model/herbivore';
import Carnivore from './model/carnivore';
import Omnivore from './model/omnivore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // , encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'jackass !!';
  introIsHidden = false;
  currentTime = new Date();

  myzoo : Zoo;
 
  xformData = {
    nom : <string> null,
    poids : <number> null,
    regime : <string> null
  }

  constructor() {
    setInterval(x => this.currentTime=new Date(), 1000);
    
    this.myzoo = new Zoo(10, 'lyon');

    this.myzoo.addAnimal(new Herbivore('diplo', '750'));
    this.myzoo.addAnimal(new Carnivore('raptor', 150));
    this.myzoo.addAnimal(new Omnivore('bertrand', 70));

  }

  btnAddAnimal (event : Event) {
    if (this.xformData.regime === "HERBI") {
      this.myzoo.addAnimal(new Herbivore(this.xformData.nom, this.xformData.poids));
    } else if (this.xformData.regime === "OMNI") {
      this.myzoo.addAnimal(new Omnivore(this.xformData.nom, this.xformData.poids));
    } else if (this.xformData.regime === "CARNI") {
      this.myzoo.addAnimal(new Carnivore(this.xformData.nom, this.xformData.poids));
    } else {
      /// no idea
    }
    

  }

}
