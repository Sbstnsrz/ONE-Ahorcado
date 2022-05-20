var panelLetras = document.querySelector(".letrasErradas");
var contador = 0;
var jugando = false;
var palabraSec;



inicio();

function elegirPalabra(){
    var palabras =["HTML","JAVA","LOGICA","SCRIPT","JSON","CANVAS","ALURA"];
    var elegida = Math.round(Math.random()*palabras.length);
    return palabras[elegida];
}


function reiniciarLetrasErradas(){
    panelLetras.textContent = "";
    panelLetras.className = "letrasErradas";
}


function btnIniciarJuego(){
    palabraSec = elegirPalabra();
    palabraSecreta(palabraSec);
    iniciarJuego();
    iniciarDibujo();
    jugando = true;
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
    reiniciarLetrasErradas();
    reiniciarPalabraSecreta();
    btnIniciarJuego();
    contador = 0;
}

function verificarLetra(letra){
    if((letra>="A"&&letra<="Z") || letra=="Ñ"){
        if(contador<9 && panelLetras.textContent.indexOf(letra)==-1){
            panelLetras.textContent+=letra;
            if(!mostrarLetrasCorrectas(letra, palabraSec)){
                contador++;
                dibujar(contador);
            }
            else{
                if(verificarPalabra(palabraSec)){
                    panelLetras.textContent = "Ganaste, felicidades!";
                    panelLetras.classList.add("mensajeGanaste");
                    jugando = false;
                }
            }
        }
        if(contador==9){
            panelLetras.classList.add("mensajePerdiste");
            panelLetras.textContent="Fin del juego!";
            mostrarLetrasFaltantes(palabraSec);
            jugando = false;
        }
    }
    
}
//Captura tecla presionada
window.addEventListener('keydown', function(event){
    if(jugando){
        verificarLetra(event.key.toUpperCase());
    }
});

    