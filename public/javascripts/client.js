$(document).ready(function() {
  var i = 0;
  $('.next').click(function () {
    i++;
    $.get("/portfolio/next", { index : i })
  })
})
