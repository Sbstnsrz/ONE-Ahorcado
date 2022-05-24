var contador = 0;
var jugando = false;
var secretWord = "";

var buttonsList = ["iniciarJuego","agregarNuevaPalabra",
                    "guardarYEmpezar","cancelar",
                    "nuevoJuego","desistir","volverAlInicio"];

var wordsList = [];

(async () =>{
    //Palabras importadas desde JSON en http
    for(i=0;i<10;i++){
        //wordsList.push(importWords());
        var tempWord = await importWords();
        wordsList.push(tempWord.toUpperCase());
    }
    console.log(wordsList);
})();
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

    keyboardSet(document.querySelector("#keyboard"));



//Modo inicio:
function home(){
    buttonsModeHome();      
    changeById("draw", "hidded");
    changeById("word-panel", "hidded");
    changeById("keyboard-control", "hidded");
    changeById("input", "input hidded");
    changeById("keyboard", "hidded");

}

function btnIniciarJuego(){
    secretWord = wordSelect(secretWord, wordsList);
    wordPanelSet(secretWord);
    iniciarJuego();
}

function btnAgregarNuevaPalabra(){
    changeById("input", "input show");
    buttonsModeAddWord();
    changeById("word-panel", "showInline");
}

//Modo jugando:
function iniciarJuego(){
    buttonsModePlaying();
    changeById("draw", "mostrar");
    changeById("keyboard-control", "btn-base btn2 mostrar");
    changeById("word-panel", "showInline");
    drawInit();
    jugando = true;
    contador = 0;   
}

function btnNuevoJuego(){
    keysPanelMessage("reset");
    keyboardReset();
    wordPanelUnset();
    btnIniciarJuego();
}

function btnDesistir(){
    buttonsModeGameEnd();  
    jugando = false;
    for(contador;contador<=9;contador++){
        drawNewPart(contador);
    }
    keysPanelMessage("lose");
    keysShowMissed(secretWord);
}

function btnVolverAlInicio(){
    keysPanelMessage("reset");
    wordPanelUnset();
    home();
}

//Modo agregar palabra:
function btnGuardarYEmpezar(){
    var input = document.getElementById("input");
    var newWord = input.value;
    //Palbra entre 4 y 8 caracteres:
    if(newWord.length>=4 && newWord.length<=8){
        if(wordVerify(newWord)){
            wordsList.push(newWord);
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
//Verifica que la palabra este compuesta de A<>Z
function wordVerify(word){
    for(i=0;i<word.length;i++){
        if(charAtoZCheck(word[i])){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

function btnCancelar(){
    home();
}

function verificarLetra(letra){
    var keysPanel = document.querySelector(".keys-panel");

    if(charAtoZCheck(letra)){
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

function charAtoZCheck(char){
    if((char>="A"&&char<="Z") || char=="Ñ"){
        return true;
    }else{
        return false;
    }
}




    