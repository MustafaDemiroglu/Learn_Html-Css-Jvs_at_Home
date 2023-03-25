function cizim(){
    var can = document.getElementById('cizimAlani');
    canvas = can.getContext('2d');
    canvas.strokeStyle="red"
    canvas.strokeRect(25,25,300,300);
    canvas.fillStyle="yellow"
    canvas.fillRect(350,350,300,300);
    canvas.clearStyle="pink"
    canvas.clearRect(150,150,200,200);
    for (var i=0;i<10;i++){
        canvas.fillRect(0+i*50,0+i*50, 50,50,50);
        canvas.clearRect(10+i*50,10+i*50, 30,30,30);
    }
    
}

window.onload=cizim;