function secme (){
    document.querySelector('#birinci').onclick=tikla;
}

function secmeHepsi(){
    var liste=document.querySelectorAll('#birinci');
    for(var i=0;<liste.length;i++){
        liste [i].onclick=tikla;
    }
}

function tikla(){
    alert('tiklandi');
}

window.onload=secmeHepsi;