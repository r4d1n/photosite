var i;

$(document).ready(function() {
  i = 0;
  $.get("/portfolio", { index : i });
});

$('.next').click(function() {
  i++;
  $.get("/portfolio", { index : i });
});

$('.prev').click(function() {
  i--;
  $.get("/prev", { index : i });
});
