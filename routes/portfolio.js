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
  var b = req.params.set;
  var i = req.params.id ? req.params.id : 0;
  // adjust prev for 0th index
  var prev = i === 0 ? imgList[b].length - 1 : parseInt(i) - 1;
  // adjust next for last image
  var next = i >= imgList[b].length - 1 ? 0 : parseInt(i) + 1;

  // if (i <= 0) {
  //   prev = imgList[b].length - 1;
  // } else {
  //   prev = parseInt(i) - 1;
  // };
  //
  // if (i >= imgList[b].length - 1) {
  //   next = 0;
  // } else {
  //   next = parseInt(i) + 1;
  // };

  console.log("b: " + b, "i: " + i, "prev: " + prev, "next: " + next);
  res.send({
    img: imgList[b][i],
    prev: b + "/" + prev,
    next: b + "/" + next
  })
})

module.exports = router;
