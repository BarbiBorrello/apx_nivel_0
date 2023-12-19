console.log("--- Operadores Logicos ---");

console.log("--- and & & ---");

const number = 15;

if (number > 10 && number < 20) {
  console.log("El número está entre 10 y 20");
}


// modificá el valor de name para ver que pasa
const name = "";
const userName = name || "Anónimo";


console.log(userName);

const mensaje = userName && "Hay un userName";
console.log(mensaje);