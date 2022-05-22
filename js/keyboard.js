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
            td.className = "keys";
            td.textContent = String.fromCharCode(fila);
            var tr = document.getElementById(String.fromCharCode(row));
            tr.appendChild(td);      
            fila++;
        }
    }
}

function keyboardReset(){
    document.querySelectorAll(".presionada").forEach(
        element => {element.classList.remove("presionada");}
    );
}
function keyboardKeydown(key){
    var keys = document.querySelectorAll(".keys");
    keys.forEach(element => {
        if(element.innerHTML.includes(key)){
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