 console.log ("--- Truthy / Falsy ---");

const nombre = "Marce";

if(nombre){
  console.log("el nombre existe")
}

// en el contexto de una condición
// el valor aunque es un string
// es tomando como true
// esto es un valor truthy (verdadero, ponele)

//*********************************************** 

const nombre2 = "";
// al inciar una variable con un texto ""
// aunque es string, en una condición
// es tomado como false

console.log(typeof nombre2);

if (nombre) {
  console.log("El nombre es", nombre2);
} else {
  console.log("No  hay nombre");
}