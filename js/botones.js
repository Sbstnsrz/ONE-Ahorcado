var dibujo = document.querySelector("#draw");
var keyboard = document.querySelector("#keyboard");
var botonesInicio = document.querySelector("#botonesInicio");
var botonesJugando = document.querySelector("#botonesJugando");
var teclado = document.querySelector("#teclado");

function inicio(){
    dibujo.style.display = "none";
    keyboard.style.display = "none";
    botonesInicio.style.display = "block";
    botonesJugando.style.display = "none";
}
function iniciarJuego(){
    dibujo.style.display = "inline";
    keyboard.style.display = "inline-block";
    botonesInicio.style.display = "none";
    botonesJugando.style.display = "inline";       
}

//Captura id de elemento clickeado
window.addEventListener("click",function(event){
    if(event.target.className=="teclas"){
        verificarLetra(event.target.innerHTML);
    }
    if(event.target.id=="controlTeclado"){
        mostrarTeclado();
    }
    console.log(event.target.innerHTML);
    if(event.target.id=="iniciarJuego"){
        btnIniciarJuego();
    }
    if(event.target.id=="agregarNuevaPalabra"){
        btnagregarNuevaPalabra();
    }
    if(event.target.id=="nuevoJuego"){
        btnNuevoJuego();
    }
    if(event.target.id=="desistir"){
        btnDesistir();
    }
});