
const verdadero = true;
const falsoA = false;
const falsoB = false;

const a = verdadero && falsoA;  // false : porque ambas condiciones tienen que ser verdaderas, al utilizar &&
const b = verdadero || falsoA;  // true : porque solo 1 tiene que ser verdadera al utilizar ||
const c = falsoA && falsoB;    // false : ambas condiciones tienen que ser verdaderas, al utilizar &&

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Guarda los resultados en un array y muestra el array en la terminal


const resultados = [a, b, c];

console.log("Estos son los resultados", resultados);


/* En el caso de a, el resultado es false porque estás usando el operador lógico && que requiere que ambas condiciones sean verdaderas para que el resultado sea verdadero. Como falsoA es false, el resultado de a es false.

En el caso de b, el resultado es true porque estás usando el operador lógico || que requiere que al menos una de las condiciones sea verdadera para que el resultado sea verdadero. Como verdadero es true, el resultado de b es true.

En el caso de c, el resultado es false porque estás usando el operador lógico && que requiere que ambas condiciones sean verdaderas para que el resultado sea verdadero. Como ambas falsoA y falsoB son false, el resultado de c es false. */