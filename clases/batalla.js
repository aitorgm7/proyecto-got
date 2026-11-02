import Guerrero from "./personajesEspeciales/guerrero.js";
import Casa from "./casa.js";
import CaminanteBlanco from "./personajesEspeciales/caminanteBlanco.js";

class Batalla {
    #muertos;
    #sobrevivientes;
    constructor(){
        this.#muertos=[];
        this.#sobrevivientes=[];
    }

    get getMuertos(){return this.#muertos};
    set setMuertos(muertos){this.#muertos=muertos};
    get getSobrevivientes(){return this.#sobrevivientes};
    set setSobrevivientes(sobrevivientes){this.#sobrevivientes=sobrevivientes};

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
            this.#sobrevivientes=guerreros1.filter(miembro=>miembro.getVivo).concat(guerreros2.filter(miembro=>miembro.getVivo));
        }

    }

    batallaFinal(casa,khalesi,caminatesBlancos){
        let guerreros=casa.getMiembros.filter(miembro => miembro instanceof Guerrero && miembro.getVivo).concat(khalesi.getDragones);
         console.log("Iniciamos la lucha...");
            console.log(`Los guerreros que pelearán de la casa ${casa.getNombre} y los dragones de ${khalesi.getNombre} serán los siguientes:`);
            console.log(guerreros);

            console.log(`Los caminantes blancos serán los siguientes:`);
            console.log(caminatesBlancos);
        while(guerreros.filter(guerrero=>guerrero.getVivo).length != 0 && caminatesBlancos.filter(caminante=>caminante.getVivo).length != 0){
            if(Math.random()<0.5)
                this.duelo(guerreros.find(guerrero=>guerrero.getVivo),caminatesBlancos.find(caminante=>caminante.getVivo));
            else
                this.duelo(caminatesBlancos.find(caminante=>caminante.getVivo),guerreros.find(guerrero=>guerrero.getVivo));
            
            let nuevoCaminante = guerreros.find(guerrero=>guerrero.getTipo === "Caminante blanco");
            if(nuevoCaminante!==undefined){
                guerreros.splice(guerreros.indexOf(nuevoCaminante),1);
                nuevoCaminante = this.transformacion(nuevoCaminante);
                caminatesBlancos.push(nuevoCaminante);
            }
        }

        if(guerreros.filter(guerrero=>guerrero.getVivo).length != 0)
            console.log(`La batalla ha sido ganada por la casa ${casa.getNombre} y ${khalesi.getNombre}.`);
        else
            console.log(`La batalla ha sido ganada por los Caminantes Blancos.`);

        this.#sobrevivientes=guerreros.filter(miembro=>miembro.getVivo).concat(caminatesBlancos.filter(miembro=>miembro.getVivo));
        this.#muertos=guerreros.filter(miembro=>!miembro.getVivo).concat(caminatesBlancos.filter(miembro=>!miembro.getVivo));
    }

    transformacion(guerrero){
        let nuevo = new CaminanteBlanco();
        nuevo.setNombre=guerrero.getNombre;
        nuevo.setEdad=guerrero.getEdad.Batalla
        nuevo.setTipo=guerrero.getTipo;
        if(guerrero instanceof Guerrero)
            nuevo.setPoderHelado=guerrero.getArma.getDano;
        else
            nuevo.setPoderHelado=guerrero.getDano;
        console.log(`${nuevo.getNombre} se ha convertido en Caminante blanco`);
        return nuevo;
    }

    duelo(guerrero1,guerrero2){
        console.log()
        console.log(`Nuevo enfrentamiento: ${guerrero1.getNombre} vs ${guerrero2.getNombre}`)
        guerrero1.atacar(guerrero2);
        if(guerrero2.getVivo){
            guerrero2.atacar(guerrero1);
        }
        console.log(`${guerrero1.getNombre} ${guerrero1.getVida} | ${guerrero2.getNombre} ${guerrero2.getVida}`)
    }

    mostrarMuertos(){console.log(this.#muertos)}
    mostrarSobrevivientes(){console.log(this.#sobrevivientes)}
    mostrarResultadoFinal(){
        this.mostrarSobrevivientes();
        this.mostrarMuertos();
    }
}

export default Batalla