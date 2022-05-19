
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
