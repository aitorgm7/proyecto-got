import Guerrero from "./personajesEspeciales/guerrero.js";
import Casa from "./casa.js";

class Batalla {
    #muertos;
    constructor(){
        this.#muertos=[];
    }

    get getMuertos(){return this.#muertos};
    set setMuertos(muertos){this.#muertos=muertos};

    iniciarBatalla(casa1,casa2){
        if(casa1!=casa2){
            console.log("Iniciamos la lucha...");
            console.log(`Los guerreros que pelearán de la casa ${casa1.getNombre} serán los siguientes:`);
            let guerreros1=casa1.getMiembros.filter(miembro => miembro instanceof Guerrero && miembro.getVivo);
            console.log(guerreros1);

            console.log(`Los guerreros que pelearán de la casa ${casa2.getNombre} serán los siguientes:`);
            let guerreros2=casa2.getMiembros.filter(miembro => miembro instanceof Guerrero && miembro.getVivo);
            console.log(guerreros2);

            while(guerreros1.filter(guerrero=>guerrero.getVivo).length != 0 && guerreros2.filter(guerrero=>guerrero.getVivo).length != 0){
                if(Math.random()<0.5)
                    this.duelo(guerreros1.find(guerrero=>guerrero.getVivo),guerreros2.find(guerrero=>guerrero.getVivo));
                else
                    this.duelo(guerreros2.find(guerrero=>guerrero.getVivo),guerreros1.find(guerrero=>guerrero.getVivo));
            }

            if(guerreros1.filter(guerrero=>guerrero.getVivo).length != 0)
                console.log(`La batalla ha sido ganada por la casa ${casa1.getNombre}.`);
            else
                console.log(`La batalla ha sido ganada por la casa ${casa2.getNombre}.`);
        }

    }

    duelo(guerrero1,guerrero2){
        console.log()
        console.log(`Nuevo enfrentamiento: ${guerrero1.getNombre} vs ${guerrero2.getNombre}`)
        guerrero1.atacar(guerrero2);
        if(guerrero2.getVivo){
            guerrero2.atacar(guerrero1);
            if(!guerrero1.getVivo)
                this.#muertos.push(guerrero1);
        }

        else
            this.#muertos.push(guerrero2);
        console.log(`${guerrero1.getNombre} ${guerrero1.getVida} | ${guerrero2.getNombre} ${guerrero2.getVida}`)
    }

    mostrarMuertos(){console.log(this.#muertos)}
}

export default Batalla