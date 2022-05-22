//Muestra mensaje de ganaste.
function winnerMsj(object){
    object.textContent = "Ganaste, felicidades!";
    object.className = "keys-panel mensaje ganaste";
}
//Muestra mensaje al perder.
function loserMsj(object, word){
    keysShowMissed(word);
    object.className = "keys-panel mensaje perdiste";
    object.textContent="Fin del juego!";
}

//Borra word-panel
function wordPanelUnset(){
    document.querySelectorAll(".palabra").forEach(element =>{element.remove();});
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
        td.className= "palabra";
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
    document.querySelectorAll(".palabra").forEach(element => {
        readWord+=element.textContent;
    });
    if(readWord.includes(word)){return true;}else{return false;}
}

function keysShowCorrect(key, word){
    var wordPanelKeys = document.querySelectorAll(".palabra");
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
    var wordPanelKeys = document.querySelectorAll(".palabra");
    for(i=0;i<word.length;i++){
        if(!(wordPanelKeys[i].innerHTML.includes(word[i]))){
            wordPanelKeys[i].classList.add("letrasFaltantes");
            wordPanelKeys[i].innerHTML=word[i];
        }
    }
}