const peli = "Jurassic Park";
const estreno = 1993;

const currentYear = 2023;
const tiempo = currentYear -estreno;
console.log( "La pelicula tiene : " + tiempo +" "+ "años");
console.log ( "El nombre de la pelicula es: " +peli);

/* 
NaN: Not a number

Programar es manipular datos. 
Datos que tienen que ver con el problema que estamos resolviendo.
Estos datos van a ser cosas como números, textos, fechas, etc.

Los lenguajes de programación diferencian cada tipo de dato 
y esto nos ayuda a manipularlos.

Hoy vamos a introducirnos al concepto: tipos de datos 
 */

console.log("------------------------------------------");

const x = "2";
const y = "2";
const r = x + y;

console.log(r);

console.log("------------------------------------------");

const x2 = "2";
const tipoDeX = typeof x2;
const tipoDeTipo = typeof tipoDeX;

console.log(tipoDeTipo);

console.log("-------- inferido-------------");

const peli2 = "Jurassic Park";
console.log(peli2, typeof peli2);

const estreno2 = 1993;
console.log(estreno2,typeof estreno2);

// const nombre: string = "Marce";

/* 
En javascript no se puede (todavía) señalar
el tipo de dato, ya que es un lenguaje 
de "tipo inferido".

Esto quiere decir que reconoce el tipo y se lo asigna
en base al valor que le asignamos al dato. 
*/

console.log("-------- typeof-------------");

const movieName = "Jurassic Park";
console.log("Nombre de peli:", movieName);
console.log("Tipo:", typeof movieName);

console.log("------");

const year = 1993;
const tipoDeYear = typeof year;
//        ^----------"number"

console.log("tipoDeYear:", tipoDeYear);

/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof
*/

console.log("-------- operaciones-------------");

const peli3 = "Jurassic Park";

console.log("Dato: peli");
console.log("Valor:", peli3);
console.log("Tipo:", typeof peli3);
console.log("Cantidad de letras:", peli3.length);

const estreno3 = 1993;

console.log("Dato: estreno");
console.log("Valor:", estreno3);
console.log("Tipo:", typeof estreno3);
console.log("Cantidad de letras:", estreno3.length);

/* 
El tipo de dato también va a definirnos que tipo
de operaciones podemos hacer con este dato. 
Por ejemplo: Los strings tienen una propiedad
length que nos dice la cantidad de caracteres que
tiene el texto. 

Los numbers no tienen esta propiedad.

Esto de .length lo vamos a entender en profundidad
cuando veamos objetos.
*/

console.log("-------- suma -------------");

const numA = 9;
const numB = 3;
const resultado = numA + numB;

console.log("Resultado:", resultado);

const nombre = "Marce";
const apellido = "Zapaia";
console.log(typeof nombre, typeof apellido);
const nombreCompleto = nombre + apellido;

console.log("nombreCompleto:", nombreCompleto);

// console.log("nombre:", nombre);
// console.log("apellido:", apellido);

/* 
De la misma forma, Javascript no va a interpretar
lo mismo cuando queramos sumar dos números y dos textos.

Dependiendo de su tipo de dato va a ejecutar
dos operaciones diferentes.
 */

console.log("-------- dinamico -------------");

let edad = 30;
console.log("Edad:", edad);
console.log("Tipo:", typeof edad);

console.log("----");

edad = "Treinta";
console.log("Edad:", edad);
console.log("Tipo:", typeof edad);

/* Javascript, además de ser de tipo inferido,
es de tipo dinámico.

Esto significa que, en el caso de las variables, 
les asigna el tipo de dato a medida que va ejecutando el
programa. 

O sea que un idenfiticador puede cambiar su tipo ya que depende
de su valor.

ADVERTENCIA
Esta es una práctica que tiene sus riesgos.
Tratemos de que el código sea predecible.
No vale la pena ahorrar en variables/constantes.
*/