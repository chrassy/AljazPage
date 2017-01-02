//slideshow slike
var domaImg = document.getElementById("mainImage");

var imageArray = ["_slike/planica400.jpg","_slike/karatePristanek.jpg","_slike/skokVvodo.jpg","_slike/surfBack.jpg"];
var imageIndex = 0;

function changeImage() {
    domaImg.setAttribute("src",imageArray[imageIndex]);    
    imageIndex++;  
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
var intervalHandle = setInterval(changeImage, 3500);// setInterval is also in milliseconds

//togle headinga
$("#mainHeading").slideToggle(700);
$("#mainHeading").slideToggle(1500);

$("#mainHeading").click(function(){
	$("#mainHeading").slideToggle(700);
	$("#mainHeading").slideToggle(1500);
});


//funkcija zaprikaz začetnega sporočila

var showText = function (target, message, index, interval) {   
	   	if (index < message.length) {
		    $(target).append(message[index++]);
		    setTimeout(function () { showText(target, message, index, interval); }, interval);
	    }
	};
	



$(document).ready(function() {
  setTimeout(function() {
  	 showText("#zacetnoSporocilo", "Tukaj boste našli nekaj o meni, mojih hobijih in stvareh, ki jih rad počnem.", 0,35);
  }, 2500);
});


//Prikaz dobrodoslice
$(document).ready(function(){ 
	 $("#dobrodoslica").hide();	    
     $("#dobrodoslica").fadeIn(4000);
       
});
