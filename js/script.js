var letras = document.querySelector(".letrasErradas");
var contador=0;

inicio();

function reiniciar(){
    contador = 0;
    letras.textContent = "";
    letras.classList.remove("mensajePerdiste");
}

document.getElementById("iniciarJuego").addEventListener("click",function(event){
    console.log("Click en iniciarJuego");
    jugando();
    iniciarDibujo();
});

document.getElementById("agregarNuevaPalabra").addEventListener("click",function(event){
    console.log("Click en agregarNuevaPalabra");

});

document.getElementById("nuevoJuego").addEventListener("click",function(event){
    console.log("Click en nuevoJuego");
    reiniciar();
});

document.getElementById("desistir").addEventListener("click",function(event){
    console.log("Click en desistir");
    inicio();
    reiniciar();
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
