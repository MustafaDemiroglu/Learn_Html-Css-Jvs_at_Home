

// Javascript Kronometre, Setinterval, Global/Location
var saniye = 3595;

function kronometre() {
    var dak = Math.floor(saniye/60);
    var saat = Math.floor(saniye/3600);
    var dakika = dak%60;
    var san= saniye%60;
    document.write(saat+" : "+dakika+" : "+san);
    document.write("</br>")
    // saniye=saniye+1 döngüsü icin
    saniye++;
}
kronometre();

setInterval("kronometre()",1000);



/*
// Java Script Date Object
var zaman = new Date();
document.write(zaman);

document.write("<hr/>");
var saat = zaman.getHours();
document.write(saat);

document.write("<hr/>");
var dakika = zaman.getMinutes();
document.write(dakika);

document.write("<hr/>");
var saniye = zaman.getSeconds();
document.write(saniye);

document.write("<hr/>");
var zamanDegistirilmis = new Date (2023,2,26,22,07,0,0);
document.write(zamanDegistirilmis);

document.write("<hr/>");
zaman.setMinutes(48)
document.write(zaman);

document.write("<hr/>");
function yasKontrol() {
    var dogumYili = prompt("Lütfen dogum yilinizi giriniz","");
    var mevcutZaman = new Date();
    var siniryil = mevcutZaman.getFullYear()-18;
    if (dogumYili>siniryil) {
        alert("Ne yazik ki yasiniz sitesnin icerigni glrüntülemek icin yeterli degil");} 
        else {
            alert("Hosgeldiniz, keyfli vakitler dileriz");}}
yasKontrol();

*/
/*
// Javascript Math Object
var liste = new Array () ;
liste [0] = Math.round (2.75) ;
liste [1] = Math.round (2.25) ;
liste [2] = Math.floor (2.99) ;
liste [3] = Math.PI ;
liste [4] = Math.E ;
liste [5] = Math.sqrt (169) ;
liste [6] = Math.random () ; // 0 ile 1 arasinda rastlantisal rakam döndür. 
liste [7] = Math.max (458745645646,44,4,547,78964,7544221111,1111111111111111111111111111111111111111) ;
liste [8] = Math.min (4,7,98,56,1,54236,74565) ;

for (var x=0;x<liste.length;x++) {
    document.write(liste[x]+"<hr/>");}
*/
/*
//Array, Prompt
var liste = new Array();
for (var i=0;i<5;i++) {
    var y =prompt("Lütfen"+i+"komutu giriniz");
    liste[i]=y;}
    document.write(liste.join());

*/
/*
// Array, Sort, Pop; Push
var mevcutdersler = new Array (" XHTML", " JS");
var verilecekdersler = new Array ("HTML 5", " MySQL"); 
var dersler = mevcutdersler.concat(verilecekdersler);
document.write(dersler.join());

// SORT Methodu:
document.write("<hr/>");
var derslersirali= dersler.sort();
document.write(derslersirali.join());

//POP Methodu:
document.write("<hr/>");
derslersirali.pop();
document.write(derslersirali.join());

//PUSH Methodu:
document.write("<hr/>");
derslersirali.push("Autocad","Rhino");
document.write(derslersirali.join());

/*
/*
//Array and Join, Reverse, Concat 
var mevcutdersler = new Array (" XHTML"," JS");

var verilecekdersler = new Array (" HTML5"," MySQL");

for (var i=0;i<mevcutdersler.length;i++) {
    document.write(mevcutdersler[i]);}

document.write("<hr/>");
for (var j=0;j<verilecekdersler.length;j++) {
    document.write(verilecekdersler[j]);}

document.write("<hr/>");
document.write(verilecekdersler.join());

document.write("<hr/>");
document.write(mevcutdersler.join());

document.write("<hr/>");
var dersler=new Array();
dersler[0]=mevcutdersler[0];
dersler[1]=mevcutdersler[1];
dersler[2]=verilecekdersler[0];
dersler[3]=verilecekdersler[1];
document.write(dersler.join());

document.write("<hr/>");
document.write(verilecekdersler.concat(mevcutdersler).join());

document.write("<hr/>");
var tersdersler=new Array ();
tersdersler[0]=dersler[3];
tersdersler[1]=dersler[2];
tersdersler[2]=dersler[1];
tersdersler[3]=dersler[0];
document.write(tersdersler.join());

document.write("<hr/>");
document.write((dersler.reverse()).join())
*/
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