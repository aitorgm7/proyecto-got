import personaje from "../personaje.js";

class consejero extends personaje{
    especialdad;
    
    constructor(){
        super();
        this.especialdad;
    }

    get getArma(){return this.arma};
    set setArma(arma){this.arma=arma};

    luchar() {
        console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia.`);
    }

    aconsejar(persona){
        console.log(`${this.nombre} aconseja a ${persona.getNombre} sobre ${this.especialdad}.`)
    }

}

export default consejero;