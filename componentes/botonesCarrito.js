function resetearCarro() {
    localStorage.removeItem('carrito');
  } 

  function verOcultar() {
    var x = document.getElementById("carritoDeCompras");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

export {resetearCarro,verOcultar}