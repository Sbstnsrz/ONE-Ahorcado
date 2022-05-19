var dibujo = document.querySelector("#draw");
var keyboard = document.querySelector("#keyboard");
var botonesInicio = document.querySelector("#botonesInicio");
var botonesJugando = document.querySelector("#botonesJugando");

function inicio(){
    dibujo.style.display = "none";
    keyboard.style.display = "none";
    botonesInicio.style.display = "block";
    botonesJugando.style.display = "none";
}
function jugando(){
    dibujo.style.display = "inline";
    keyboard.style.display = "inline-block";
    botonesInicio.style.display = "none";
    botonesJugando.style.display = "inline";    
}