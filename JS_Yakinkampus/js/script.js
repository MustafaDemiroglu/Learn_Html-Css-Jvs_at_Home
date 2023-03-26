var x=1;

function birinci(param) {
    document.write("Ilk fonksiyonumu " +param+ ". defa calistiriyorum ! ");
    param=param+1
    ikinci(param);
}
function ikinci(param2) {
    document.write("Ikinci fonksiyonumu " +param2+ ". defa calistiriyorum ! ");
    param2=param2+1
    birinci(param2);
}
function nihai() {
    birinci();
    ikinci();
}
birinci(x);



/*
function yas(x) {
    document.write("Merhaba Kullanici, Benim Yasim: "+x);
}

yas(29);
*/

/* 
function kimlik(ad,soyad) {
    document.write("Merhaba benim adim:"+<strong>ad</strong>+"Soyadim:"+<strong>soyad</strong>);
}

kimlik("Mesut","Gün");
kimlik("Mustafa","Demiroglu");
*/
/*
function deneme(x) {
    return x*x;
}
document.write (deneme(5));

function deneme2(y) {
    alert(y*y*y);
}
deneme2(deneme(4));
*/