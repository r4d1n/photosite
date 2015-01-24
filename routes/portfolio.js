var express = require('express');
var imgList = require('./image-list')
var router = express.Router();

router.get('/', function(req, res) {
  // start with first array from list module
  var set = imgList[0];
  var prev = set.length - 1; // last image in the array
  var next = 1; // second image in the array
  res.render('portfolio', {
    // render first image from first set
    img: set[0],
    prev: 0 + "/" + prev,
    next: 0 + "/" + next
  })
})

router.get('/:set/:id', function(req, res) {
  var i = req.params.id ? req.params.id : 0;
  var prev;
  var next;
  if (i <= 0) {
    prev = imgList[set].length - 1;
  } else {
    prev = parseInt(i) - 1;
  };

  if (i >= imgList[set].length - 1) {
    next = 0;
  } else {
    next = parseInt(i) + 1;
  };
  var set = imgList[req.params.set];
  console.log(set, prev, next);
  res.send({
    img: set[i],
    prev: set + "/" + prev,
    next: set + "/" + next
  })
})

module.exports = router;
