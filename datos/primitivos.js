console.log("-----------primitivos---------------");

// ejemplo
/*const numA = 10;
const numB = 5;
const resultado = numA + numB;

console.log(numA);
console.log(numB);
console.log(resultado);

// tu código*/

const n1 = 2;
const n2 = 3;
const resultado = n1 + n2 ;

console.log(n1);
console.log(n2);
console.log(resultado);

const nombre1 = "Barbara";
const nombre2 ="Iris";
const sumarNombres= nombre1 + " " +nombre2;
console.log(sumarNombres);

console.log("-----------template string---------------");

/*const nombre = "Carlos";
const ciudad = "La Plata";

const mensaje = `Hola, ${nombre}...`;

console.log(mensaje); */

console.log("-----------ejericio: Usando tipos---------------");

const firstName ="Barbara";
const lastName = "Borrello";
const birthYear = 1977;
const currentYear = 2023;

const fullName = firstName + " " + lastName;
const years = currentYear - birthYear;

console.log(fullName);
console.log(years);

console.log("-----------ejercicio: Template---------------");

const nombre = "Barbara";
const ciudad = "Merlo, San Luis";

const mensaje = `Hola, ${nombre}.¿Cómo va todo en ${ciudad}?`;

console.log(mensaje); 

console.log("-----------ejercicio: Undefined---------------");

let unaVariable;
const esUndefined = unaVariable === undefined;

console.log(esUndefined, typeof esUndefined);

console.log("-----------ejercicio: Preguntas---------------");

const numero = 8;
const palabra = "Manzana";

const numMayorADiez = numero > 10;
const esManzana = palabra === "Manzana";

console.log(numMayorADiez, esManzana);

console.log("-----------ejercicio: Tipo Dinamico---------------");

let variableSinValor;
const primerTipo = typeof variableSinValor;

variableSinValor = null;
const segundoTipo = typeof variableSinValor;

console.log(primerTipo, segundoTipo);