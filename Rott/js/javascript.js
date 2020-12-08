$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "#d1b5e6");
  })
  $("input").blur(function(){
    $(this).css("background-color", "white");
  })
  $("textarea").focus(function(){
    $(this).css("background-color", "#d1b5e6");
  })
  $("textarea").blur(function(){
    $(this).css("background-color", "white");
  })
  $("#dugme").hover(function() {
    $(this).css("background-color", "#d1b5e6");
  })
  $("#dugme").mouseleave(function() {
    $(this).css("background-color", "white");
  })

    //accordion
    $( function() {
      $( "#accordion" ).accordion();
    } );
});
 
 
function validanMail (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
 
 function validateForm() {
    
    var ime = document.getElementById("ime").value;
    var mail = document.getElementById("email").value;
    var naslov = document.getElementById("naslovPoruke").value;
    var poruka = document.getElementById("poruka").value;
    
    let greska = [];

    if(ime=="") {
      greska.push(" ime");
    }
    if(naslov=="") {
      greska.push(" naslov");
       
    }
    if(poruka=="") {
      greska.push(" poruku");
    }
    if(!validanMail(mail)) {
      greska.push(" validan e-mail");
    }
    if(greska.length>0) {

      document.getElementById("err").innerHTML = "Morate uneti: " + greska + "!";
      return false;
    }
    alert("Uspesno ste nam poslali poruku! Javićemo Vam se u najkraćem roku!");

   
    }
    

  
    
