






/*
//Array da Length ve For döngüsü 
var derslistesi = new Array ("XHTML", "Java", "JavaScript", "Autocad", "HTML5");
document.write(derslistesi[3]);

var ülkelistesi=new Array();
document.write("<hr/>");
ülkelistesi[0]="Almanya";
ülkelistesi[1]="Fransa";
ülkelistesi[2]="Türkiye";
ülkelistesi[3]="Ingiltere";
ülkelistesi[4]="Amerika";
ülkelistesi[5]="Ispanya";

document.write(ülkelistesi[0]);

var uzunluk1=derslistesi.length;
document.write("<hr/>");
document.write(uzunluk1);

var uzunluk2=ülkelistesi.length;
document.write("<hr/>");
document.write(uzunluk2);
document.write("<hr/>");

for (var i=0;i<derslistesi.length;i++) {
   document.write(derslistesi[i]+" ");}
*/
/*
var derslistesi = new Array ("XHTML", "Java", "JavaScript", "Autocad", "HTML5");
document.write(derslistesi[3]);
var ülkelistesi=new Array();
document.write("<hr/>");
ülkelistesi[0]="Almanya";
ülkelistesi[1]="Fransa";
ülkelistesi[2]="Türkiye";
ülkelistesi[3]="Ingiltere";
ülkelistesi[4]="Amerika";
ülkelistesi[5]="Ispanya";
document.write(ülkelistesi[0]);
*/
/*
function ders (isim, kod, hoca, tarih) {
    this.isim=isim;
    this.kod=kod;
    this.hoca=hoca;
    this.tarih=tarih;
    this.kacsenedir=kacsenedir;}
function kacsenedir() {
    var x=2012-this.tarih;
    return x;}
var ders1= new ders ("Javascript", 101, "Mesut", 2010);
var ders2= new ders ("XHTML", 102, "Caglar", 2011);
document.write(ders1.tarih);
document.write("</br>"+"</br>");
document.write(ders1.kacsenedir);
document.write("</br>"+"</br>");
document.write(ders2.kacsenedir);
document.write("</br>"+"</br>");
*/
/*
function ders (isim, kod, hoca, tarih) {
    this.isim=isim;
    this.kod=kod;
    this.hoca=hoca;
    this.tarih=tarih;}
var ders1= new ders ("Javascript", 101, "Mesut", 2010); 
document.write(ders1.isim + "</br>");
document.write(ders1.kod + "</br>");
document.write(ders1.hoca + "</br>");
document.write(ders1.tarih + "</br>");
document.write("</br>"+"</br>");

var ulke1={isim:"Almanya",dil:"Almanca",konum:"AB",kurulusyili:"1871"};
document.write(ulke1.isim);
document.write(ulke1.dil);
document.write(ulke1.konum);
document.write(ulke1.kurulusyili);

var ulke2={isim:"Fransa",dil:"Fransizca",konum:"AB",kurulusyili:"1500"};
document.write(ulke2.isim);
document.write(ulke2.dil);
document.write(ulke2.konum);
document.write(ulke2.kurulusyili);
*/
/*
function ders (isim, kod, hoca, tarih) {
    this.isim=isim;
    this.kod=kod;
    this.hoca=hoca;
    this.tatih=tarih;}
var ders1= new ders ("Javascript", 101, "Mesut", 2010); 
document.write(ders1.isim + "</br>");
document.write(ders1.kod + "</br>");
document.write(ders1.hoca + "</br>");
document.write(ders1.tarih + "</br>");
*/
/*
var z=0;
do {
    document.write("Su anki Z degeri : " +z+"</br>");
    z++;
} while (z<20);
/*
/*
for (var y=10; y<20; y++){
    document.write("su anki y degeri: " +y+"</br>")}
*/
/*
var x=0;
while (x<30) {
    document.write("Su anki x degeri: "+x+"</br>");
    x=x+1;
}
*/
/*
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
*/
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