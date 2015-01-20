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

var i;

function randomIndex(arr) {
  var max = arr.length;
  return Math.floor(Math.random() * (max));
}

router.get('/', function(req, res, next) {
  i = randomIndex(imgArr);
  res.render('index', imgArr[i]);
})

router.get('/portfolio', function(req, res) {
  i = 0;
  var prev = imgArr.length - 1;
  var next = i + 1;
  res.render('portfolio', {
    img: imgArr[i],
    prev: prev,
    next: next
  })
})

router.get('/:id', function(req, res) {
  console.log(req.params.id);
  req.params.id ? i = req.params.id : i = 0;
  var prev;
  var next;
  var max = imgArr.length - 1;
  if (i === 0) {
    prev = max;
  } else {
    prev = parseInt(i) - 1;
  }
  if (i >= max) {
    next = 0;
  } else {
    next = parseInt(i) + 1;
  }
  res.render('portfolio', {
    img: imgArr[i],
    prev: prev,
    next: next
  })
})

module.exports = router;
