var keysPanel = document.querySelector(".keys-panel");
var teclado = document.querySelector("#keyboard");
var contador = 0;
var jugando = false;
var secretWord = "";


//Palabras importadas desde JSON en http
var wordsList = importWords();

function home(){
    buttonsModeHome();      
    changeById("draw", "noMostrar");
    changeById("word-panel", "noMostrar");
    changeById("keyboard-control", "noMostrar");
    changeById("keyboard", "noMostrar");

}
function iniciarJuego(){
    buttonsModePlaying();
    changeById("draw", "mostrar");
    changeById("keyboard-control", "btn-base btn2 mostrar");
    changeById("word-panel", "mostrarTeclado");    
}

function reiniciarLetrasErradas(object){
    object.textContent = "";
    object.className = "keys-panel key-wrong";
}

function btnIniciarJuego(){
    secretWord = wordSelect(secretWord, wordsList);
    wordPanelSet(secretWord);
    iniciarJuego();
    drawInit();
    keyboardReset(tecladoTeclas);
    jugando = true;
    contador = 0;
}

function btnDesistir(){
    jugando = false;
    contador=9;
    loserMsj(keysPanel, secretWord);  
}

function btnCancelar(){
    home();
}
function btnVolverAlInicio(){
    reiniciarLetrasErradas(keysPanel);
    wordPanelUnset();
    home();
}

function btnAgregarNuevaPalabra(){
    buttonsModeAddWord();
    changeById("word-panel", "mostrarTeclado");
}

function btnNuevoJuego(){
    reiniciarLetrasErradas(keysPanel);
    wordPanelUnset();
    btnIniciarJuego();
    keyboardReset(tecladoTeclas);
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
                    jugando = false;
                }
            }
        }
        if(contador==9){
            btnDesistir();
        }
    }
    
}


//Captura tecla presionada
window.addEventListener('keydown', function(event){
    if(jugando){
        verificarLetra(event.key.toUpperCase());
    }
});

home();

keyboardSet(teclado);
var tecladoTeclas = document.querySelectorAll(".teclas");


    