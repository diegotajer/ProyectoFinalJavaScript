
// paso del json a una lista local
function fetchFunciones(lista) {
  fetch('package2.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(funcion => {
        var funcionParalela = {};
        funcionParalela.id = funcion.id;
        funcionParalela.pelicula = funcion.pelicula;
        funcionParalela.horario = funcion.horario;
        funcionParalela.dia = new Date(funcion.dia);
        funcionParalela.genero = funcion.genero;
        funcionParalela.capacidad = funcion.capacidad;
        funcionParalela.img = funcion.img;
        funcionParalela.price = funcion.price;
        lista.push(funcionParalela); 
      });
     
    })
    .catch(error => console.error('Error loading the JSON file:', error));

  }

export default fetchFunciones;
