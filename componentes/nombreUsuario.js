function escribirUsuarioStorage () {
    const nombreUsuario = localStorage.getItem('nombreUsuario') 
    var x = document.getElementById("registrarse");
    x.style.display = "none";
    let bienvenida = document.querySelector('#bienvenido');
    bienvenida.style.display = "block";
    bienvenida.innerHTML = `<h5> ${nombreUsuario} </h5> <button id="cambiarUsuario"> Cambiar Usuario </button>`;
    let reset_Usuario = document.getElementById("cambiarUsuario");
  reset_Usuario.addEventListener("click", resetearUsuario);
  } 

  function resetearUsuario () {
    var x = document.getElementById("bienvenido");
         x.style.display = "none";
     var y = document.getElementById("registrarse");
       y.style.display = "block";
    let botonGuardar = document.getElementById('guardarNombre');
  
     botonGuardar.addEventListener('click', guardarNom);
      localStorage.removeItem('nombreUsuario'); 
  }

  function guardarNom() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre);
        var x = document.getElementById("registrarse");
        x.style.display = "none";
        let bienvenida = document.querySelector('#bienvenido')
        bienvenida.innerHTML = `<h5> ${nombre} </h5> <button id="cambiarUsuario"> Cambiar usuario </button>`;
        bienvenida.style.display = "block";
      let reset_Usuario = document.getElementById("cambiarUsuario");
    reset_Usuario.addEventListener("click", resetearUsuario);
    } else {
        alert('Por favor, ingrese un nombre');
    }
  }

  export {escribirUsuarioStorage, resetearUsuario, guardarNom}
  
