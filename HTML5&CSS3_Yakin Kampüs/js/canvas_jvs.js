function cizim(){
    var can = document.getElementById('cizimAlani');
    canvas = can.getContext('2d');
    
    var grad=canvas.createLinearGradient(0,0,600,600);
    grad.addColorStop(0.0, "red");
    grad.addColorStop(0.3, "green");
    grad.addColorStop(0.7, "pink");
    grad.addColorStop(1.0, "blue");
    canvas.fillStyle=grad;
    canvas.fillRect(0,0,600,600);
    
}

window.onload=cizim;