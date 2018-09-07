var fs = require('fs')
console.log(123)
// 异步读取
fs.readFile('./demo1.txt',function(err,data){
    if(err) {
        throw err
    }
    console.log(data)
})
// 同步读取
var data = fs.readFileSync('./demo1.txt','utf-8')
console.log(data)
// 写入文件 option 的参数 flag 默认是w 先清空当前文件 然后在写入数据 若想追加的话 则 flag 设置为 a 则是在当前文件上追加写入
// fs.writeFile('./demo2.txt','我是demo1传给demo2的'+data+'\n' ,function(err){
//     if (err) {
//         throw err
//     }
//     console.log('写入成功')
// })
fs.writeFile('./demo2.txt','我是demo1传给demo2的追加的'+data+'\n',{'flag':'a'},function(err){
    if (err) {
        throw err
    }
    console.log('追加成功')
})
fs.writeFileSync('./demo2.txt','Sync我是demo1传给demo2的'+data+'\n')
// 创建 newdir 目录
fs.mkdir('./newdir', function(err) {
    if (err) {
        throw err;
    }
    console.log('make dir success.');
});
// 删除目录可以用fs.rmdir(path,callback);但是只能删除空目录。
fs.readdir('../fs', function(err, files) {
    if (err) {
        throw err;
    }
    // files是一个数组
    // 每个元素是此目录下的文件或文件夹的名称
    console.log(files);
});