$('.ctrl').click(function() {
  var $img = $('#portfolio-img');
  var href = $(this).attr('href');
  $img.fadeOut('fast', function(){
    $.get(href, function(res) {
      $img.attr('src', res.img.src).attr('alt', res.img.alt);
      $img.fadeIn('slow', function() {
        $('.next').attr('href', '/portfolio/' + res.next);
        $('.prev').attr('href', '/portfolio/' + res.prev);
      });
    });
  });
  return false;
});


function handleSwap(res) {

}
