class reino{
    nombre;
    casas;
    rey;
    constructor(){
        this.nombre="";
        this.casas=[];
        this.rey={};
    }

    get getNombre(){return this.nombre};
    set setNombre(nombre){this.nombre=nombre};

    get getCasas(){return this.casas};
    set setCasas(miembros){this.casas=miembros};
    
    anadirCasa(casa){
        this.casas.push(casa);
        console.log(`La casa ${casa.getNombre} ha sido añadida al Reino de ${this.nombre}.`);
    };

    mostrarCasas(){
        console.log(`Casas dek reino de ${this.nombre}:`);
        this.casas.forEach(casa=>{
            console.log("- Casa",casa.getNombre);
        })
    }

    get getRey(){return this.rey};
    set setRey(rey){this.rey=rey;};

    proclamarRey(objrey){
        if(objrey instanceof rey){
            this.rey=objrey;
            console.log(`${objrey.getNombre} ha sido proclamado rey de ${this.nombre}.`);
        }
    }

    datosRey(){
        console.log("Rey actual:")
        console.log(`El rey actual ${this.rey.getNombre} de la Casa ${this.rey.getCasa}.`);
    }
}

export default reino;