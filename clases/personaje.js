class personaje{
    nombre;
    edad;
    vivo;
    arma;
    casa;
    constructor(){
        this.nombre="";
        this.edad=0;
        this.vivo=true;
        this.arma={};
        this.casa="";
    }

    get getNombre(){return this.nombre};
    set setNombre(nombre){this.nombre=nombre};

    get getEdad(){return this.edad};
    set setEdad(edad){this.edad=edad};

    get getVivo(){
        if(this.vivo) console.log(`${this.nombre} está vivo.`);
        else console.log(`${this.nombre} está muerto.`);
    }
    set setVivo(estado){this.vivo=estado};

    get getArma(){return this.arma};
    set setArma(arma){
        this.arma=arma;
        console.log(`${this.nombre} ha equipado el arma ${arma.getNombre}.`);
    };

    get getCasa(){return this.casa};
    set setCasa(casa){this.casa=casa};

    presentacion(){console.log(`Soy ${this.nombre} de la Casa ${this.casa}.`)}
}

export default personaje;