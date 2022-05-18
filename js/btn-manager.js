var boton1 = document.querySelector("#btn1");
var boton2 = document.querySelector("#btn2");
var botones = document.querySelectorAll(".btns");

//botones.style.display = "inline";
boton1.className = "iniciarJuego";
boton1.textContent = "Iniciar Juego";
boton2.className = "agregarNuevaPalabra";
boton2.textContent = "Agregar nueva palabra";

function Boton1click(){
    if(boton1.className == "iniciarJuego"){
        boton1.className = "nuevoJuego";
        boton1.textContent = "Nuevo juego";
        boton2.className = "desistir";
        boton2.textContent = "Desistir";
        botones[0].style.display = "inline";
        botones[1].style.display = "inline";
        document.querySelector("#draw").style.display = "inline";
        document.querySelector("#keyboard").style.display = "inline-block";
        document.querySelector("#btns-section").setAttribute("margin-top", "auto");


    }
}