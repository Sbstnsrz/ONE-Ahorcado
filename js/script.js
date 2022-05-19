var letras = document.querySelector(".letrasErradas");

inicio();

document.getElementById("btn1").addEventListener("click", function( event ) {
    console.log("Click en btn1");
    boton1click();
});

document.getElementById("btn2").addEventListener("click", function( event ) {
    console.log("Click en btn2");
    boton2click();
});

window.addEventListener('keydown', function(event){
    var tecla = event.key.toUpperCase();
    if(event.key && contador<9 && letras.textContent.indexOf(tecla)==-1){
        verificarPalabra(tecla);
        letras.textContent+=tecla;
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