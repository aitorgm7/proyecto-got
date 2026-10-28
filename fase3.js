import Casa from './clases/casa.js';
import  Arma  from './clases/arma.js';
import Guerrero from './clases/personajesEspeciales/guerrero.js';
import Rey from './clases/personajesEspeciales/rey.js';
import Consejero from './clases/personajesEspeciales/consejero.js'
import  Batalla  from './clases/batalla.js';

let casaStark = new Casa();
casaStark.setNombre = "Stark";
casaStark.setLema = "El invierno se acerca";
let casaLannister = new Casa();
casaLannister.setNombre = "Lannister";
casaLannister.setLema = "Oye mi rugido"

let garra = new Arma();
garra.setNombre = "Garra";
garra.setDano = 90;
let aguja = new Arma();
aguja.setNombre = "Aguja";
aguja.setDano = 70
let hacha = new Arma();
hacha.setNombre = "Hacha del Norte";
hacha.setDano = 80;
let espadaLarga = new Arma();
espadaLarga.setNombre = "Espada Larga";
espadaLarga.setDano = 85;
let ballesta = new Arma();
ballesta.setNombre = "Ballesta";
ballesta.setDano = 75;
let filoRojo = new Arma();
filoRojo.setNombre = "Filo Rojo";
filoRojo.setDano = 88;
let lanzaDeCaza = new Arma();
lanzaDeCaza.setNombre = "Lanza de Caza";
lanzaDeCaza.setDano = 60;

// === GUERREROS DE LA CASA STARK ===
let jon = new Guerrero();
jon.setNombre = "Jon Snow";
jon.setEdad = 25;
jon.setVivo = true;
jon.setArma = garra;
let arya = new Guerrero();
arya.setNombre = "Arya Stark";
arya.setEdad = 18;
arya.setVivo = true;
arya.setArma = aguja;
let robb = new Guerrero();
robb.setNombre = "Robb Stark";
robb.setEdad = 22;
robb.setVivo = false;
robb.setArma = espadaLarga;
let brienne = new Guerrero();
brienne.setNombre = "Brienne de Tarth";
brienne.setEdad = 30;
brienne.setVivo = true;
brienne.setArma = hacha;

// === GUERREROS DE LA CASA LANNISTER ===
let jaime = new Guerrero();
jaime.setNombre = "Jaime Lannister";
jaime.setEdad = 32;
jaime.setVivo = true;
jaime.setArma = filoRojo;
let cersei = new Guerrero();
cersei.setNombre = "Cersei Lannister";
cersei.setEdad = 34;
cersei.setVivo = true;
cersei.setArma = lanzaDeCaza;
let tyrion = new Guerrero();
tyrion.setNombre = "Tyrion Lannister";
tyrion.setEdad = 30;
tyrion.setVivo = true;
tyrion.setArma = ballesta;
let gregor = new Guerrero();
gregor.setNombre = "Gregor Clegane";
gregor.setEdad = 38;
gregor.setVivo = true;
gregor.setArma = hacha;

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.anadirMiembro(jon);
casaStark.anadirMiembro(arya);
casaStark.anadirMiembro(robb);
casaStark.anadirMiembro(brienne);

casaLannister.anadirMiembro(jaime);
casaLannister.anadirMiembro(cersei);
casaLannister.anadirMiembro(tyrion);
casaLannister.anadirMiembro(gregor);

casaStark.mostrarMiembros();
casaLannister.mostrarMiembros();


let batallaBastardos = new Batalla();
batallaBastardos.iniciarBatalla(casaStark,casaLannister);

batallaBastardos.mostrarMuertos();