$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var x=50;
    var y=100;
    var w=200;
    var z=300;
    context.beginPath();
    context.moveTo(y,w);
    context.lineTo(w,x);
    context.lineTo(z,w);
    context.lineTo(y,w);
    context.lineWidth = 5;
    context.strokeStyle='lightgray';
    context.stroke();
    context.fillStyle='orange';
    context.fill();
  });