var fs = require('fs')
var data = ''
// 异步读取
// fs.readFile('./demo1.txt',function(err,data){
//     if(err) {
//         throw err
//     }
//     console.log(data)
// })
console.log(process.argv.slice(2))
// 同步读取
// var data = fs.readFileSync('./demo1.txt','utf-8')
// 写入文件 option 的参数 flag 默认是w 先清空当前文件 然后在写入数据 若想追加的话 则 flag 设置为 a 则是在当前文件上追加写入
// fs.writeFile('./newdir/demo2.txt','我是demo1传给demo2的'+data+'\n' ,function(err){
//     if (err) {
//         throw err
//     }
//     console.log('写入成功')
// })
// fs.writeFile('./demo2.txt','我是demo1传给demo2的追加的'+data+'\n',{'flag':'a'},function(err){
//     if (err) {
//         throw err
//     }
//     console.log('追加成功')
// })
// fs.writeFileSync('./demo2.txt','Sync我是demo1传给demo2的'+data+'\n')
// // // 创建 newdir 目录
// fs.mkdir('./newdir', function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('make dir success.');
// });
// // 删除目录可以用fs.rmdir(path,callback);但是只能删除空目录。
// fs.readdir('../fs', function(err, files) {
//     if (err) {
//         throw err;
//     }
//     // files是一个数组
//     // 每个元素是此目录下的文件或文件夹的名称
//     console.log(files);
// });
// var data = fs.readFileSync('../http/uploads/upload_36b2275393dda6a4c7e618c851ab32a2');
// console.log(data)
// console.log(new Buffer(data).toString('base64'))
// 流的操作
var rs = fs.createReadStream('../../js/image/demo.jpg')
var ws = fs.createWriteStream('../img/pipe1.png')
// rs.pipe(ws)
//3.监听流的打开和关闭
ws.once('open' ,()=>{
    console.log("读入通道打开");
});
ws.once('close' ,()=>{
    console.log("读入通道以关闭");
});
 
rs.once('open' ,()=>{
    console.log("写出通道已打开");
});
rs.once('close' ,()=>{
    console.log("写出通道已关闭");
});
//4.绑定data
rs.on("data", (data)=>{
    console.log(data)
    ws.write(data);
});