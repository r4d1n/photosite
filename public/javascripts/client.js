// ajax to fade between images in portfolio
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

// ajax to swap portfolio link w/ numbers
$('#nav-portfolio').click(function() {
  var $self = $(this);
  var href = $self.attr('href');

})

// ajax to fade out index image, then load portfolio
// $('#index-img').click(function() {
//   var href = $(this).attr('href');
//   $(this).children().fadeOut('slow');
//   $.get(href, function(res){
//     console.log(res)
//     $('body').html(res);
//   });
//   return false;
// })
