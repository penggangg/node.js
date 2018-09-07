// 创建一个简单的http 服务
var http = require('http')
var app =http.createServer(function(req,res) {
    res.write('hello world')
    res.end()
})
app.listen(7777)