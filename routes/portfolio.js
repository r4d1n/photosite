var express = require('express');
var router = express.Router();

var imgArr = [
{
  "src": "./images/test1.jpg",
  "alt": "First Test Image"
},
{
  "src": "./images/test2.jpg",
  "alt": "Second Test Image"
},
{
  "src": "./images/test3.jpg",
  "alt": "Third Test Image"
},
{
  "src": "./images/test4.jpg",
  "alt": "Fourth Test Image"
},
{
  "src": "./images/test5.jpg",
  "alt": "Fifth Test Image"
},
{
  "src": "./images/test6.jpg",
  "alt": "Sixth Test Image"
}
]

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {'images': imgArr});
})

module.exports = router;
