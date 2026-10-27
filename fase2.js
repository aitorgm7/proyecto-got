import arma from "./clases/arma.js";
import consejero from "./clases/personajesEspeciales/consejero.js";
import guerrero from "./clases/personajesEspeciales/guerrero.js";
import rey from "./clases/personajesEspeciales/rey.js";
import casa from "./clases/casa.js";
import reino from "./clases/reino.js";

// Crear el reino
let poniente = new reino();
poniente.setNombre = "Poniente";

// Crear las casas
let stark = new casa();
stark.setNombre = "Stark";
stark.setLema = "Se acerca el invierno";

let lannister = new casa();
lannister.setNombre = "Lannister";
lannister.setLema = "Oye mi rugido";

// Añadir las casas al reino
poniente.anadirCasa(stark);
poniente.anadirCasa(lannister);

// Crear las armas
let garra = new arma();
garra.setNombre = "Garra";
garra.setDano = 25;
garra.setTipo = "espada";

// Crear los personajes
let jon = new guerrero();
jon.setNombre = "Jon Snow";
jon.setEdad = 25;
jon.setArma = garra;
stark.anadirMiembro(jon);

let Robert = new rey();
Robert.setNombre = "Robert Baratheon"
Robert.setEdad=45;
Robert.anosDeReinado=15;
lannister.anadirMiembro(Robert);

let tyrion = new consejero();
tyrion.setNombre = "Tyrion Lannister"
tyrion.setEdad=31;
tyrion.especialdad="estrategia política";
lannister.anadirMiembro(tyrion);

jon.presentacion();
jon.luchar();
jon.entrenar();

tyrion.presentacion();
tyrion.luchar();
tyrion.aconsejar(Robert);

Robert.presentacion();
Robert.gobernar();
Robert.luchar();