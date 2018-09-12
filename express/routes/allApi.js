var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: '首页' });
});
router.get('/newhouse', function(req, res, next) {
  res.render('home/index', { title: '新房页' });
});
router.get(/shop/, function(req, res, next) {
  console.log(req.originalUrl)
  res.render('home/index', { title: '商铺页面' });
});
  
module.exports = router;
