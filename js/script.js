var letras = document.querySelector(".letrasErradas");
var contador=0;

inicio();

window.addEventListener('keydown', function(event){
    var key = event.key.toUpperCase();
    if(event.key && contador<9 && letras.textContent.indexOf(key)==-1){
        verificarPalabra(key);
        letras.textContent+=key;
        contador++;
        //funcion en draw.js
        dibujar(contador);
        console.log(contador);
    }
    if(contador==9){
        letras.classList.add("mensajePerdiste");
        letras.textContent="Lo siento, perdiste.";
    }
});

function verificarPalabra(key){
    var letras = document.querySelectorAll("#contenedor-palabra");

}

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

var contenedor = document.querySelector("#contenedor-Palabra");
var guion = document.querySelector("#guion");

var palabra="ALURA";
//generar campos de letras
for(i=0; i<palabra.length;i++){
    var caracter = construirTd("","palabra");
    contenedor.appendChild(caracter);
    guion.appendChild(contruirGuion());
}

document.getElementById("btn1").addEventListener("click", function( event ) {
    console.log("Click en btn1");
    boton1click();
});

document.getElementById("btn2").addEventListener("click", function( event ) {
    console.log("Click en btn2");
    boton2click();
});