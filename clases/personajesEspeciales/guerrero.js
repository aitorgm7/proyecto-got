import personaje from "../personaje.js";

class guerrero extends personaje{
    
    arma;
    
    constructor(){
        super();
        this.arma={};
    }

    get getArma(){return this.arma};
    set setArma(arma){this.arma=arma};

    equiparArma(Arma){
        if(Arma instanceof arma){
            this.arma=arma;
            console.log(`${this.nombre} ha equipado el arma ${Arma.getNombre}.`);
        }
        
    }

    luchar(){
        console.log(`${this.nombre} ataca con su ${this.arma.getNombre}, causando ${this.arma.getDano} puntos de daño.`)
    }

    entrenar(){
        console.log(`${this.nombre} se entrena sin descanso para la proxima batalla.`)
    }

}

export default guerrero;