
console.log("-- modificar y crear propiedades --");

const peli = {
    titulo: "Jurassic Park",
  };
  // esto mostrará todo el objeto
  console.log(peli);
  // el . nos permite ingresar a la propiedad título
  console.log(peli.titulo);
  
  // modificando una propiedad del objeto
  peli.titulo = "Parque Jurasico";
  
  console.log(peli);
  console.log(peli.titulo);
  
  // también podemos crear nuevas propiedades simplemente asignandoles un valor
  peli.estreno = 1993;
  // En este caso usamos el signo = porque no estamos creando el objeto
  // los : solo se usan en el formato JSON que usamos para crear objetos literales
  
  // también podemos usar los corchetes para crear nuevas propiedades
  peli["director"] = "Steven Spielberg";
  
  // también podemos crear un objeto vacío e ir llenandolo
  const persona = {};
  persona.nombre = "Marce";
  console.log(persona);