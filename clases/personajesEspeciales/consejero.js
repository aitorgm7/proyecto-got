import Personaje from "../personaje.js";

class Consejero extends Personaje{
    #especialdad;
    
    constructor(){
        super();
        this.#especialdad;
    }

    luchar() {
        console.log(`${this.getNombre()} no lucha con armas, sino con palabras e inteligencia.`);
    }

    aconsejar(persona){
        console.log(`${this.getNombre()} aconseja a ${persona.getNombre} sobre ${this.#especialdad}.`)
    }

}

export default Consejero;