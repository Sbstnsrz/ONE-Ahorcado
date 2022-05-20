var dibujo = document.querySelector("#draw");
var keyboard = document.querySelector("#keyboard");
var botonesInicio = document.querySelector("#botonesInicio");
var botonesJugando = document.querySelector("#botonesJugando");
var btnteclado = document.querySelector("#controlTeclado");
var teclado = document.querySelector("#teclado");

function inicio(){
    dibujo.style.display = "none";
    keyboard.style.display = "none";
    botonesInicio.style.display = "block";
    botonesJugando.style.display = "none";
    btnteclado.style.display = "none";
    teclado.style.display = "none";       

}
function iniciarJuego(){
    dibujo.style.display = "inline";
    keyboard.style.display = "inline-block";
    botonesInicio.style.display = "none";
    botonesJugando.style.display = "inline";
    btnteclado.style.display= "inline"       
}

//Captura id de elemento clickeado
window.addEventListener("click",function(event){
    var tecla = event.target;
    if(tecla.className=="teclas"){
        verificarLetra(event.target.innerHTML);
        teclaPresionada(event.target);
    }
    if(tecla.id=="controlTeclado"){
        mostrarTeclado();
    }
    if(tecla.id=="iniciarJuego"){
        btnIniciarJuego();
    }
    if(tecla.id=="agregarNuevaPalabra"){
        btnagregarNuevaPalabra();
    }
    if(tecla.id=="nuevoJuego"){
        btnNuevoJuego();
    }
    if(tecla.id=="desistir"){
        btnDesistir();
    }
});