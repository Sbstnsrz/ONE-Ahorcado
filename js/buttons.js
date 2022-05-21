//Captura id de elemento clickeado
document.addEventListener("click",function(event){
    var key = event.target;
    if(key.className=="keys"){
        verificarLetra(event.target.innerHTML);
    }
    else if(key.id=="keyboard-control"){
        keyboardShow();
    }
    else if(key.className.includes("iniciarJuego")){
        btnIniciarJuego();
    }
    else if(key.className.includes("nuevoJuego")){
        btnNuevoJuego();
    }
    else if(key.className.includes("desistir")){
        btnDesistir();
    }
    else if(key.className.includes("cancelar")){
        btnCancelar();
    }
    else if(key.className.includes("agregarNuevaPalabra")){
        btnAgregarNuevaPalabra();
    }
    else if(key.className.includes("volverAlInicio")){
        btnVolverAlInicio();
    }
});

function changeById(id, classes, content){
    document.getElementById(id).className = classes;
    if(!content==""){
        document.getElementById(id).textContent = content;
    }
}

function buttonsModeHome(){
    changeById("button-1","btn-base btn1 iniciarJuego","Iniciar juego");
    changeById("button-2","btn-base btn2 agregarNuevaPalabra","Agregar nueva palabra");
    changeById("div-buttons","botonesInicio", "");
    changeById("div-button-1","btns", "");
    changeById("div-button-2","btns", "");
}
function buttonsModePlaying(){
    changeById("button-1","btn-base btn1 nuevoJuego","Nuevo juego");
    changeById("button-2","btn-base btn2 desistir","Desistir");
    changeById("div-buttons","mostrar", "");
    changeById("div-button-1","mostrar", "");
    changeById("div-button-2","mostrar", "");
}
function buttonsModeAddWord(){
    changeById("button-1","btn-base btn1 guardarYEmpezar","Guardar y empezar");
    changeById("button-2","btn-base btn2 cancelar","Cancelar");
    changeById("div-buttons","mostrar", "");
    changeById("div-button-1","mostrar", "");
    changeById("div-button-2","mostrar", "");
}
function buttonsModeLoser(){
    changeById("button-2","btn-base btn2 volverAlInicio","Volver al inicio");
}