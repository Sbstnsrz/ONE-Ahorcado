var panelLetras = document.querySelector(".panelLetras");
var teclado = document.querySelector("#teclado");
var contador = 0;
var jugando = false;
var palabraSec = "";

var palabras =["HTML","JAVA","LOGICA","SCRIPT","JSON","CANVAS","ALURA"];


function inicio(){
    remplazarPorIdClase("#draw", "noMostrar");
    remplazarPorIdClase("#keyboard", "noMostrar");
    remplazarPorIdClase("#botonesJugando", "noMostrar");
    remplazarPorIdClase("#controlTeclado", "noMostrar");
    remplazarPorIdClase("#teclado", "noMostrar");
    remplazarPorIdClase("#botonesInicio", "mostrarInicio");      

}
function iniciarJuego(){
    remplazarPorIdClase("#draw", "mostrar");
    remplazarPorIdClase("#botonesJugando", "mostrar");
    remplazarPorIdClase("#controlTeclado", "btn-base btn2 mostrar");
    remplazarPorIdClase("#botonesInicio", "noMostrar");
    remplazarPorIdClase("#keyboard", "mostrarTeclado");    
}

function remplazarPorIdClase( id, clase){
    document.querySelector(id).className = clase;
}

function elegirPalabra(palabraPrevia, array){
    do{
    var palabraElegida = array[Math.floor(Math.random()*(array.length))];
    }while(palabraPrevia==palabraElegida);

    return palabraElegida;
}

function reiniciarLetrasErradas(){
    panelLetras.textContent = "";
    panelLetras.className = "panelLetras erradas";
}

function btnIniciarJuego(){
    palabraSec = elegirPalabra(palabraSec, palabras);
    palabraSecreta(palabraSec);
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
            teclaPresionada(letra);
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
var tecladoTeclas = document.querySelectorAll(".teclas");


    