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


console.log("Resultado de la búsqueda");
console.log(mensajeSaludo);

botonSaludo.addEventListener("click", function() {
    console.log("Apretaste el botón")
    mensajeSaludo.innerText = "Hola " + miNombre;
});
