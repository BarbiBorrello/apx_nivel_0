console.log("--- arrays ---");

const numeros = [1, 2, 3, 4, 5];
const nombres = ['Juan', 'Pablo', 'Ana', 'Sandra'];
const mixto = [true, 'Hola', [1, 2, 3], {nombre: 'Juan'}];

console.log(numeros);
console.log(nombres);
console.log(mixto);

console.log("--- acceder a  arrays ---");

const nombres2 = ['Juan', 'Pablo', 'Ana', 'Sandra'];

console.log(nombres2[0]);
// equivale a 'Juan'

const pos = 1;
console.log(nombres[pos]);
// equivale a nombres[1] o sea 'Pablo'