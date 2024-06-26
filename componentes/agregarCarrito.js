let cantidadesSeleccionadas = {}

function seleccionarCantidades(productID, event) {
    cantidadesSeleccionadas[productID] = parseInt(event.target.value);}
   
   
   function agregarAlCarrito(productoID,listadoFunciones) {
     if (cantidadesSeleccionadas[productoID]) {
   
     let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
     const products = listadoFunciones.find(product => product.id === productoID);
     const productosEnCarrito = carrito.find(p => p.id === productoID);
   
   
     if (productosEnCarrito) {
       if (productosEnCarrito.cantidad + cantidadesSeleccionadas[productoID] <= products.capacidad) {
       productosEnCarrito.cantidad += cantidadesSeleccionadas[productoID];
       productosEnCarrito.totalPrice = productosEnCarrito.cantidad * productosEnCarrito.price; }
       else {Swal.fire({
         position: "center",
         icon: "error",
         background: "#eee",
         title: "Esa cantidad excede la capacidad.",
         showConfirmButton: false,
       });}
     } else {
       if (cantidadesSeleccionadas[productoID] <= products.capacidad) {
       carrito.push({
         id: productoID,
         fecha:products.dia.toLocaleDateString(),
         horario:products.horario,
         name: products.pelicula,
         price: products.price,
         capacidad: products.capacidad,
         cantidad: cantidadesSeleccionadas[productoID],
         totalPrice: products.price * cantidadesSeleccionadas[productoID]
       });
       } else {
         if (products.capacidad == 0) {
           Swal.fire({
             position: "center",
             icon: "error",
             background: "#eee",
             title: "No quedan entradas para esta función.",
             showConfirmButton: false,
           });
         } else {
         Swal.fire({
           position: "center",
           icon: "error",
           background: "#eee",
           title: "No quedan tantas entradas. Solo quedan "+ products.capacidad + ".",
           showConfirmButton: false,
         });
       }}
     }
   
     localStorage.setItem('carrito', JSON.stringify(carrito));
   }
   }

   export {agregarAlCarrito,seleccionarCantidades}