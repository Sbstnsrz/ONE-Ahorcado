//Captura id de elemento clickeado
document.addEventListener("click",function(event){
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
    else if(tecla.className.includes("volverAlInicio")){
        btnVolverAlInicio();
    }
});

function changeById(id, classes, content){
    document.querySelector(id).className = classes;
    if(!content==""){
        document.querySelector(id).textContent = content;
    }
}

function buttonsModeHome(){
    changeById("#button-1","btn-base btn1 iniciarJuego","Iniciar juego");
    changeById("#button-2","btn-base btn2 agregarNuevaPalabra","Agregar nueva palabra");
    changeById("#div-buttons","botonesInicio", "");
    changeById("#div-button-1","btns", "");
    changeById("#div-button-2","btns", "");
}
function buttonsModePlaying(){
    changeById("#button-1","btn-base btn1 nuevoJuego","Nuevo juego");
    changeById("#button-2","btn-base btn2 desistir","Desistir");
    changeById("#div-buttons","mostrar", "");
    changeById("#div-button-1","mostrar", "");
    changeById("#div-button-2","mostrar", "");
}
function buttonsModeAddWord(){
    changeById("#button-1","btn-base btn1 guardarYEmpezar","Guardar y empezar");
    changeById("#button-2","btn-base btn2 cancelar","Cancelar");
    changeById("#div-buttons","mostrar", "");
    changeById("#div-button-1","mostrar", "");
    changeById("#div-button-2","mostrar", "");
}
function buttonsModeDesistido(){
    changeById("#button-2","btn-base btn2 volverAlInicio","Volver al inicio");
}