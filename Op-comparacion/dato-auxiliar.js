console.log("--- dato auxiliar ---");

// sin dato auxiliar
/*const producto = {
    nombre: "Prod 1",
    precio: 100
  }
  
  const saldoEnCuenta = 50;
  
  if(producto.precio > saldoEnCuenta){
    console.log("Puedo pagarlo con el dinero en mi cuenta")
  }*/

  //*******************************************************************

  // con dato auxiliar
const producto = {
    nombre: "Prod 1",
    precio: 100
  }
  
  const saldoEnCuenta = 50;
  
  // Dato auxiliar 
  const dineroEnCuentaSuficiente = producto.precio > saldoEnCuenta;
  
  if(dineroEnCuentaSuficiente){
    console.log("Puedo pagarlo con el dinero en mi cuenta")
  }