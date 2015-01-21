var express = require('express');
var imgArr = require('./image-list')
var router = express.Router();

router.get('/', function(req, res) {
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
