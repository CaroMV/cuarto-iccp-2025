// // PRIMERO, DECLARA TUS VARIABLES

// let parrafo = document.getElementById("parrafo-imagen");
// let contenedor = document.getElementById("contenedor-img");
// console.log(parrafo)
// console.log(contenedor)

// //SEGUNDO, DECLARA TUS FUNCIONES

// contenedor.addEventListener("mouseover", function(){
//     parrafo.innerText="Noche estrellada"
//     console.log("El mouse entró al contenedor")
// })
// contenedor.addEventListener("mouseout", function(){
//     parrafo.innerText="Trigo"
//     console.log("El mouse salió del contenedor")
// })


// let contenedor1 = document.getElementById("contenedor-img1");

// console.log(contenedor1)

// let img = document.getElementById("imagen1")


// contenedor1.addEventListener("mouseover", function(){
//     img.src="./imgs/noche-estrellada-sobre-el-ródano.png"
//     console.log("El mouse entro al contenedor 1")
// })
// contenedor1.addEventListener("mouseout", function(){
//     img.src="./imgs/campo-de-trigo-con-cipreses.png"
//     console.log("El mouse salio al contenedor 1")
// })




/*Repaso DE JS*/

//traer la información del HTML al JS
    // document contiene la información del HTML
let botonLike = document.getElementById("botonLike")
    // getElementById trae un elemento desde el HTML, por el id del elemento

console.log(botonLike)

// Una vez ya tenga el botón, podemos agregar a ese boton un "detector" de cambios o eventos
// addEventListener = Agregar "escuchador" de eventos
let parrafoLike = document.getElementById("parrafo-like")

let contadorLike1= 0

botonLike.addEventListener("click", function(){
    console.log("Hiciste click")
    
    // alert("Haz hecho click!")
    //Alert() me permite hacer una alerta con un mensaje

    // botonLike.innerText="Haz otro click"
    //innerText me permite modificar el texto que se encuentra dentro de un elemento HTML
    // this.textContent="hola"
    // textContent hace lo mismo que innerText
    contadorLike1++
    parrafoLike.innerText=contadorLike1+" personas han dado me gusta"

})

