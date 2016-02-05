var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET services page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About US' });
});

/* GET social page. */
router.get('/social', function(req, res, next) {
  res.render('social', { title: 'Social' });
});

/* GET contact page. */
router.get('/ContactUs', function(req, res, next) {
  res.render('ContactUs', { title: 'Contact Us' });
});

module.exports = router;
