$('.next').click(function() {
  var href = $(this).attr('href');
  console.log(href);
 $('#portfolio-img').fadeOut('fast', function(){
     $('body').load(href);
 });
 return false;
});

$('.prev').click(function() {

});
