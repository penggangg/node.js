
// 爬取丽兹行的新房页面 以及导出img图片和楼盘名称
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var excel = require('./excel')
var i = 1;
var url = "http://www.lizihang.com/bj-xf/p1";
var houseArray = [];
function fetchPage (currentPage) {
    startRequest(currentPage)
}

function startRequest (currentPage) {
    // 采用http 模块向服务器发送一次get 请求
    http.get(currentPage, function (res) {
        var html = '' ;// 用来存储请求网页的整个html内容
        var titles = [];
        res.setEncoding('utf-8'); // 防止中文乱码
        // 监听data 事件 每次取一块数据
        res.on('data', function(chunk){
            html += chunk;
        });
        // 监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数 
        res.on('end', function() {
            var $ = cheerio.load(html);
            i++;
            console.log($('.contList').eq(0).find('.leftSize h3 a').text());
            // $('.contList').each(function () {
            //     var houseObj = {};
            //     houseObj.title = $(this).find('.leftSize h3 a').text();
            //     houseObj.price = decodeURI($(this).find('.rightCern li span').text()).trim();
            //     houseObj.img_src = $(this).find('.listImg img').attr('data-src');
            //     houseArray.push(houseObj);
            // })
            // if (i == 11) {
            //     savedContent($,houseArray);  //存储每篇文章的内容及文章标题
            //     savedImg($);    //存储每篇文章的图片及图片标题
            // }
            // // 这是亮点之一，通过控制I,可以控制爬取多少篇文章.
            // if (i <= 10) {  
            //     fetchPage('http://www.lizihang.com/bj-xf/p' + i)             
            // }
          });
    })
}
// 该函数的作用：在本地存储所爬取的新闻内容资源
function savedContent($, news_title) {
    // news_title = JSON.stringify(news_title);
    // fs.appendFile('./data/message.xls', news_title, function (err) {
    //     if (err) throw err;
    //     console.log('The "data to append" was appended to file!');
    // });
    excel(news_title)
}
// 该函数的作用：在本地存储所爬取到的图片资源
function savedImg($,news_title) {
    $('.contList').each(function () {
        var title = $(this).find('.leftSize h3 a').text();
        var img_src = $(this).find('.listImg img').attr('data-src');
        var img_filename = title + '.jpg';
        if (img_src == '/static/img/default1.png') {
        } else {
            // request.head(img_src,function(err,res,body){
            //     if(err){
            //         console.log(err);
            //     }
            // });
            request(img_src).pipe(fs.createWriteStream('./image/' + img_filename));    
        }
    })
}
fetchPage(url);      //主程序开始运行