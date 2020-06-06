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