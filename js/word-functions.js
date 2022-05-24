
function keysPanelMessage(type){
    var keysPanel = document.querySelector(".keys-panel");

    if(type=="win"){
        keysPanel.className = "keys-panel message win";
        keysPanel.textContent = "Ganaste, felicidades!";
    }
    if(type=="lose"){
        keysPanel.className = "keys-panel message lose";
        keysPanel.textContent="Fin del juego!";
    }
    if(type=="msj-length"){
        keysPanel.className = "keys-panel message";
        keysPanel.textContent = "La palabra debe tener entre 4 y 8 caracteres";
    } 
    if(type=="msj-wrong"){
        keysPanel.className = "keys-panel message";
        keysPanel.textContent = "La palabra deber ser en mayusculas";
    } 
    if(type=="reset"){
        keysPanel.className = "keys-panel key-wrong";
        keysPanel.textContent = "";
    }
}

//Borra word-panel
function wordPanelUnset(){
    document.querySelectorAll(".word-panel-key").forEach(element =>{element.remove();});
    document.querySelectorAll(".dash").forEach(element =>{element.remove();});
}

//Crea word-panel para palabra ingresada.
function wordPanelSet(word){
    var container = document.querySelector("#word-container");
    var dash = document.querySelector("#dash");
    //generar campos de letras
    for(i=0; i<word.length;i++){
        //campo de letra
        var td = document.createElement("td");
        td.className= "word-panel-key";
        container.appendChild(td);
        //campo con guion
        var td = document.createElement("td");
        var linea = document.createElement("hr");
        td.className = "dash";
        td.appendChild(linea);
        dash.appendChild(td);
    }
}

//Elige una palabra de la lista distinta a la ingresada, y la regresa.
function wordSelect(previousWord, array){
    do{
    var wordSelected = array[Math.floor(Math.random()*(array.length))];
    }while(previousWord==wordSelected);

    return wordSelected;
}

//Toma la palabra en word-panel y la compara con la recibida.
function wordCheck(word){
    var readWord = "";
    document.querySelectorAll(".word-panel-key").forEach(element => {
        readWord+=element.textContent;
    });
    if(readWord.includes(word)){return true;}else{return false;}
}

function keysShowCorrect(key, word){
    var wordPanelKeys = document.querySelectorAll(".word-panel-key");
    var finded = false;
    for(i=0;i<word.length;i++){
        if(word[i].includes(key)){
            wordPanelKeys[i].textContent=key;
            finded = true;
        }
    }
    if(finded){return true;}else{return false;}
}

function keysShowMissed(word){
    var wordPanelKeys = document.querySelectorAll(".word-panel-key");
    for(i=0;i<word.length;i++){
        if(!(wordPanelKeys[i].innerHTML.includes(word[i]))){
            wordPanelKeys[i].classList.add("word-panel-missing-key");
            wordPanelKeys[i].innerHTML=word[i];
        }
    }
}