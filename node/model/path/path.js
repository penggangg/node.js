var path = require('path');
// 最常用的 path.join 路径拼接
// console.log(__dirname) // 表示当前文件所在的目录的绝对路径 E:\pgdemo\Nodejs\node\model\path
// console.log(__filename) //  表示当前文件的绝对路径
// console.log(process.cwd())
// console.log(process.chdir())
console.log(path.join(__dirname,'..','/test/demo.js'));
