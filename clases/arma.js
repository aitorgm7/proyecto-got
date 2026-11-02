class Arma{
    #nombre;
    #dano;
    #tipo;
    #material;
    constructor(){
        this.#nombre="";
        this.#dano="";
        this.#tipo="";
    }

    get getNombre(){return this.#nombre};
    set setNombre(nombre){this.#nombre=nombre};

    get getDano(){return this.#dano};
    set setDano(dano){this.#dano=dano};

    get getTipo(){return this.#tipo};
    set setTipo(tipo){this.#tipo=tipo};

    get getMaterial(){return this.#material};
    set setMaterial(material){this.#material=material};

    descripcion() {
        console.log(`${this.#nombre} (${this.#tipo}) - daño: ${this.#dano}`);
    }
}

export default Arma;