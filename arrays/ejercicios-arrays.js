console.log("--- Un array de números ---");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);

console.log("--- Array de pelis ---");

const jurassicPark = {
    nombre:"Jurassic Park",
    opinion:"Es la mejor peli del mundo",
    puntaje:1000
  }

  const elJuegoDelCalamar = {
    nombre:"El juego del calamar",
    opinion:"Una serie muy violenta",
    puntaje:5000
  }

  const saliorMoon = {
    nombre:"Sailor Moon",
    opinion:"Anime japones clasico que no pasa de moda",
    puntaje:10000
  }
  
  const comando = {
    nombre:"Commando",
    opinion: "Commando",
    puntaje: 0,
  }
  
  // otras pelis

const misPelis = [jurassicPark, elJuegoDelCalamar, saliorMoon, comando]
console.log(misPelis[0]) 
// equivale al objeto jurassicPark


console.log(misPelis[0].nombre);
console.log(misPelis[0].puntaje);
console.log(misPelis[1].nombre);
console.log(misPelis[1].puntaje);
console.log (misPelis.length);

console.log("--- Organizando datos ---");

const person = {
    firstName:"Barbara",
    lastName: "Borrello",
    birthYear: 1977
   }

const anotherPerson = {
    firstName:"Pablo",
    lastName: "Tripicchio",
    birthYear: 1980
   }   

console.log(person);
console.log(anotherPerson);

const people = [person, anotherPerson];

console.log(people);
console.log(people[0]);
console.log(people[1].lastName);
