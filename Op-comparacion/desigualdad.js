console.log("--- desigualdad ---");

const unUno = 1;
const unTextoConElNumeroUno = "1";


if(unUno != 5){
  console.log("Si, es distinto de 5");
}

if(unUno != unTextoConElNumeroUno){
  console.log("Esto no lo vas a ver porque no son distintos (en valor)");
}else{
  console.log("Así que vas a ver esto");
}

// si evaluamos de forma estricta
if(unUno !== unTextoConElNumeroUno){
  console.log("Si, son distintos (porque son de distinto tipo)");
}