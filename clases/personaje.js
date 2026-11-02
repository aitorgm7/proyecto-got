class Personaje{
    #nombre;
    #edad;
    #vivo;
    #casa;
    #tipo
    constructor(){
        this.#nombre="";
        this.#edad=0;
        this.#vivo=true;
        this.#casa="";
        this.#tipo="";
    }

    get getNombre(){return this.#nombre};
    set setNombre(nombre){this.#nombre=nombre};

    get getEdad(){return this.#edad};
    set setEdad(edad){this.#edad=edad};

    get getVivo(){return this.#vivo};
    set setVivo(estado){this.#vivo=estado};

    get getCasa(){return this.#casa};
    set setCasa(casa){this.#casa=casa};

    get getTipo(){return this.#tipo};
    set setTipo(tipo){this.#tipo=tipo};

    estado(){
        if(this.#vivo) console.log(`${this.#nombre} está vivo.`);
        else console.log(`${this.#nombre} está muerto.`);
    }

    presentacion(){console.log(`Soy ${this.#nombre} de la Casa ${this.#casa}.`)}
}

export default Personaje;