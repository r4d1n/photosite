var express = require('express');
var router = express.Router();

var imgArr = [
{
  src: "./images/test1.jpg",
  alt: "First Test Image"
},
{
  src: "./images/test2.jpg",
  alt: "Second Test Image"
},
{
  src: "./images/test3.jpg",
  alt: "Third Test Image"
},
{
  src: "./images/test4.jpg",
  alt: "Fourth Test Image"
},
{
  src: "./images/test5.jpg",
  alt: "Fifth Test Image"
},
{
  src: "./images/test6.jpg",
  alt: "Sixth Test Image"
}
]

function randomIndex(arr) {
  var max = arr.length;
  return Math.floor(Math.random() * (max));
}

router.get('/', function(req, res, next) {
  var i = randomIndex(imgArr);
  res.render('index', imgArr[i]);
})

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', imgArr[0]);
})

module.exports = router;
