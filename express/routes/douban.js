var express = require('express');
var router = express.Router();
var http = require('http');
var cheerio = require('cheerio');
var request = require('request')
router.get('/', function (req,res) {
    var Res = res;
    http.get('http://www.lizihang.com', function (res) {
        // var chunks = [];
        // var size = 0;
        var html = '';        //用来存储请求网页的整个html内容
        var titles = [];
        res.setEncoding('utf-8'); //防止中文乱码
        res.on('data', function (chunk) {
            html += chunk;
        })
        res.on('end', function () {
            // Res.send(chunks)
            // var data = Buffer.concat(chunks,size);  
            // var html = data.toString();
            var $ = cheerio.load(html); //cheerio模块开始处理 DOM处理
            // var time = $('.article-info a:first-child').next().text().trim();
            // var news_item = {
            //     //获取文章的标题
            //     title: $('div.article-title a').text().trim(),
            //     //获取文章发布的时间
            //     Time: time,   
            //     //获取当前文章的url
            //      link: "http://www.ss.pku.edu.cn" + $("div.article-title a").attr('href'),
            //     //获取供稿单位
            //     author: $('[title=供稿]').text().trim(),  
            // };
            var aa = $('.second_hot  a').text()
            var jobs = []
            $('.second_hot a').each(function(){
                var job = {};
                job.hot = $(this).text();  
                jobs.push(job);
            })
            console.log(jobs);     //打印新闻信息
            Res.json({
                hots:jobs
            })
        })
    })
})
// router.get('/', function (req,res) {
//     var Res = res;
//     request('http://movie.douban.com/subject/11529526', function (error, response, body) {
//         console.log(body)
//         Res.send(body);
//     })
// })
module.exports = router;