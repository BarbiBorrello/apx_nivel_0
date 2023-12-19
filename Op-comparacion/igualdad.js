console.log("--- igualdad ---");

const unUno = 1;
const unTextoConElNumeroUno = "1";


if(unUno == 1){
  console.log("Esto es cierto");
}

if(unTextoConElNumeroUno == 1){
  console.log("Esto también es cierto, porque se comparan valores y no tipos");
}

if(unTextoConElNumeroUno == unUno){
  console.log("Comparando dos constantes es lo mismo");
}