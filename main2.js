import fetchFunciones from "./componentes/fetchFunctions.js"
import { escribirUsuarioStorage, resetearUsuario, guardarNom } from "./componentes/nombreUsuario.js";
import {ordenarFuncionesPorFecha,ordenarFuncionesPorPrecio} from "./componentes/filtrarOrdenar.js";
import {verSoloDramas,verSoloComedias,verSoloPolicial} from "./componentes/filtrarOrdenar.js"
import getMovieInfo from "./componentes/movieInfo.js"
import { mostrarCarrito, eliminarDelCarrito} from "./componentes/carritoMostrar.js";
import { resetearCarro, verOcultar} from "./componentes/botonesCarrito.js"
import { realizarPago2 } from "./componentes/pagar_.js";
import { mostrarFunciones2 } from "./componentes/displayFunctions_.js";
import { bajarStock } from "./componentes/bajarStock.js";
import { agregarAlCarrito,seleccionarCantidades } from "./componentes/agregarCarrito.js";




let funciones = [];
fetchFunciones(funciones);
let funcionesMostrar = funciones;

setTimeout(() => {
  mostrarFunciones2(funcionesMostrar);
  marcarCard();
}, "5000");

//? Constantes
let promosComprador=1;


//? NOMBRE DE USUARIO


const nombreUsuar = localStorage.getItem('nombreUsuario') 
if (nombreUsuar) { escribirUsuarioStorage();}

let botonGuardar = document.getElementById('guardarNombre');
botonGuardar.addEventListener('click', guardarNom);




//? BOTONES PARA ORDENAR Y FILTRAR


const selectOrden = document.querySelector("#ordenarPor");

selectOrden.addEventListener("change", (event) => {
if (event.target.value == "precio") {
ordenarFuncionesPorPrecio(funcionesMostrar);
mostrarFunciones2(funcionesMostrar);
marcarCard();
} else if (event.target.value == "fecha") {
ordenarFuncionesPorFecha(funcionesMostrar);
mostrarFunciones2(funcionesMostrar);
marcarCard();
}
 });



 //Cosito para filtrar por genero
const selectGenero = document.querySelector("#generos");

selectGenero.addEventListener("change", (event) => {
if (event.target.value == "drama") {
funcionesMostrar = verSoloDramas(funciones);
mostrarFunciones2(funcionesMostrar);
marcarCard();
} else if (event.target.value == "comedia") {
funcionesMostrar = verSoloComedias(funciones);
mostrarFunciones2(funcionesMostrar);
marcarCard();
} else if (event.target.value == "ver todo") {
funcionesMostrar = funciones;
mostrarFunciones2(funcionesMostrar);
marcarCard();
} else if (event.target.value == "policial") {
funcionesMostrar = verSoloPolicial(funciones);
mostrarFunciones2(funcionesMostrar);
marcarCard();
}})



//?PROMOS


const selectPromo = document.querySelector("#promociones");

 selectPromo.addEventListener("change", (event) => {
if (event.target.value == "lanacion") {promoNacion();  mostrarCarrito(promosComprador);
} else if (event.target.value == "movistar") {promoMovistar(); mostrarCarrito(promosComprador);
} else if (event.target.value == "sinPromo") {sinPromo(); mostrarCarrito(promosComprador);}
 });

 
function promoNacion() {promosComprador = 0.5;} 
function promoMovistar() {promosComprador = 0.75;} 
function sinPromo() {promosComprador = 1;}





//? MOSTRAR FUNCIONES DE CINE

//Agrega event listeners dentro de las cards

 
function marcarCard  () {
  document.querySelectorAll('.cantidadEntradas').forEach(btn => {
    btn.addEventListener("change", (event) => {
      const productID = btn.getAttribute('data-id');
      seleccionarCantidades(productID,event) });
  })
    document.querySelectorAll('.agregar-carrito').forEach(btn => {
      btn.addEventListener('click', () => {
        const productoID = btn.getAttribute('data-id');
        agregarAlCarrito(productoID,funciones);
        mostrarCarrito(promosComprador); });
      })
    

      document.querySelectorAll('.mas-info').forEach(btn => {
        btn.addEventListener('click', () => {
          const productoID = btn.getAttribute('data-id');
          imprimeInfo(productoID);});
      });
    }
    


//? INFO sobre la peli a partir de IMDB
function imprimeInfo(idPelicula) {
  const products = funciones.find(product => product.id === idPelicula);
  getMovieInfo(products.pelicula)
}



//? CARRITO

mostrarCarrito(promosComprador);

//Botón de resetear carrito
let reset = document.getElementById("resetearCarrito");
reset.addEventListener("click", () => {resetearCarro(); mostrarCarrito(promosComprador)});


//Botón de ver/ocultar carrito
let verOcultarCarrito = document.getElementById("ocultarCarrito");
verOcultarCarrito.addEventListener("click", verOcultar);


//Botón de sacar del carrito
    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
      btn.addEventListener('click', () => {
        let btnDelete = btn.getAttribute('data-id');
        eliminarDelCarrito(btnDelete);
        mostrarCarrito(promosComprador);
      });
    });
  
  
//? PAGAR


let botonPagar = document.getElementById("pagar");

botonPagar.addEventListener("click", () => {
  realizarPago2();
  bajarStock(funciones);
  resetearCarro(); 
  mostrarCarrito(promosComprador);
});







