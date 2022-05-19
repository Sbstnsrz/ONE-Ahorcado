var boton1 = document.querySelector("#btn1");
var boton2 = document.querySelector("#btn2");
var botones = document.querySelectorAll(".btns");

function inicio(){
    boton1.className = "iniciarJuego";
    boton1.textContent = "Iniciar Juego";
    boton2.className = "agregarNuevaPalabra";
    boton2.textContent = "Agregar nueva palabra";
    botones.forEach(function(btn){btn.style.display = "block";});
    document.querySelector("#draw").style.display = "none";
    document.querySelector("#keyboard").style.display = "none";
    document.querySelector("#btns-section").setAttribute("margin-top", "200px");
}
function jugando(){
    boton1.className = "nuevoJuego";
    boton1.textContent = "Nuevo juego";
    boton2.className = "desistir";
    boton2.textContent = "Desistir";
    botones.forEach(function(btn){btn.style.display = "inline";});
    document.querySelector("#draw").style.display = "inline";
    document.querySelector("#keyboard").style.display = "inline-block";
    document.querySelector("#btns-section").setAttribute("margin-top", "10px");
}

function boton1click(){
    if(boton1.className == "iniciarJuego"){
        jugando();
    }
}
function boton2click(){
    if(boton2.className== "desistir"){
        inicio();
    }
}
