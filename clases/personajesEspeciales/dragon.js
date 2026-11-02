import Personaje from "../personaje.js";
import CaminanteBlanco from "./caminanteBlanco.js";

class Dragon extends Personaje{
    #vida;
    #dano;
    
    constructor(){
        super();
        this.#dano=0;
        this.#vida=100;
    }

    get getVida(){return this.#vida};
    set setVida(vida){this.#vida=vida};

    get getDano(){return this.#dano};
    set setDano(dano){this.#dano=dano};

    atacar(objetivo){
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${this.#dano} puntos de dano.`);
        if(objetivo instanceof CaminanteBlanco){
            objetivo.setVivo = false;
            objetivo.setVida = 0;
            console.log(`${objetivo.getNombre} ha muerto instantaneamente por ${this.getNombre}`)
        }
        else{
            objetivo.recibirDano(this.#dano,this);
        }
    }

    recibirDano(dano, enemigo){
        this.#vida-=dano;
        if(this.#vida<1){
            if(enemigo.getTipo == "Caminante blanco"){
                this.#vida=0;
                this.setVivo=false;
                this.setTipo="Caminante blanco";
            }
            else{
                this.#vida=0;
                this.setVivo=false;
                console.log(`${this.getNombre} ha muerto.`);
            }
            
        }
    }
}

export default Dragon;