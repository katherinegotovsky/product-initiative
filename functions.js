//make the diamonds move
$(document).ready(function(){
  $('.timeline-event').each(function(e) {
    $(this).hover( function() {
      $('#' + this.id + ' .timeline-event-icon').css('transform', 'rotate(45deg)');
      $('#' + this.id + ' .timeline-event-icon').css('background-color', '#76C962');
    }, function () {
      $('#' + this.id + ' .timeline-event-icon').css('transform', 'rotateY(0) rotateX(0) rotateZ(0)');
      $('#' + this.id + ' .timeline-event-icon').css('background-color', '#777777');
    });
  });
});

//animate beginning text
var textWrapper = document.querySelector('.ml3');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper.innerHTML = textWrapper.innerHTML + "<span class='letter green'>.</span>";


anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 10,
    delay: (el, i) => 100 * (i+1)
  // }).add({
  //   targets: '.ml3',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000
  });


// Scroll Reveals
ScrollReveal().reveal('#about', { delay: 200, duration: 2000 });
ScrollReveal().reveal('#program', { delay: 400, duration: 2000 });
ScrollReveal().reveal('#roles', { delay: 400, duration: 2000 });
ScrollReveal().reveal('#join', { delay: 200, duration: 2000 });
ScrollReveal().reveal('#hiring', { delay: 400, duration: 2000 });
