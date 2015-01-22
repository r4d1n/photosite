var express = require('express');
var imgArr = require('./image-list')
var router = express.Router();

router.get('/', function(req, res) {
  var i = 0;
  var prev = imgArr.length - 1;
  var next = i + 1;
  res.render('portfolio', {
    img: imgArr[i],
    prev: prev,
    next: next
  })
})

router.get('/:id', function(req, res) {
  var i = req.params.id ? req.params.id : 0;
  var prev;
  var next;
  if (i <= 0) {
    prev = imgArr.length - 1;
  } else {
    prev = parseInt(i) - 1;
  };

  if (i >= imgArr.length - 1) {
    next = 0;
  } else {
    next = parseInt(i) + 1;
  };

  res.send({
    img: imgArr[i],
    prev: prev,
    next: next
  })
})

module.exports = router;
