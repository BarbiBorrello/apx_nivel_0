console.log("--- igualdad  estricta ---");

const unUno = 1;
const unTextoConElNumeroUno = "1";


if(unUno === 1){
  console.log("Esto es cierto");
}

if(unTextoConElNumeroUno === 1){
  console.log("Esto nunca se va a mostrar");
}else{
  console.log("Porque son de distinto tipo: string y number");
}

if(unTextoConElNumeroUno === unUno){
  console.log("Tapoco vas a ver esto en la consola");
}