
console.log("-- acceder a propiedades --");

const peli = {
    titulo: "Jurassic Park",
    añoEstreno: 1993,
    director: "Steven Spielberg",
    duracionMinutos: 127,
  };
  // esto mostrará todo el objeto
  console.log(peli);
  console.log(typeof peli);
  // el . nos permite ingresar a la propiedad título
  console.log(peli.titulo);
  console.log(typeof peli.titulo);
  
  // podemos usar las propiedades de los objetos como cualquier otro dato
  const textoA = "hola";
  const textoB = textoA;
  console.log(textoA, textoB);
  
  const nombreDePeli = peli.titulo;
  console.log(nombreDePeli);
  
  // la otra forma de acceder a una propiedad es 
  // usando corchetes y un string para indicarle el nombre de la propiedad
  // a la que queremos acceder
  
  // peli[nombreDeLaPropiedad]
  console.log(peli["director"]);
  
  // esta forma es especialmente util cuando queremos acceder
  // a una propiedad pero el nombre está determinado por alguna lógica
  // vamos a ver estos casos avanzados más adelante
  
  // también podemos usar el string guardado en otro dato
  const key = "director";
  console.log(peli[key]);
  
  const directorDePeli = peli[key];
  console.log(directorDePeli);
  // al nombre de la propiedad también se lo conoce como key o clave