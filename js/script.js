var letras = document.querySelector(".letrasErradas");
letras.textContent="";

window.addEventListener('keydown', function(event){
    if(event.key && contador<9){
        letras.textContent+=event.key.toLocaleUpperCase();
    }
});