var panelLetras = document.querySelector(".panelLetras");
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
    panelLetras.className = "panelLetras erradas";
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
            if(!mostrarLetrasCorrectas(letra, palabraSec)){
                panelLetras.textContent+=letra;
                contador++;
                dibujar(contador);
            }
            else{
                if(verificarPalabra(palabraSec)){
                    panelLetras.textContent = "Ganaste, felicidades!";
                    panelLetras.className = "panelLetras mensaje ganaste";
                    jugando = false;
                }
            }
        }
        if(contador==9){
            panelLetras.className = "panelLetras mensaje perdiste";
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

    