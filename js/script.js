var contador = 0;
var jugando = false;
var secretWord = "";
var winned=0;
var lossed=0;

var buttonsList = ["iniciarJuego","agregarNuevaPalabra",
                    "guardarYEmpezar","cancelar",
                    "nuevoJuego","desistir","volverAlInicio"];

//Modo inicio:
    //Configuraciones iniciales del modo.
function home(){
    buttonsModeHome();      
    changeById("draw", "hidded");
    changeById("word-panel", "hidded");
    changeById("keyboard-control", "hidded");
    changeById("input", "input hidded");
    changeById("keyboard", "hidded");

}
    //Funcion de Boton "Iniciar juego".
async function btnIniciarJuego(){
    iniciarJuego();
    keysPanelMessage("search");
    var tempWord = "";
    while(!(wordVerify(tempWord.toUpperCase()) && wordVerifyLength(tempWord))){
        var tempWord = await importWords();
        console.log(tempWord);
    }
    keysPanelMessage("reset");
    
    secretWord = tempWord.toUpperCase(); 
    wordPanelSet(secretWord);
}

    //Funcion de boton "Agregar nueva palabra".
function btnAgregarNuevaPalabra(){
    buttonsModeAddWord();
    changeById("input", "input show");
    changeById("word-panel", "showInline");
}

//Modo jugando:
    //Configuraciones iniciales del modo.
function iniciarJuego(){
    buttonsModePlaying();
    changeById("draw", "mostrar");
    changeById("keyboard-control", "btn-base btn2 mostrar");
    changeById("word-panel", "showInline");
    drawInit();
    jugando = true;
    contador = 0;   
}
    //Funcion de boton "Nuevo juego".
function btnNuevoJuego(){
    keysPanelMessage("reset");
    keyboardReset();
    wordPanelUnset();
    btnIniciarJuego();
}
    //Funcion de boton "Desistir".
function btnDesistir(){
    buttonsModeGameEnd();  
    jugando = false;
    for(contador;contador<=9;contador++){
        drawNewPart(contador);
    }
    keysPanelMessage("lose");
    pointsCounter("lose")
    keysShowMissed(secretWord);
}
    //Funcion de boton "Volver al inicio".
function btnVolverAlInicio(){
    keysPanelMessage("reset");
    pointsCounter("reset");
    wordPanelUnset();
    home();
}

//Modo agregar palabra:
    //Funcion de boton "Guardar y comenzar".
function btnGuardarYEmpezar(){
    var input = document.getElementById("input");
    var newWord = input.value;
    //Palbra entre 4 y 8 caracteres:
    if(wordVerifyLength(newWord)){
        if(wordVerify(newWord)){
            secretWord=newWord;
            changeById("input", "input hidded");
            wordPanelSet(secretWord);
            iniciarJuego();
        }else{
            keysPanelMessage("msj-wrong");
            input.focus();
        }
    }else{
        keysPanelMessage("msj-length");
        input.focus();
    }
    input.value = "";
}

    //Funcion de boton "Cancelar".
function btnCancelar(){
    home();
}

//Verifica que el caracter ingresado sea de la palabra secreta.
function verificarLetra(letra){
    var keysPanel = document.querySelector(".keys-panel");

    if(charAtoZCheck(letra)){
                            //Busca la nueva letra entre las descubiertas.
        if(contador<9 && keysPanel.textContent.indexOf(letra)==-1){
            keyboardKeydown(letra);
            if(!keysShowCorrect(letra, secretWord)){
                keysPanel.textContent+=letra;
                contador++;
                drawNewPart(contador);
            }
            else{
                if(wordCheck(secretWord)){
                    keysPanelMessage("win");
                    pointsCounter("win");
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

function pointsCounter(type){
    if(type=="lose"){
        lossed++;
        document.getElementById("lossed").textContent=lossed;
    }
    if(type=="win"){
        winned++;
        document.getElementById("winned").textContent=winned;
    }
    if(type=="reset"){
        lossed=0;
        winned=0;
        document.getElementById("lossed").textContent="";
        document.getElementById("winned").textContent="";

    }
}

home();
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
//Inicia el teclado
keyboardSet(document.querySelector("#keyboard"));




    