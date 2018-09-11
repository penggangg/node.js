var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get(/index1/, function(req, res, next) {
  var Res = res
  var result = ''
  // Res.send(req.originalUrl);//req.originalUrl获取当前URL
  // Res.json({
  //     hots:'123213'
  // })
  http.get('http://www.lizihang.com:80/landz-web-project/home/getHotRecommend?cityCode=110000&userId=BJG18052388719',function(res) {
    res.setEncoding('utf-8'); //防止中文乱码
    res.on('data',function (chunk) {
      result += chunk
    })
    res.on('end', function() {
      Res.render('index', { title: 'Express', result: JSON.parse(result)});
    })
  })
  // Res.render('index', { title: 'Express' });
});
router.get(/index2/, function(req, res, next) {
  var Res = res
  var result = ''
  // Res.send(req.originalUrl);//req.originalUrl获取当前URL
  // Res.json({
  //     hots:'123213'
  // })
  http.get('http://www.lizihang.com:80/landz-web-project/home/getHotRecommend?cityCode=110000&userId=BJG18052388719',function(res) {
    res.setEncoding('utf-8'); //防止中文乱码
    res.on('data',function (chunk) {
      result += chunk
    })
    res.on('end', function() {
      Res.render('index1', { title: 'Express2222', result: JSON.parse(result)});
    })
  })
  // Res.render('index', { title: 'Express' });
});
module.exports = router;
