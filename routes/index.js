var express = require('express');
var imgArr = require('./image-list')
var router = express.Router();


function randomIndex(arr) {
  var max = arr.length;
  return Math.floor(Math.random() * (max));
}

router.get('/', function(req, res, next) {
  var i = randomIndex(imgArr);
  res.render('index', imgArr[i]);
})

router.get('/about', function(req, res, next) {
  res.render('about', {title : 'About'});
})

module.exports = router;
