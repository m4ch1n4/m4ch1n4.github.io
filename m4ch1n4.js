// JavaScript Document
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

// text 1 m4ch1n4

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
