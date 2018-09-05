
// 爬取丽兹行的新房页面 以及导出img图片和楼盘名称
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var excel = require('./excel');
var mysql=require('mysql');
var item = 1;
var url = "http://www.lizihang.com/bj-xf/p1";
var houseArray = [];
function fetchPage (currentPage) {
    startRequest(currentPage)
}
var connection = mysql.createConnection({  //配置参数，然后添加你的数据库里面的表
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: '3306'
})
// var pool = mysql.createPool(options);
connection.connect(function(err){
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('连接成功')
    }
});  //连接
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
            $('.contList').each(function () {
                var title = $(this).find('.leftSize h3 a').text();
                var price = decodeURI($(this).find('.rightCern li span').text()).trim();
                var img_src = $(this).find('.listImg img').attr('data-src');
                var addSql = "insert into pgdemo(title_demo,price,img_src) values (?,?,?)";
                var addParmas = [title,price,img_src];
                connection.query(addSql,addParmas,function(err,data){  
                    if(err){  
                        console.log(err); 
                        return false; 
                    }else{
                        item++; 
                        if (item<=10) {
                            fetchPage('http://www.lizihang.com/bj-xf/p'+ item);
                        }
                    }
                })
            })
             
          });
    })
}
// fetchPage(url);      //主程序开始运行