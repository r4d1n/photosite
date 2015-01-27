$(document).ready(function() {
  // initial nav setup
  $('.portfolio-choices').hide();
  // $choiceLinks.first().addClass('chosen');

  // swap nav for portfolio page
  var path = window.location.pathname;
  if (path === '/portfolio/') {
    $('#nav-portfolio').hide();
    $('.portfolio-choices').show();
  }

  // fade and reload images
  $('.ctrl').click(function() {
    var $img = $('#portfolio-img');
    var href = $(this).attr('href');
    $img.fadeOut('fast', function() {
      $.get(href, function(res) {
        $img.attr('src', res.img.src).attr('alt', res.img.alt);
        $img.fadeIn('slow');
        $('.next').attr('href', '/portfolio/' + res.next);
        $('.prev').attr('href', '/portfolio/' + res.prev);
      });
    });
    return false;
  });

}); // end document ready
