
import arma from "./clases/arma.js";
import personaje from "./clases/personaje.js";
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
poniente.anadirCasa = stark;
poniente.anadirCasa = lannister;

// Crear las armas
let garra = new arma();
garra.setNombre = "Garra";
garra.setDano = 25;
garra.setTipo = "espada";

let aguja = new arma();
aguja.setNombre = "Aguja";
aguja.setDano = 15;
aguja.setTipo = "espada";

// Crear los personajes
let jon = new personaje();
jon.setNombre = "Jon Snow";
jon.setEdad = 25;

let arya = new personaje();
arya.setNombre = "Arya Stark";
arya.setEdad = 18;

let jaime = new personaje();
jaime.setNombre = "Jaime Lannister";
jaime.setEdad = 40;

// Equipar las armas
jon.setArma = garra;
arya.setArma = aguja;

// Añadir los personajes a sus casas
stark.anadirMiembro = jon;
stark.anadirMiembro = arya;

lannister.anadirMiembro = jaime;

// Proclamar al rey
poniente.setRey = jaime;

// Mostrar las casas del reino
poniente.mostrarCasas();

// Mostrar los datos del rey
poniente.datosRey();

// Mostrar los miembros de la Casa Stark
stark.mostrarMiembros();

// Mostrar las presentaciones
console.log("Presentaciones:");
jon.presentacion();
arya.presentacion();
jaime.presentacion();

// Mostrar las armas
console.log("Armas:");
jon.getArma.descripcion();
arya.getArma.descripcion();
