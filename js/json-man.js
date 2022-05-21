function importarPalabras(){
    var xhr = new XMLHttpRequest;
    var recibido = [];
    xhr.open("GET", "https://raw.githubusercontent.com/Sbstnsrz/ONE-Ahorcado/master/data/list.json");
    xhr.addEventListener("load",function(){
        if(xhr.status==200){
            var respuesta = xhr.responseText;
            var palabras = JSON.parse(respuesta);
            palabras.forEach(element => {
                recibido.push(element);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert("No se pudo cargar lista de palabras\n"+xhr.status);
        }
    });
    xhr.send();
    return recibido;
}
