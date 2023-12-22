console.log ("--- switch ----");

const fruit = "naranja";

switch (fruit) {
  case "apple":
    console.log("Es una manzana");
    break;
  case "banana":
    console.log("Es una banana");
    break;
  case "orange":
    console.log("Es una naranja");
    break;
  default:
    console.log("No es una fruta conocida");
}

console.log ("--- switch : sintaxis ----");

switch (expression) {
    case value1:
      // código a ejecutar si expression es igual a value1
      break;
    case value2:
      // código a ejecutar si expression es igual a value2
      break;
    //...
    default:
      // código a ejecutar si ningún case coincide con el valor de expression
  }
  