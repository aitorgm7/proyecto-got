import Personaje from "../personaje.js";

class Rey extends Personaje{
    #anosDeReinado;

    constructor(){
        super();
        this.#anosDeReinado=0;
    }

    get getAnosDeReinado(){return this.#anosDeReinado};
    set setAnosDeReinado(anosDeReinado){this.#anosDeReinado=anosDeReinado};

    luchar(){
        console.log(`${this.getNombre()} lidera la batalla y anima a sus tropas.`);
    }

    gobernar() {
        console.log(`${this.getNombre()} gobierna con sabiduria desde hace ${this.#anosDeReinado} años.`);
    }
}

export default Rey;