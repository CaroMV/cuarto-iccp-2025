// Guardo la info del html y lo guardo en una variable

let botonSesion = document.getElementById("boton-sesion");

botonSesion.addEventListener("click", function(){
   //Si el texto dentro del boton es "iniciar sesión", entonces cambialo a "cerrar Sesión"
   if(this.innerText=="Iniciar Sesión"){
      this.innerText="Cerrar Sesión"
   }else{
      this.innerText="Iniciar Sesión"
   }
})

//guardar la informacion del boton en una variable

let botonPerfil = document.getElementById("perfil")



