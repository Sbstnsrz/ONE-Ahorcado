var panelLetras = document.querySelector(".panelLetras");
var teclado = document.querySelector("#teclado");
var contador = 0;
var jugando = false;
var palabraSec = "";


//Palabras importadas desde JSON en http
var palabras = importarPalabras();



function inicio(){
    buttonsModeHome();      
    remplazarPorIdClase("#draw", "noMostrar");
    remplazarPorIdClase("#keyboard", "noMostrar");
    remplazarPorIdClase("#controlTeclado", "noMostrar");
    remplazarPorIdClase("#teclado", "noMostrar");

}
function iniciarJuego(){
    buttonsModePlaying();
    remplazarPorIdClase("#draw", "mostrar");
    remplazarPorIdClase("#controlTeclado", "btn-base btn2 mostrar");
    remplazarPorIdClase("#keyboard", "mostrarTeclado");    
}

function remplazarPorIdClase( id, clase){
    document.querySelector(id).className = clase;
}

function changeById(id, classes, content){
    document.querySelector(id).className = classes;
    if(!content==""){
        document.querySelector(id).textContent = content;
    }
}

function buttonsModeHome(){
    changeById("#button-1","btn-base btn1 iniciarJuego","Iniciar juego");
    changeById("#button-2","btn-base btn2 agregarNuevaPalabra","Agregar nueva palabra");
    changeById("#div-buttons","botonesInicio", "");
    changeById("#div-button-1","btns", "");
    changeById("#div-button-2","btns", "");
}
function buttonsModePlaying(){
    changeById("#button-1","btn-base btn1 nuevoJuego","Nuevo juego");
    changeById("#button-2","btn-base btn2 desistir","Desistir");
    changeById("#div-buttons","mostrar", "");
    changeById("#div-button-1","mostrar", "");
    changeById("#div-button-2","mostrar", "");
}
function buttonsModeAddWord(){
    changeById("#button-1","btn-base btn1 guardarYEmpezar","Guardar y empezar");
    changeById("#button-2","btn-base btn2 cancelar","Cancelar");
    changeById("#div-buttons","mostrar", "");
    changeById("#div-button-1","mostrar", "");
    changeById("#div-button-2","mostrar", "");
    console.log("agregar");
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

function btnCancelar(){
    inicio();
}

function btnAgregarNuevaPalabra(){
    buttonsModeAddWord();
    remplazarPorIdClase("#keyboard", "mostrarTeclado");
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


    