import Personaje from "../personaje.js";

class CaminanteBlanco extends Personaje{

    #vida;
    #poderHelado;
    
    constructor(){
        super();
        this.#poderHelado={};
        this.#vida=100;
    }

    get getVida(){return this.#vida};
    set setVida(vida){this.#vida=vida};

    get getPoderHelado(){return this.#poderHelado};
    set setPoderHelado(poderHelado){this.#poderHelado=poderHelado};

    atacar(objetivo){
        let dano=parseInt(this.#poderHelado*(1+Math.random()));
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${dano} puntos de dano.`);
        objetivo.recibirDano(dano,this);
    }

    recibirDano(dano,enemigo){
        if(enemigo.getArma.getMaterial == "Acero valyrio"){
            this.#vida-=dano;
            if(this.#vida<1){
                this.#vida=0;
                this.setVivo=false;
                console.log(`${this.getNombre} ha muerto.`);
            }
        }
        
    }

}

export default CaminanteBlanco;