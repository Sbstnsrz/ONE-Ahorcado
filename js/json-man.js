function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function importWords(){
    var respuesta = await makeRequest("GET", "https://palabras-aleatorias-public-api.herokuapp.com/random");
    return JSON.parse(respuesta)['body']['Word'];  
}
/*
function importWords(){
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
*/