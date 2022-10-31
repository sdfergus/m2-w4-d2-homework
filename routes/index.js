var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.render('../public/homework_foodblog.html');
  // res.sendFile('../public/homework_foodblog.html');
  // res.sendFile('homework_foodblog.html');
  // res.render('homework_foodblog');
  res.render('index');
});

module.exports = router;
