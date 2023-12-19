console.log("--- Ejercicio: Stock y descuento ---");


const producto ={
    nombre: "",
    precio: 1000,
    stock: 11,

};

const persona = {
    nombre: 'Ana',
    tarjeta: {
      tipo: 'Master',
      saldo: 5000
    }
  };

//  Si hay stock del producto

if(producto.stock <= 10 && producto.stock > 0){
    console.log("hay stock");
} else {
    console.log("no hay stock");
}

//**********************************************

//Si la persona tiene suficiente saldo en su tarjeta para comprar el producto

const saldoEnCuenta = persona.tarjeta.saldo >= producto.precio;

if(saldoEnCuenta){
  console.log("Puedo pagarlo con el dinero en mi cuenta")
} else {
   console.log("El saldo en cuenta es insuficiente")
}

//**********************************************
/*Si la persona tiene descuento en su tarjeta 
(asume que el descuento se aplica para tarjetas de tipo "Visa")*/

const descuento = persona.tarjeta.tipo == "Visa";

if (descuento) {
  console.log("Tiene descuento")
} else {
  console.log("Solo la tarjeta Visa, tiene descuento")
}