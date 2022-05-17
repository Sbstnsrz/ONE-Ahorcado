var letras = document.querySelector(".letrasErradas");
letras.textContent="";

var contador=0;
window.addEventListener('keydown', function(event){
    var key = event.key.toUpperCase();
    if(event.key && contador<9 && letras.textContent.indexOf(key)==-1){
        letras.textContent+=key;
        contador++;
        //funcion en draw.js
        dibujar(contador);
        console.log(contador);
    }
    if(contador==9){
        letras.textContent="Lo siento, perdiste.";
    }
});