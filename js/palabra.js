
function reiniciarPalabraSecreta(){
    //borra elementos previos.
    document.querySelectorAll(".palabra").forEach(element =>{element.remove();});
    document.querySelectorAll(".guion").forEach(element =>{element.remove();});
}

function palabraSecreta(palabra){
    var contenedor = document.querySelector("#contenedor-Palabra");
    var guion = document.querySelector("#guion");
    //generar campos de letras
    for(i=0; i<palabra.length;i++){
        //campo de letra
        var td = document.createElement("td");
        td.className= "palabra";
        contenedor.appendChild(td);
        //campo con guion
        var td = document.createElement("td");
        var linea = document.createElement("hr");
        td.className = "guion";
        td.appendChild(linea);
        guion.appendChild(td);
    }
}
function mostrarLetrasCorrectas(letra, palSec){
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

function verificarPalabra(valor){
    var texto = "";
    document.querySelectorAll(".palabra").forEach(element => {
        texto+=element.textContent;
    });
    if(texto.includes(valor)){return true;}else{return false;}
}
function mostrarLetrasFaltantes(palsec){
    var str = document.querySelectorAll(".palabra");
    for(i=0;i<palsec.length;i++){
        if(!(str[i].innerHTML.includes(palsec[i]))){
            str[i].classList.add("perdiste");
            str[i].innerHTML=palsec[i];
        }
    }
}
