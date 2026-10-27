class casa{
    nombre;
    lema;
    miembros;
    constructor(){
        this.nombre="";
        this.lema="";
        this.miembros=[];
    }

    get getNombre(){return this.nombre};
    set setNombre(nombre){this.nombre=nombre};

    get getLema(){return this.lema};
    set setLema(lema){this.lema=lema};

    get getMiembros(){return this.miembros};
    set setMiembros(miembros){this.miembros=miembros};
    
    anadirMiembro(miembro){
         this.miembros.push(miembro);
        miembro.setCasa = this.nombre;
        console.log(`${miembro.getNombre} se ha añadido a la casa ${this.nombre}.`);
    };

    mostrarMiembros(){
        console.log(`Miembros de la casa ${this.nombre}:`);
        this.miembros.forEach(miembro=>{
            console.log("-",miembro.getNombre);
        })
    }
}

export default casa;