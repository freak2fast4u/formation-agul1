import Animal from './animal';
import * as regime from './regime';

export default class Carnivore extends Animal {
    // mange 25% de son poids en viande par semaine

    constructor(nom, poids) {
        super(nom, poids, 0.25, regime.CARNI);
    }
}