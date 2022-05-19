var letrasErradas = document.querySelector(".letrasErradas");
var contador=0;

inicio();

function reiniciar(){
    contador = 0;
    letrasErradas.textContent = "";
    letrasErradas.classList.remove("mensajePerdiste");
}
function btnIniciarJuego(){
    jugando();
    iniciarDibujo();
    console.log("Click en iniciarJuego");
}
function btnDesistir(){
    inicio();
    reiniciar();
    console.log("Click en desistir");
}
function btnagregarNuevaPalabra(){
    console.log("Click en agregarNuevaPalabra");
}
function btnNuevoJuego(){
    jugando();
    iniciarDibujo();
    console.log("Click en NuevoJuego");
}
//Captura id de elemento clickeado
window.addEventListener("click",function(event){
    console.log(event.target.id);
    if(event.target.id=="iniciarJuego"){
        btnIniciarJuego();
    }
    if(event.target.id=="agregarNuevaPalabra"){
        btnagregarNuevaPalabra();
    }
    if(event.target.id=="NuevoJuego"){
        btnNuevoJuego();
    }
    if(event.target.id=="desistir"){
        btnDesistir();
    }
});

//Captura tecla presionada
window.addEventListener('keydown', function(event){
    verificarLetra(event.key.toUpperCase());    
});

palabraSecreta("ALURA");

function verificarLetra(letra){
    if(contador<9 && letrasErradas.textContent.indexOf(letra)==-1){
        letrasErradas.textContent+=letra;
        contador++;
        //funcion en draw.js
        dibujar(contador);
        console.log(contador);
    }
    if(contador==9){
        letrasErradas.classList.add("mensajePerdiste");
        letrasErradas.textContent="Fin del juego!";
    }
}
    