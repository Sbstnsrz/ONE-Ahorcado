var keysPanel = document.querySelector(".keys-panel");
var teclado = document.querySelector("#keyboard");
var contador = 0;
var jugando = false;
var secretWord = "";

var buttonsList = ["iniciarJuego","agregarNuevaPalabra",
                "guardarYEmpezar","cancelar",
                "nuevoJuego","desistir","volverAlInicio"];


//Palabras importadas desde JSON en http
var wordsList = importWords();

//Menu inicio.
function home(){
    buttonsModeHome();      
    changeById("draw", "noMostrar");
    changeById("word-panel", "noMostrar");
    changeById("keyboard-control", "noMostrar");
    changeById("keyboard", "noMostrar");

}
//Modo jugando
function iniciarJuego(){
    buttonsModePlaying();
    changeById("draw", "mostrar");
    changeById("keyboard-control", "btn-base btn2 mostrar");
    changeById("word-panel", "mostrarTeclado");    
}

function keysPanelReset(object){
    object.textContent = "";
    object.className = "keys-panel key-wrong";
}

function btnIniciarJuego(){
    secretWord = wordSelect(secretWord, wordsList);
    wordPanelSet(secretWord);
    iniciarJuego();
    drawInit();
    keyboardReset();
    jugando = true;
    contador = 0;
}

function btnDesistir(){
    jugando = false;
    for(contador;contador<=9;contador++){
        drawNewPart(contador);
    }
    loserMsj(keysPanel, secretWord);
    buttonsModeGameEnd();  
}

function btnCancelar(){
    home();
}
function btnVolverAlInicio(){
    keysPanelReset(keysPanel);
    wordPanelUnset();
    home();
}

function btnAgregarNuevaPalabra(){
    buttonsModeAddWord();
    changeById("word-panel", "mostrarTeclado");
}

function btnNuevoJuego(){
    keysPanelReset(keysPanel);
    wordPanelUnset();
    btnIniciarJuego();
    keyboardReset();
    contador = 0;
}

function verificarLetra(letra){

    if((letra>="A"&&letra<="Z") || letra=="Ñ"){
        if(contador<9 && keysPanel.textContent.indexOf(letra)==-1){
            keyboardKeydown(letra);
            if(!keysShowCorrect(letra, secretWord)){
                keysPanel.textContent+=letra;
                contador++;
                drawNewPart(contador);
            }
            else{
                if(wordCheck(secretWord)){
                    winnerMsj(keysPanel);
                    buttonsModeGameEnd();
                    jugando = false;
                }
            }
        }
        if(contador==9){
            btnDesistir();
        }
    }
    
}

//Captura id de elemento clickeado
document.addEventListener("click",function(event){
    clickParse(event.target, buttonsList);
});

//Captura tecla presionada
window.addEventListener('keydown', function(event){
    if(jugando){
        verificarLetra(event.key.toUpperCase());
    }
});

home();

keyboardSet(teclado);


    