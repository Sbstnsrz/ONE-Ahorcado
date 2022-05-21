function keyboardSet(location){
    var table = document.createElement("table");
    location.appendChild(table);

    var fila="A".charCodeAt(0);

    for(var row="a".charCodeAt(0); row<="c".charCodeAt(0);row++){
        var tr = document.createElement("tr");
        tr.id=String.fromCharCode(row);
        table.appendChild(tr);
        var enie=false;
        for(var i=0;i<9;i++){ 
            //exepcion para Ñ
            if(enie){if(fila==210){fila=79;}}
            else if(fila==79){fila=209; enie=true;} 

            var td = document.createElement("td");
            td.className = "teclas";
            td.textContent = String.fromCharCode(fila);
            var tr = document.getElementById(String.fromCharCode(row));
            tr.appendChild(td);      
            fila++;
        }
    }
}

function keyboardReset(ubicacion){
    ubicacion.forEach(element => {
        element.classList.remove("presionada");
    });
}
function keyboardKeydown(letra){
    var teclas = document.querySelectorAll(".teclas");
    teclas.forEach(element => {
        if(element.innerHTML.includes(letra)){
            element.classList.add("presionada");
        }
    }); 
}
    
function keyboardShow(){
    var estado = document.querySelector("#keyboard");
    if(estado.className.includes("mostrarTeclado")){
        changeById("keyboard", "noMostrar");
    }else{
        changeById("keyboard", "mostrarTeclado");
    }
}