import personaje from "../personaje.js";

class rey extends personaje{
    anosDeReinado;

    constructor(){
        super();
        this.anosDeReinado=0;
    }

    get getAnosDeReinado(){return this.anosDeReinado};
    set setAnosDeReinado(anosDeReinado){this.anosDeReinado=anosDeReinado};

    luchar(){
        console.log(`${this.nombre} lidera la batalla y anima a sus tropas.`);
    }

    gobernar() {
        console.log(`${this.nombre} gobierna con sabiduria desde hace ${this.anosDeReinado} años.`);
    }
}

export default rey;