function funkcijaManjeVise1(){
var tacka1=document.getElementById("tacke1");
var viseTeksta1=document.getElementById("vise1");
var dugmeTekst1=document.getElementById("dugme1");

if(tacka1.style.display === "none"){

tacka1.style.display= "inline";
dugmeTekst1.innerHTML= "Čitaj više";
viseTeksta1.style.display="none";
}
else{
    tacka1.style.display= "none";
    dugmeTekst1.innerHTML= "Čitaj manje";
    viseTeksta1.style.display="inline";   
}
}
