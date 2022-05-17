var pantalla = document.getElementById("draw");
var draw = pantalla.getContext("2d");
draw.beginPath();

draw.fillStyle= "#0A3871";
draw.lineCap= "round";
//base
draw.fillRect(0,355,294,360);
//mastil
draw.fillRect(80,0,5,360);
draw.fillRect(85,0,174,5);
draw.fillRect(254,5,5,50);
//cabeza
draw.lineWidth=5;
draw.strokeStyle="#0A3871";
draw.arc(256, 80, 25, 0, 2 * Math.PI);
draw.stroke();
//cuerpo
draw.fillRect(254,105,5,135);
//brazo izquierdo
draw.moveTo(256,105);
draw.lineTo(256-32,105+62);
draw.stroke();
//brazo derecho
draw.moveTo(256,105);
draw.lineTo(256+32,105+62);
draw.stroke();
//Pierna izquierda
draw.moveTo(256,135+105);
draw.lineTo(256-32,135+105+62);
draw.stroke();
//Pierna derecha
draw.moveTo(256,135+105);
draw.lineTo(256+32,135+105+62);
draw.stroke();


