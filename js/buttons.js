
function indexFind(object, wordList){
    for(i=0;i<wordList.length;i++){
        if(classFind(object, wordList[i])){
            return i;
        }
    }
}

function classFind(object, word){
    if(object.className.includes(word)){
        return true;
    }else{return false;}
}

function clickParse(object){

    var buttonsList = ["iniciarJuego","agregarNuevaPalabra",
                "guardarYEmpezar","cancelar",
                "nuevoJuego","desistir","volverAlInicio"];

    switch(indexFind(object, buttonsList)){
        case 0: {btnIniciarJuego();break;}
        case 1: {btnAgregarNuevaPalabra();break;}
        case 2: {btnGuardarYEmpezar();break;}
        case 3: {btnCancelar();break;}
        case 4: {btnNuevoJuego();break;}
        case 5: {btnDesistir();break;}
        case 6: {btnVolverAlInicio();break;}
        default:break;
    }

    if(object.className=="keys"){
        verificarLetra(object.innerHTML);
    }else if(object.id=="keyboard-control"){
        keyboardShow();
    }
}

function changeById(id, classes, content){
    document.getElementById(id).className = classes;
    if(!content==""){
        document.getElementById(id).textContent = content;
    }
}

function buttonsModeHome(){
    changeById("button-1","btn-base btn1 iniciarJuego","Iniciar juego");
    changeById("button-2","btn-base btn2 agregarNuevaPalabra","Agregar nueva palabra");
    changeById("div-buttons","botonesInicio");
    changeById("div-button-1","btns");
    changeById("div-button-2","btns");
}
function buttonsModePlaying(){
    changeById("button-1","btn-base btn1 nuevoJuego","Nuevo juego");
    changeById("button-2","btn-base btn2 desistir","Desistir");
    changeById("div-buttons","mostrar");
    changeById("div-button-1","mostrar");
    changeById("div-button-2","mostrar");
}
function buttonsModeAddWord(){
    changeById("button-1","btn-base btn1 guardarYEmpezar","Guardar y empezar");
    changeById("button-2","btn-base btn2 cancelar","Cancelar");
    changeById("div-buttons","mostrar");
    changeById("div-button-1","mostrar");
    changeById("div-button-2","mostrar");
}
function buttonsModeGameEnd(){
    changeById("button-2","btn-base btn2 volverAlInicio","Volver al inicio");
}