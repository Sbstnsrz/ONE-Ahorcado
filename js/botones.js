//Captura id de elemento clickeado
window.addEventListener("click",function(event){
    var tecla = event.target;
    if(tecla.className=="teclas"){
        verificarLetra(event.target.innerHTML);
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