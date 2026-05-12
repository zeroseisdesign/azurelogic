//Menu emerxente mobile

//Seleccionamos o botón polo id
let boton = document.getElementById("btnMenu");

let menu = document.querySelector(".nav-mobile");

//Engadir un evento click
boton.addEventListener("click", mostrar);

function mostrar() {
    menu.classList.toggle("visible");
    boton.classList.toggle("active");
}