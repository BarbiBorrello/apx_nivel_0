
console.log("-- objeto literal // constructor --");

// creando un objeto literal
const objetoLiteralFecha = {
    day: 18,
    month: 12,
    year: 2022
  };
  console.log(objetoLiteralFecha.year);
  
  // usando un constructor
  const objetoCreadoPorUnConstructor = new Date("2022-12-18");
  console.log(objetoCreadoPorUnConstructor.getFullYear());