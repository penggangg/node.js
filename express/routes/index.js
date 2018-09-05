var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get(/index/, function(req, res, next) {
  var Res = res
  var result = ''
  console.log(req.originalUrl)
  Res.send(req.originalUrl);//req.originalUrl获取当前URL
  // http.get('http://www.lizihang.com:80/landz-web-project/home/getHotRecommend?cityCode=110000&userId=BJG18052388719',function(res) {
  //   res.setEncoding('utf-8'); //防止中文乱码
  //   res.on('data',function (chunk) {
  //     result += chunk
  //   })
  //   res.on('end', function() {
  //     Res.render('index', { title: 'Express', result: JSON.parse(result)});
  //   })
  // })
  // Res.render('index', { title: 'Express' });
});

module.exports = router;
