$(document).ready(function() {
  $('.ctrl').click(function() {
    var $img = $('#portfolio-img');
    var href = $(this).attr('href');
    $.get(href, function(res) {
      // $img.fadeOut('slow', function() {
      $img.attr('src', res.img.src).attr('alt', res.img.alt);
      $('.next').attr('href', '/portfolio/' + res.next);
      $('.prev').attr('href', '/portfolio/' + res.prev);
      // $img.fadeIn('fast');
      // });
    });
    return false;
  });
}); // end document ready
