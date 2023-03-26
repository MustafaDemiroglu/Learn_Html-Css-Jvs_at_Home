
var ders="Javascript";
switch (ders) {
    case "Javascript":{
            document.write("Yeni "+ders+"  dersimiz eklendi."+"<a href='http://www.yakinkampus.com'>Buradan izleyebilirsiniz</a> ");
            break;}
    case "XHTML":{
            document.write("Yeni "+ders+"  dersimiz eklendi."+"<a href='http://www.yakinkampus.com'>Buradan izleyebilirsiniz</a> ");
                break;}
    case "HTML5":{
            document.write("Yeni "+ders+"   dersimiz eklendi."+"<a href='http://www.yakinkampus.com'>Buradan izleyebilirsiniz</a> ");
                break;}           
    default:{
        document.write("Aradiginiz "+ders+" dersine ulasilamadi. Sitemizden benzer diger dersleri"+"<a href='http://www.yakinkampus.com'>Burada bulabilrsiniz</a> ");}}

/*
var ad ="Mesutcuk";
var soyad ="Günt";
/*
if (ad=="Mesut") {
    if (soyad=="Gün") {
        document.write("Evet, aradigimiz adami bulduk !!!");
    } 
    else {
    document.write( "Isim dogru ama soyadi yanlis");
}}
else {
    document.write("Isim yanlis bu sebeple soyadina hic bile bakmadim");
}
*/
/*
if ((ad=="Mesut")&&(soyad=="Gün")){
    document.write("Evet aradigimiz adami bulduk");} 
    else{
        if ((ad=="Mesut")||(soyad=="Gün")) {
            document.write("Ya Adiniz ya da Soyadiniz yanlis girildi");} 
            else{
            document.write("Ne adiniz ne de soyadiniz dogru girilmistir");}}
*/
/*
var isim="Mustafa"
if (isim!="Mesut") {
    document.write("Sizin Adiniz Mesut");
    }
    else {
        document.write("Sizin Adiniz Mesut degil");
}
var ilksayi=5;
var ikincisayi=3;
if (ilksayi<ikincisayi) {
    document.write("</br>"+"ikinci sayi daha büyük!!!");
    } 
    else {
        document.write("</br>"+"ilk sayi daha büyük !!!")
}
*/
/*
var x=5;
x++;
document.write("Merhaba Aradiginiz sayi: " +x);
x--;
document.write("</br>"+" Merhaba Aradiginiz ikinci sayi: " +x);
var y=10;
y+=3;
document.write("</br>"+"Merhaba aradiginiz ücüncü sayi:"+y); 
*/
/*
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
*/
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