
export default class Animal {
    _poids : number;
    _nom : string;
    _consoCoeffViande : number;
    _regime : Function;

    constructor(nom, poids, consoCoeffViande, regime)  {
        this._nom = nom;
        this._poids = poids;
        this._consoCoeffViande = consoCoeffViande;
        this._regime = regime;
    };
    
    get nom():string {
        return this._nom;
    };
    get poids():number{
        return this._poids;
    };
    get consoCoeff():number {
        return this._consoCoeffViande;
    };
    get regime():Function {
        return this._regime;
    };

}

