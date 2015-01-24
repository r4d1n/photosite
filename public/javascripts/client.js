$(document).ready(function() {
  $('.portfolio-choices').hide();
// change nav for portfolio page
  var path = window.location.pathname;
  if (path === '/portfolio/') {
    $('#nav-portfolio').hide();
    $('.portfolio-choices a').first().addClass('chosen');
    $('.portfolio-choices').show();
  };

  $('.ctrl').click(function() {
    var $img = $('#portfolio-img');
    var href = $(this).attr('href');
    $img.fadeOut('fast', function() {
      $.get(href, function(res) {
        console.log(res);
        $img.attr('src', res.img.src).attr('alt', res.img.alt);
        $img.fadeIn('slow');
        $('.next').attr('href', '/portfolio/' + res.next);
        $('.prev').attr('href', '/portfolio/' + res.prev);
      });
    });
    return false;
  });



}); // end document ready
