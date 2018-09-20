// 创建一个带路由的的http 服务 (通过express 来实现)
var http = require('http')
var bodyParser = require("body-parser")
var express = require('express')
var app = express()
app.use(bodyParser.urlencoded({ extended: false })); 
app.get('/', function(req,res){
    res.send('hello express 哈哈')
})
app.get('/index', function(req,res){
    console.log(req.query)
    res.send('hello express index')
})
app.get('/detail', function(req,res){
    res.send('hello express detail')
})
app.post('/post-list', function(req,res){
    // res.send('hello express post-list')
    console.log(req.body)
    res.json({
        result: 'hello express post-list'
    })
})
app.listen(1001,()=>{
    console.log('成功')
})
 