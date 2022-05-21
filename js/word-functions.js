//Muestra mensaje de ganaste.
function winnerMsj(object){
    object.textContent = "Ganaste, felicidades!";
    object.className = "keys-panel mensaje ganaste";
}
//Muestra mensaje al perder.
function loserMsj(object, word){
    buttonsModeLoser();
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


function wordCheck(valor){
    var texto = "";
    document.querySelectorAll(".palabra").forEach(element => {
        texto+=element.textContent;
    });
    if(texto.includes(valor)){return true;}else{return false;}
}

function keysShowCorrect(letra, palSec){
    var letras = document.querySelectorAll(".palabra");
    var encontrada = false;
    for(i=0;i<palSec.length;i++){
        if(palSec[i].includes(letra)){
            letras[i].textContent=letra;
            encontrada = true;
        }
    }
    if(encontrada){return true;}else{return false;}
}

function keysShowMissed(palsec){
    var str = document.querySelectorAll(".palabra");
    for(i=0;i<palsec.length;i++){
        if(!(str[i].innerHTML.includes(palsec[i]))){
            str[i].classList.add("letrasFaltantes");
            str[i].innerHTML=palsec[i];
        }
    }
}