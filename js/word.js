
var contenedor = document.querySelector("#contenedor-Palabra");
var guion = document.querySelector("#guion");

function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}
function contruirGuion(){
    var td = document.createElement("td");
    var linea = document.createElement("hr");
    td.appendChild(linea);
    return td;
}
function palabraSecreta(palabra){
    //generar campos de letras
    for(i=0; i<palabra.length;i++){
        var caracter = construirTd("","palabra");
        contenedor.appendChild(caracter);
        guion.appendChild(contruirGuion());
    }
}
function mostrarLetrasCorrectas(letra, palabra){
    var letras = document.querySelectorAll(".palabra");
    var encontrada = false;
    for(i=0;i<palabra.length;i++){
        if(palabra[i]==letra){
            letras[i].textContent=letra;
            console.log(letra);
            encontrada = true;
        }
    }
    if(encontrada){
        return true;
    }else{
        return false;
    }
    //letras.forEach(element => console.log(element.textContent));
}
