import Animal from './animal';
import Herbivore from './herbivore';
import Carnivore from './carnivore';
import Omnivore from './omnivore';

export default class Zoo {

    _animaux : Set<Animal> = new Set();

    _capacite : number;
    _lieu : string;

    constructor(capacite:number, lieu:string) {
        this._capacite = capacite;
        this._lieu = lieu;
    };
    
    addAnimal (a : Animal): void {
        if (this._animaux.size == this._capacite) {
            console.log("Zoo plein !");
        }
        this._animaux.add(a);
    };

    removeAnimal (a : Animal) : void {
        this._animaux.delete(a);
    };

    getAnimals () : Set<Animal> {
        return this._animaux;
    };
}

// var z = new Zoo(10, 'lyon');

// z.addAnimal(new Herbivore('diplo', 750))
// z.addAnimal(new Carnivore('raptor', 150));
// z.addAnimal(new Omnivore('bertrand', 70));



