

var followX = 0;
var followY = 0;
var x = 0;
var y = 0;
var sexyFriction = 1 / 30;

function moveBackground() {
  x += (followX - x) * sexyFriction;
  y += (followY - y) * sexyFriction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(window).on('mousemove click', function(e) {

  var mouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var mouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  followX = (20 * mouseX) / 100; 
  followY = (10 * mouseY) / 100;

});

moveBackground();