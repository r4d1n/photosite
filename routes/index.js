var express = require('express');
var imgList = require('./image-list')
var router = express.Router();


function randomIndex(arr) {
  var max = arr.length;
  return Math.floor(Math.random() * (max));
}

router.get('/', function(req, res, next) {
  var i = randomIndex(imgList[0]);
  res.render('index', imgList[0][i]);
})

router.get('/about', function(req, res, next) {
  res.render('about')
})

module.exports = router;
