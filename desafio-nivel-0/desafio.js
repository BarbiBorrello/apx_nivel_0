
const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
let contadorPuntosJug1 = 0;
let contadorPuntosJug2 = 0;

//Ganador:
let ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE


if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque){
  //contadorPuntosJug1 = contadorPuntosJug1 + 1;
      contadorPuntosJug1++;
      } else if (jugadorDos.habilidades.ataque > jugadorUno.habilidades.ataque){
          contadorPuntosJug2++;
      } else {
          contadorPuntosJug1++;
          contadorPuntosJug2++;
}

//console.log ("Puntos x ataque Jugador 1 :" + contadorPuntosJug1);
//console.log ("Puntos x ataque Jugador 2 :" + contadorPuntosJug2);

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:


if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
      //contadorPuntosJug1 = contadorPuntosJug1 + 1;
      contadorPuntosJug1++;
        } else if (jugadorDos.habilidades.velocidad > jugadorUno.habilidades.velocidad){
            contadorPuntosJug2++;
          } else {
              contadorPuntosJug1++;
              contadorPuntosJug2++;
}

//console.log ("Puntos x velocidad Jugador 1 :" + contadorPuntosJug1);
//console.log ("Puntos x velocidad Jugador 2 :" + contadorPuntosJug2);


//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:


if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
      //contadorPuntosJug1 = contadorPuntosJug1 + 1;
      contadorPuntosJug1++;
      } else if (jugadorDos.habilidades.vida > jugadorUno.habilidades.vida) {
          contadorPuntosJug2 ++;
        } else {
            contadorPuntosJug1 ++;
            contadorPuntosJug2 ++;
}

//console.log ("Puntos x vida Jugador 1 :" + contadorPuntosJug1);
//console.log ("Puntos x vida Jugador 2 :" + contadorPuntosJug2);
//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:

if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia){
  //contadorPuntosJug1 = contadorPuntosJug1 + 1;
  contadorPuntosJug1++;
  } else if (jugadorDos.habilidades.magia > jugadorUno.habilidades.magia) {
      contadorPuntosJug2 ++;
    } else {
        contadorPuntosJug1 ++;
        contadorPuntosJug2 ++;
}

//console.log ("Puntos x magia Jugador 1 :" + contadorPuntosJug1);
//console.log ("Puntos x magia Jugador 2 :" + contadorPuntosJug2);

//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)

if (jugadorUno.articulos.length > jugadorDos.articulos.length){
  contadorPuntosJug1++;
} else if (jugadorDos.articulos.length > jugadorUno.articulos.length) {
  contadorPuntosJug2++;
}


//console.log ("Puntos x articulo Jugador 1 :" + contadorPuntosJug1);
//console.log ("Puntos x articulo  Jugador 2 :" + contadorPuntosJug2);


//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA

 if (contadorPuntosJug1 > contadorPuntosJug2){
        ganador = jugadorUno.nombre
          } else if (contadorPuntosJug2 > contadorPuntosJug1){
              ganador = jugadorDos.nombre
                } else {
                    ganador = null;
 }

 let resultado = { 
  [jugadorUno.nombre] : contadorPuntosJug1, 
  [jugadorDos.nombre] : contadorPuntosJug2, 
  "ganador":ganador
};


 console.log (resultado);

//-----------------------------------------------------------------------//