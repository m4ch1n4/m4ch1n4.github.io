JavaScript Document
//  the date we're counting down to
//var countDownDate = new Date(" Oct 15, 2017 15:37:25").getTime();
//
//// Update the count down every 1 second
//var x = setInterval(//function() {
//
//  // Get todays date and time var now = new Date().getTime();
//
//  // Find the distance between now an the count down date var distance = countDownDate - now;
//
//  // Time calculations for days, hours, minutes and seconds
// // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//  //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//  //var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//  // Display the result in an element with id="day1s"
//  document.getElementById("day1s").innerHTML = days + "d " + hours + "h "
//  + minutes + "m " + seconds + "s ";
//
//  // If the count down is finished, write some text
//  if (distance < 0) {
//    clearInterval(x);
//    document.getElementById("day1s").innerHTML = "FUCK UP TIME";
//  }
//}, 1000);
    	$(document).ready(function(){
var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
var ctnt = "M4CH1N4"; // Your text goes here
var speed = 5; // ms per frame
var increment = 1; // frames per step. Must be >2

    
var clen = ctnt.length;       
var si = 0;
var stri = 0;
var block = "";
var fixed = "";
//Call self x times, whole function wrapped in setTimeout
(function rustle (i) {          
setTimeout(function () {
  if (--i){rustle(i);}
  nextFrame(i);
  si = si + 1;        
}, speed);
})(clen*increment+1); 
function nextFrame(pos){
  for (var i=0; i<clen-stri; i++) {
    //Random number
    var num = Math.floor(theLetters.length * Math.random());
    //Get random letter
    var letter = theLetters.charAt(num);
    block = block + letter;
  }
  if (si == (increment-1)){
    stri++;
  }
  if (si == increment){
  // Add a letter; 
  // every speed*10 ms
  fixed = fixed +  ctnt.charAt(stri - 1);
  si = 0;
  }
  $("#output").html(fixed + block);
  block = "";
}
});
	
// text 1 m4ch1n4

// Wrap every letter in a span


// bm js
   
