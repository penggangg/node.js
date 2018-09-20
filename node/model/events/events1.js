var http = require('http')
var server = http.createServer()
server.on('request',function(req, res){ // http.createServer(function(req,res){})
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'})  // text/html application/json
    res.write('hello world 哈哈')
    res.end()
    
})
server.listen(2222,_=>{
    console.log('启动成功')
})