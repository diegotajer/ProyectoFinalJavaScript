
function bajarStock(listaFunciones) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
     for (const elemento of carrito) {
      for (const funcion of listaFunciones) {
        if (elemento.id == funcion.id) {
          funcion["capacidad"] -= elemento.cantidad;
        }
      }
     };
  }

  export {bajarStock}