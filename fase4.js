import Casa from "./clases/casa.js";
import Arma from "./clases/arma.js";
import Guerrero from "./clases/personajesEspeciales/guerrero.js";
import Consejero from "./clases/personajesEspeciales/consejero.js";
import Dragon from "./clases/personajesEspeciales/dragon.js";
import Khalesi from "./clases/personajesEspeciales/khalesi.js";
import CaminanteBlanco from "./clases/personajesEspeciales/caminanteBlanco.js";
import Batalla from "./clases/batalla.js";

// --------------------------------------------------
// 1. Crear casas y armas
// --------------------------------------------------
let casaStark = new Casa();
casaStark.setNombre = "Stark";
casaStark.setLema = "El invierno se acerca";

let garra = new Arma();
garra.setNombre = "Garra";
garra.setDano = 50;
garra.setMaterial = "Acero valyrio";
garra.setTipo = "espada";

let hacha = new Arma();
hacha.setNombre = "Hacha del Norte";
hacha.setDano = 40;
hacha.setMaterial = "hierro";
hacha.setTipo = "hacha";

// --------------------------------------------------
// 2. Crear guerreros de la Casa Stark
// --------------------------------------------------
let jon = new Guerrero();
jon.setNombre = "Jon Snow";
jon.setEdad = 25;
jon.setArma = garra;
jon.setTipo="Humano";

let tormund = new Guerrero();
tormund.setNombre = "Tormund";
tormund.setEdad = 30;
tormund.setArma = hacha;
tormund.setTipo="Humano";

let edd = new Guerrero();
edd.setNombre = "Edd";
edd.setEdad = 28;
edd.setArma = hacha;
edd.setTipo="Humano";

casaStark.anadirMiembro(jon);
casaStark.anadirMiembro(tormund);
casaStark.anadirMiembro(edd);

// --------------------------------------------------
// 3. Crear a Khaleesi y sus dragones
// --------------------------------------------------
let tyrion = new Consejero();
tyrion.setNombre = "Tyrion Lannister";
tyrion.setEdad = 40;
tyrion.setCasa = "Targaryen";
tyrion.setTipo="Humano";

let drogon = new Dragon();
drogon.setNombre = "Drogon";
drogon.setDano = 60;
drogon.setTipo="Dragon";

let viserion = new Dragon();
viserion.setNombre = "Viserion";
viserion.setDano = 55;
viserion.setTipo="Dragon";

let rhaegal = new Dragon();
rhaegal.setNombre = "Rhaegal";
rhaegal.setDano = 50;
rhaegal.setTipo="Dragon";

let khaleesi = new Khalesi();
khaleesi.setNombre = "Daenerys Targaryen";
khaleesi.setEdad = 29;
khaleesi.setCasa = "Targaryen";
khaleesi.setDragones = [drogon, viserion, rhaegal];
khaleesi.setConsejero = tyrion;
khaleesi.setTipo="Humano";

// --------------------------------------------------
// 4. Crear ejército de Caminantes Blancos
// --------------------------------------------------
let caminante1 = new CaminanteBlanco();
caminante1.setNombre = "Caminante 1";
caminante1.setPoderHelado = 35;
caminante1.setTipo="Caminante blanco";

let caminante2 = new CaminanteBlanco();
caminante2.setNombre = "Caminante 2";
caminante2.setPoderHelado = 40;
caminante2.setTipo="Caminante blanco";

let caminante3 = new CaminanteBlanco();
caminante3.setNombre = "Caminante 3";
caminante3.setPoderHelado = 30;
caminante3.setTipo="Caminante blanco";

let caminante4 = new CaminanteBlanco();
caminante4.setNombre = "Caminante 4";
caminante4.setPoderHelado = 50;
caminante4.setTipo="Caminante blanco";

let ejercitoCaminantes = [caminante1, caminante2, caminante3, caminante4];

// --------------------------------------------------
// 5. Iniciar batalla final
// --------------------------------------------------
let batallaFinal = new Batalla();
batallaFinal.batallaFinal(casaStark, khaleesi, ejercitoCaminantes);
batallaFinal.mostrarResultadoFinal();
