console.log("--- Utilizando Switch ---");

const day = 5 ;
let dayName = "";


switch (day){
    case 1 : 
    dayName = "Lunes";
    break;
    case 2 : 
    dayName = "Martes";
    break;
    case 3 : 
    dayName = "Miercoles";
    break;
    case 4 : 
    dayName = "Jueves";
    break;
    case 5 : 
    dayName = "Viernes";
    break;
    case 6 : 
    dayName = "Sabado";
    break;
    case 7 : 
    dayName = "Domingo";
    break;
    default:
      console.log("No es un dia de la semana");

}

console.log("Hoy es", dayName);