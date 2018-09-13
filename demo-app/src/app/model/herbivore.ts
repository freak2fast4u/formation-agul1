import Animal from './animal';
import * as regime from './regime';

export default class Herbivore extends Animal {
    // mange 0% de son poids en viande par semaine

    constructor(nom, poids) {
        super(nom, poids, 0.0, regime.HERBI);
    }
}