// 数据请求
var http = require('http')
var querystring = require('querystring')

var data = {  
    a: 123,  
    time: new Date().getTime()
};//这是需要提交的数据  

var content = querystring.stringify(data); 
var options = { 
    hostname: '127.0.0.1', 
    port: 1001, 
    path: '/post-list', 
    method: 'POST' 
}; 

var req = http.request(options, function (res) { 
    console.log('STATUS: ' + res.statusCode); 
    console.log('HEADERS: ' + JSON.stringify(res.headers)); 
    res.setEncoding('utf8'); 
    res.on('data', function (chunk) { 
        console.log('BODY: ' + chunk); 
    }); 
}); 
   
req.on('error', function (e) { 
    console.log('problem with request: ' + e.message); 
}); 
req.write(content);// 将所需的参数传入 写入body
req.end();