var express = require('express');
var imgList = require('./image-list')
var router = express.Router();

router.get('/', function(req, res) {
  // start with first array from list module
  var set = imgList;
  var prev = set.length - 1; // last image in the array
  var next = 1; // second image in the array
  res.render('portfolio', {
    // render first image from first set
    img: set[0],
    prev: prev,
    next: next
  })
})

router.get('/:id', function(req, res) {
  var i = req.params.id ? req.params.id : 0;
  if (i <= 0) { i = 0 };
  // adjust var prev for 0th index
  var prev = i === 0 ? imgList.length - 1 : parseInt(i) - 1;
  // adjust var next for last in array
  var next = i >= imgList.length - 1 ? 0 : parseInt(i) + 1;
  res.send({
    img: imgList[i],
    prev: prev,
    next: next
  })
})

module.exports = router;
