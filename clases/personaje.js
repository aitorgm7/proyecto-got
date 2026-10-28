class Personaje{
    #nombre;
    #edad;
    #vivo;
    #casa;
    constructor(){
        this.#nombre="";
        this.#edad=0;
        this.#vivo=true;
        this.#casa="";
    }

    get getNombre(){return this.#nombre};
    set setNombre(nombre){this.#nombre=nombre};

    get getEdad(){return this.#edad};
    set setEdad(edad){this.#edad=edad};

    get getVivo(){return this.#vivo};
    set setVivo(estado){this.#vivo=estado};

    get getCasa(){return this.#casa};
    set setCasa(casa){this.#casa=casa};

    

    estado(){
        if(this.#vivo) console.log(`${this.#nombre} está vivo.`);
        else console.log(`${this.#nombre} está muerto.`);
    }

    presentacion(){console.log(`Soy ${this.#nombre} de la Casa ${this.#casa}.`)}
}

export default Personaje;