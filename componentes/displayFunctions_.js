
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  
function mostrarFunciones2(listaFunciones) {
  
  let contenedor = document.querySelector('#funcionesMostradas');
  
  let productosHTML = '';

  for (const funcion of listaFunciones) {
    productosHTML += `
      <div class="card" id=${funcion.id}>
        <img src=${funcion.img} >
        <div class="card-product">
          <h3>${funcion.pelicula}</h3>
          <p>${funcion.dia.toLocaleDateString('es-AR',options)} a las ${funcion.horario}hs </p>
          <b>$${funcion.price} 
          <button class="mas-info" data-id=${funcion.id}>Más info</button></b>
          <select class="cantidadEntradas" data-id=${funcion.id}>
          <option value="">¿Cuántas entradas querés?</option>
          <option value="1">1 </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
          <button class="agregar-carrito" data-id=${funcion.id}>Comprar entradas</button>
        </div>
      </div>
    `;
  }

  contenedor.innerHTML = productosHTML;

}



export {mostrarFunciones2}

