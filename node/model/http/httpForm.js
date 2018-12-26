// 创建一个带路由的的http 服务 (通过express 来实现)
var http = require('http')
var path = require('path');
var fs = require('fs');
var bodyParser = require("body-parser")
var express = require('express')
var formidable = require('formidable');
var app = express()
app.use(bodyParser.urlencoded({ extended: false })); 
app.post('/post-list-form', function(req,res){
    // res.send('hello express post-list')
    var form = new formidable.IncomingForm();
    form.uploadDir = "./uploads";
    // 解析表单， fields表示文本域，files表示文件域
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
        var dataSrc = fs.readFileSync(path.join(__dirname,'./', files.file.path));
        var src=new Buffer(dataSrc).toString('base64')
        res.write(`<div><img style='width:300px;height:200px' src='data:image/png;base64,${src}'></div>`)
        res.end();
    });
    // res.json({
    //     result: 'hello express post-list'
    // })
})

app.listen(1001,()=>{
    console.log('成功')
})
 