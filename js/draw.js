var pantalla = document.getElementById("draw");
var draw = pantalla.getContext("2d");
draw.beginPath();

draw.fillStyle= "#0A3871";
draw.lineCap= "round";
draw.lineWidth=5;
draw.strokeStyle="#0A3871";

//base
draw.fillRect(0,355,294,360);


var contador=0;
window.addEventListener('keydown', function(event) {
    if(event.key) {
        contador++;
    }
    switch(contador){
        case 1:{
            //mastil1
            draw.fillRect(80,0,5,360);
            break;}
        case 2:{
            draw.fillRect(85,0,174,5);
            break;}
        case 3:{
            draw.fillRect(254,5,5,50);
            break;}
        case 4:{
            //cabeza
            draw.arc(256, 80, 25, 0, 2 * Math.PI);
            draw.stroke();
            break;}
        case 5:{
            //cuerpo
            draw.fillRect(254,105,5,135);
            break;}
        case 6:{
            //brazo derecho
            draw.moveTo(256,105);
            draw.lineTo(256+32,105+62);
            draw.stroke();
            break;}
        case 7:{
            //brazo izquierdo
            draw.moveTo(256,105);
            draw.lineTo(256-32,105+62);
            draw.stroke();
            break;}
        case 8:{
            //Pierna derecha
            draw.moveTo(256,135+105);
            draw.lineTo(256+32,135+105+62);
            draw.stroke();
            break;}
        case 9:{
            //Pierna izquierda
            draw.moveTo(256,135+105);
            draw.lineTo(256-32,135+105+62);
            draw.stroke();
            break;
        }
        default:
            return;
    }
    console.log(contador);
});