console.log ("--- Ropa segun clima ---");

// dato recibido desde la linea de comandos
const argumento = process.argv[2];
// convertimos el dato a número (los argumentos son textos por defecto)
const temperatura = parseInt(argumento);

let recomendacion; // variable donde se almacenará la recomendación de ropa

if (temperatura < 5) {
   recomendacion = "abrigo heavy";
} else if (temperatura >= 5 && temperatura <= 15) {
   recomendacion="un bucito y campera";
} else if (temperatura >= 15 && temperatura <= 20){
    recomendacion = "sweater y pantalon largo";
} else if (temperatura >= 21 && temperatura <= 25){
    recomendacion="remera mangas cortas";
} else  {
    recomendacion = "remera y shorts";
};


console.log("La temperatura actual es de", temperatura)
console.log("Te recomendamos usar", recomendacion);
