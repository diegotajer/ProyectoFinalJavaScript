


  function realizarPago2() {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    let total = JSON.parse(localStorage.getItem('totalPago'));
    let nombreUsuario = localStorage.getItem('nombreUsuario') || "muchas gracias"
  
    //ticket
    let carritoEscrito= "";
    for (const producto of carrito) {
        carritoEscrito = carritoEscrito.concat(` \n${producto.name} (${producto.fecha}) ${producto.horario}hs ${producto.cantidad} entrada(s)`)};
      
  
    Swal.fire({
      position: "center",
      icon: "success",
      background: "#eee",
      title: "Tu pago fue procesado, "+ nombreUsuario+".\n \nResumen de compra:"+ carritoEscrito + "\n Tu pago total es " + total,
      showConfirmButton: false,
    });
   
  }

  export  {realizarPago2}