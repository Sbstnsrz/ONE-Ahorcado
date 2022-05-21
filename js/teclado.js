function crearTeclado(sectionTeclado){
    var tabla = document.createElement("table");
    sectionTeclado.appendChild(tabla);

    var fila="A".charCodeAt(0);

    for(var columna="a".charCodeAt(0); columna<="c".charCodeAt(0);columna++){
        var tr = document.createElement("tr");
        tr.id=String.fromCharCode(columna);
        tabla.appendChild(tr);
        var enie=false;
        for(var i=0;i<9;i++){ 
            //exepcion para Ñ
            if(enie){if(fila==210){fila=79;}}
            else if(fila==79){fila=209; enie=true;} 

            var td = document.createElement("td");
            td.className = "teclas";
            td.textContent = String.fromCharCode(fila);
            var tr = document.getElementById(String.fromCharCode(columna));
            tr.appendChild(td);      
            fila++;
        }
    }
}

function reiniciarTeclado(ubicacion){
    ubicacion.forEach(element => {
        element.classList.remove("presionada");
    });
}
function teclaPresionada(letra){
    var teclas = document.querySelectorAll(".teclas");
    teclas.forEach(element => {
        if(element.innerHTML.includes(letra)){
            element.classList.add("presionada");
        }
    }); 
}
    
function mostrarTeclado(){
    var estado = document.querySelector("#teclado");
    if(estado.className.includes("mostrarTeclado")){
        changeById("teclado", "noMostrar");
    }else{
        changeById("teclado", "mostrarTeclado");
    }
}