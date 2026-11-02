import Personaje from "../personaje.js";

class Khalesi extends Personaje{
    #dragones;
    #consejero;
    constructor(){
        super();
        this.#dragones=[];
        this.#consejero={};
    }

    get getConsejero(){return this.#consejero};
    set setConsejero(consejero){this.#consejero=consejero};

    get getDragones(){return this.#dragones};
    set setDragones(dragones){this.#dragones=dragones};
    
    anadirDragones(dragon){
        if(dragon instanceof Personaje){
            this.#dragones.push(dragon);
        }
        
    };

    mostrarDragones(){
        this.#dragones.forEach(dragon=>{
            console.log("-",dragon.getNombre);
        })
    }

}

export default Khalesi;