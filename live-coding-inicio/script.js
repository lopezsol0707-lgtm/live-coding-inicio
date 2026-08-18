// Vamos a construir la interactividad paso a paso durante la clase.
console.log("Bienvenidos a la primer actividad");
console.log("Ahora vamos a comenzar con la primera actividad");

const botonSaludo = document.querySelector("#boton-saludo");

//Quiero cambiar el texto de un elemento HTML
//1ero tengo que buscarlo
//2do tengo que guardar el resultado de la búsqueda
const mensajeSaludo = document.querySelector("#mensaje");
const miNombre = "Sol";
const miEdad = 22;
const botonTema = document.querySelector ("#boton-tema");

const botonLike = document.querySelector ("#boton-like");


console.log("Resultado de la búsqueda");
console.log(mensajeSaludo);

//Agrego funcionalidad al botón saludo
botonSaludo.addEventListener("click", function() {
    console.log("Apretaste el botón")
    mensajeSaludo.textContent = "Hola " + miNombre;
});

botonTema.addEventListener("click", function () {
    console.log ("Apretaste el botón tema");
    //Poner y sacar la clase tema-oscuro del body
    //hacer un toggle de esa clase css sobre un elemento html
    //Si el body tiene la clase tema-oscuro, la saco, sino la pongo
    document.body.classList.toggle("tema-oscuro");
});

//si cr4o la variable con un let la puedo modificar
let numeroDeLikes = 0;


//Agrego funcionalidad al botón like
botonLike.addEventListener("click", function () {
    console.log("Apretaste el botón like");
    numeroDeLikes = numeroDeLikes + 1;
    botonLike.textContent = "Me gusta ("+ numeroDeLikes +")";
});