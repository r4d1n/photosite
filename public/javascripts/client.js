$(document).ready(function() {
  $('.portfolio-choices').hide();

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

// ajax to get portfolio and swap nav item w/ numbers
$('.img-enter').click(function() {
    var href = $(this).attr('href');
  console.log(href);
  // swap portfolio for choices
  $('#nav-portfolio').hide();
  $('.portfolio-choices a').first().addClass('chosen');
  $('.portfolio-choices').show();
  // do some ajax
  $.get(href, function(res) {
    console.log(res);

  });

  return false;
})

}) // end document ready


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
