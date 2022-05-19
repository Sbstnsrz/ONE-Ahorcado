var letrasErradas = document.querySelector(".letrasErradas");
var contador = 0;
var jugando = false;

var palabraSec = "ALURA";

inicio();

function reiniciarLetrasErradas(){
    letrasErradas.textContent = "";
    letrasErradas.classList.remove("mensajePerdiste");
}


function btnIniciarJuego(){
    jugando = true;
    palabraSecreta(palabraSec);
    iniciarJuego();
    iniciarDibujo();
}
function btnDesistir(){
    jugando = false;
    contador = 0;
    reiniciarLetrasErradas();
    reiniciarPalabraSecreta();
    inicio();

}
function btnagregarNuevaPalabra(){
}
function btnNuevoJuego(){
    jugando = true;
    reiniciarLetrasErradas();
    reiniciarPalabraSecreta();
    palabraSecreta(palabraSec);
    iniciarJuego();
    iniciarDibujo();
    contador = 0;
}

function verificarLetra(letra){
    if(contador<9 && letrasErradas.textContent.indexOf(letra)==-1){
        letrasErradas.textContent+=letra;
        if(!mostrarLetrasCorrectas(letra, palabraSec)){
            contador++;
            dibujar(contador);
        }
        else{
            console.log(palabraSec);
            if(verificarPalabra(palabraSec)){
                letrasErradas.textContent="Has ganado!";
                jugando = false;
            }
        }
    }
    if(contador==9){
        letrasErradas.classList.add("mensajePerdiste");
        letrasErradas.textContent="Fin del juego!";
    }
}
//Captura tecla presionada
window.addEventListener('keydown', function(event){
    if(jugando){
        verificarLetra(event.key.toUpperCase());
    }
});

    