//Captura id de elemento clickeado
window.addEventListener("click",function(event){
    var tecla = event.target;
    if(tecla.className=="teclas"){
        verificarLetra(event.target.innerHTML);
    }
    else if(tecla.id=="controlTeclado"){
        mostrarTeclado();
    }
    else if(tecla.className.includes("iniciarJuego")){
        btnIniciarJuego();
    }
    else if(tecla.className.includes("nuevoJuego")){
        btnNuevoJuego();
    }
    else if(tecla.className.includes("desistir")){
        btnDesistir();
    }
    else if(tecla.className.includes("cancelar")){
        btnCancelar();
    }
    else if(tecla.className.includes("agregarNuevaPalabra")){
        btnAgregarNuevaPalabra();
    }
});