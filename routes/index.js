var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio1', {title : 'Portfolio #1'});
})

module.exports = router;
