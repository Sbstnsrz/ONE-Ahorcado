var panelLetras = document.querySelector(".panelLetras");
var teclado = document.querySelector("#teclado");
var contador = 0;
var jugando = false;
var palabraSec = "";


//Palabras importadas desde JSON en http
var palabras = importarPalabras();

function inicio(){
    buttonsModeHome();      
    changeById("draw", "noMostrar");
    changeById("keyboard", "noMostrar");
    changeById("controlTeclado", "noMostrar");
    changeById("teclado", "noMostrar");

}
function iniciarJuego(){
    buttonsModePlaying();
    changeById("draw", "mostrar");
    changeById("controlTeclado", "btn-base btn2 mostrar");
    changeById("keyboard", "mostrarTeclado");    
}

function reiniciarLetrasErradas(object){
    object.textContent = "";
    object.className = "panelLetras erradas";
}

function btnIniciarJuego(){
    palabraSec = elegirPalabra(palabraSec, palabras);
    palabraSecreta(palabraSec);
    iniciarJuego();
    iniciarDibujo();
    reiniciarTeclado(tecladoTeclas);
    jugando = true;
    contador = 0;
}

function btnDesistir(){
    jugando = false;
    contador=9;
    losserMsj(panelLetras);  
}

function btnCancelar(){
    inicio();
}
function btnVolverAlInicio(){
    reiniciarLetrasErradas(panelLetras);
    reiniciarPalabraSecreta();
    inicio();
}

function btnAgregarNuevaPalabra(){
    buttonsModeAddWord();
    changeById("keyboard", "mostrarTeclado");
}

function btnNuevoJuego(){
    reiniciarLetrasErradas(panelLetras);
    reiniciarPalabraSecreta();
    btnIniciarJuego();
    reiniciarTeclado(tecladoTeclas);
    contador = 0;
}

function verificarLetra(letra){

    if((letra>="A"&&letra<="Z") || letra=="Ñ"){
        if(contador<9 && panelLetras.textContent.indexOf(letra)==-1){
            teclaPresionada(letra);
            if(!mostrarLetrasCorrectas(letra, palabraSec)){
                panelLetras.textContent+=letra;
                contador++;
                dibujar(contador);
            }
            else{
                if(verificarPalabra(palabraSec)){
                    winnerMsj(panelLetras);
                    jugando = false;
                }
            }
        }
        if(contador==9){
            btnDesistir();
        }
    }
    
}
function winnerMsj(object){
    object.textContent = "Ganaste, felicidades!";
    object.className = "panelLetras mensaje ganaste";
}
function losserMsj(object){
    buttonsModeLosser();
    mostrarLetrasFaltantes(palabraSec);
    object.className = "panelLetras mensaje perdiste";
    object.textContent="Fin del juego!";
}

//Captura tecla presionada
window.addEventListener('keydown', function(event){
    if(jugando){
        verificarLetra(event.key.toUpperCase());
    }
});

inicio();

crearTeclado(teclado);
var tecladoTeclas = document.querySelectorAll(".teclas");


    