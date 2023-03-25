function cizim() {
    var can = document.getElementById('cizimAlani');
    canvas = can.getContext('2d');

    canvas.beginPath();
    canvas.moveTo(350,350);
    canvas.lineTo(150,100);
    canvas.lineTo(200,150);
    canvas.lineTo(200,200);
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(200,350);
    canvas.lineTo(400,100);
    canvas.lineTo(350,150);
    canvas.lineTo(350,200);
    canvas.closePath();
    canvas.fill();
}
window.onload=cizim;