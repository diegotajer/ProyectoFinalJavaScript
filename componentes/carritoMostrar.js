


function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(p => p.id !== deleteID);
  
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  }

function mostrarCarrito(promo) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.querySelector('#carritoDeCompras');
    let footer = document.querySelector('#total');
    let carritoHTML = '';
    let footerHTML = "";
  
    for (const p of carrito) {
      carritoHTML += `
        <div class="card-carrito" id=${p.id}>
          <h5>${p.name}</h5>
          <p>${p.fecha} ${p.horario}hs</p>
          <p class="precioUnitario">Precio unitario: $${p.price}</p>
          <p>Cantidad de entradas: ${p.cantidad}</p>
          <p class="capacidadSala">Capacidad: ${p.capacidad}</p>
          <p>Total: $${p.totalPrice}</p>
          <button class="eliminar-carrito" data-id=${p.id}>Eliminar</button>
        </div>
      `;
    }
  
    contenedorCarrito.innerHTML = carritoHTML;
  
    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
      btn.addEventListener('click', () => {
        let btnDelete = btn.getAttribute('data-id');
        eliminarDelCarrito(btnDelete);
      });
    });
  
    let totalCarrito = carrito.reduce((acc, p) => acc + p.totalPrice, 0);
    totalCarrito = totalCarrito *= promo; 
    localStorage.setItem('totalPago', totalCarrito);
    footer.innerHTML = footerHTML + `<h5> Total (con descuentos): $${totalCarrito} </h5>`
     let compraSumada = totalCarrito ;
  }



  export {mostrarCarrito, eliminarDelCarrito}