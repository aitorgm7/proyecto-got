import Personaje from "../personaje.js";
import Arma from "../arma.js"

class Guerrero extends Personaje{
    
    #vida;
    #arma;
    
    constructor(){
        super();
        this.#arma={};
        this.#vida=100;
    }

    get getVida(){return this.#vida};
    set setVida(vida){this.#vida=vida};

    get getArma(){return this.#arma};
    set setArma(arma){this.#arma=arma};

    equiparArma(arma){
        if(arma instanceof Arma){
            this.#arma=Arma;
            console.log(`${this.getNombre} ha equipado el arma ${Arma.getNombre}.`);
        }
        
    }

    atacar(objetivo){
        let dano=parseInt(this.#arma.getDano*(1+Math.random()));
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${dano} puntos de dano.`);
        objetivo.recibirDano(dano);
    }

    recibirDano(dano){
        this.#vida-=dano;
        if(this.#vida<1){
            this.#vida=0;
            this.setVivo=false;
            console.log(`${this.getNombre} ha muerto.`);
        }
    }

    luchar(){
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDano} puntos de daño.`)
    }

    entrenar(){
        console.log(`${this.getNombre} se entrena sin descanso para la proxima batalla.`)
    }

}

export default Guerrero;