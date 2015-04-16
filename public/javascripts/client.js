$(document).ready(function() {
  // initial nav setup
  $('.portfolio-choices').hide();

  // hide preloaded images
  $('.loaded').hide();

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
    // var $preload = $img.siblings('.preload');
    if ($(this).hasClass('prev')) {
      ('#ondeck').remove();
      $img.hide().attr('id','#ondeck');
      $('#prior').show();
    }
    $img.hide().attr('id','#prior').class('loaded');
    $('#prior').remove();
    $('#ondeck').show().attr('id', 'portfolio-img');
    $.get(href, function(res) {
      // $img.attr('src', $preload.attr('src')).attr('alt', $preload.attr('alt'));
      $("#portfolio-div .image-frame")
      .children()
      .append("<img id='ondeck' class='loaded'>")
      .attr('src', res.img.preload)
      .attr('alt', res.preload.alt);
      $('.next').attr('href', '/portfolio/' + res.next);
      $('.prev').attr('href', '/portfolio/' + res.prev);
      // $img.show();
    });
    return false;
  });

}); // end document ready
