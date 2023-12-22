 console.log("--- Leyendo ternarios ---");


const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8;
const velocidadCPU = 4; 
const precio = 999;

const esPotente = ram >= 8 && nucleosCPU >= 4 ? "potente" : "no es potente";
const capacidad = almacenamiento > 1 ? "Alta" : "Baja";
const tipoCPU = velocidadCPU > 3? "Rapida" || velocidadCPU <= 3 : "Lenta";
const rangoPrecio  = precio < 1000? "Accesible" || precio >= 1000 : "Costosa";


console.log("¿Es potente?", esPotente);
console.log("Capacidad de almacenamiento:", capacidad);
console.log ("Tipo de cpu :", tipoCPU);
console.log("El rango de precio es :",rangoPrecio);

const descripcion = `Esta computadora es ${esPotente} ,tiene una capacidad de almacenamiento ${capacidad}. Ademas su velocidad es ${tipoCPU} y su precio es ${rangoPrecio}` ;

console.log (descripcion);
