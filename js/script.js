var panelLetras = document.querySelector(".panelLetras");
var teclado = document.querySelector("#teclado");
var tecladoTeclas = document.querySelectorAll(".teclas");
var contador = 0;
var jugando = false;
var palabraSec;




function elegirPalabra(){
    var palabras =["HTML","JAVA","LOGICA","SCRIPT","JSON","CANVAS","ALURA"];
    var elegida = Math.round(Math.random()*(palabras.length-1));
    console.log(elegida);
    return palabras[elegida];
}


function reiniciarLetrasErradas(){
    panelLetras.textContent = "";
    panelLetras.className = "panelLetras erradas";
}


function btnIniciarJuego(){
    palabraSecreta(elegirPalabra());
    iniciarJuego();
    iniciarDibujo();
    reiniciarTeclado(tecladoTeclas);
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
    reiniciarTeclado(tecladoTeclas);
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

inicio();

crearTeclado(teclado);


    