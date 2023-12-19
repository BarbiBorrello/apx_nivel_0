console.log("---Modifica el objeto --");

const peli = { titulo:"Jurassic Park", estreno: 1994 };

// película con un dato erroneo e incompleta
//console.log(peli);

// modifica la fecha de estreno asignando 1993 a peli.estreno

peli.estreno = 1993;

// agrega la propiedad director 

peli.director = "Steven Spielberg";

console.log(peli);

console.log("---Objeto terminator --");

const tituloTerminator2 = "Terminator 2: Judgment Day";
const añoEstrenoTerminator2 = 1991;
const duracionMinutosTerminator2 = 137;

// crea un objeto terminator y asignale los 3 datos

const terminator = {
    titulo :"Terminator 2: Judgment Day",
    estreno : 1991,
    duracionMinutos : 137,
  
};


console.log(terminator);

console.log("---Inspector de objetos --");

const peli = {
    titulo: "Jurassic Park",
    sinopsis:
      "Un multimillonario construye un parque temático con dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.",
    añoEstreno: 1993,
    director: "Steven Spielberg",
    duracionMinutos: 127,
    calificacionIMDb: 8.1,
  };
  
  const propiedadSeleccionada = process.argv[2];
  console.log(propiedadSeleccionada);

  console.log(peli["director"]);
  
  // recordá que para imprimir una propiedad basada en 
  // un string debes usar los corchetes: peli["director"]

  console.log("---Objetos personas --");

  const yo = {
    nombre:"Marce",
    apellido:"Zapaia",
    edad: 47,
    pais:"Alemania",
    casado : true,
  };

  const otraPersona = {
    nombre:"Pablo",
    apellido:"Trippi",
    edad: 35,
    pais:"Singapur",
    casado : false,
  };

  console.log(yo);
  console.log(otraPersona);

  console.log(yo.nombre);
  console.log(otraPersona.nombre);