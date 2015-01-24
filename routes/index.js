var express = require('express');
var imgList = require('./image-list')
var router = express.Router();


function randomIndex(arr) {
  var max = arr.length;
  return Math.floor(Math.random() * (max));
}

router.get('/', function(req, res, next) {
  var b = randomIndex(imgList);
  var i = randomIndex(imgList[b]);
  res.render('index', imgList[b][i]);
})

router.get('/about', function(req, res, next) {
  res.render('about')
})

module.exports = router;
