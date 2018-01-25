$(function() {

  $(window).scroll(function() {
    var dy = $(this).scrollTop();
    console.log(dy);

    $('#bg1').css('background-position', '0 '+dy+'px');

    if (dy > 340) {
      $('#bg2').css('background-position', '0 '+(dy - 340)+'px');
    } else {
      $('#bg2').css('background-position', '0 0');
    }
    if (dy > 680) {
      $('#bg3').css('background-position', '0 '+(dy - 680) * 2+'px');
    } else {
      $('#bg3').css('background-position', '0 0');
    }
    if (dy > 680) {
      $('#msg').css('opacity', (dy - 680)/340);
      $('#msg').css('top', 200);
      var dx = (dy-680) > 400 ? 400: (dy-680);
      $('#msg').css('left', dx);
    } else {
      $('#bg3').css('opacity', 0);
    }
  })
})
