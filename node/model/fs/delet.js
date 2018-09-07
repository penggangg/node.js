var fs = require('fs')
var path = require('path')
function deletAll (path) {
    var files = []
    if (fs.existsSync(path)){
        files = fs.readdirSync(path)
        console.log(files)
        files.forEach(function(file,index){
            var curPath = path + '/'+ file
            if(fs.statSync(curPath).isDirectory()) {
                deletAll(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path);
    }
}
console.log(path.resolve('E:/pgdemo/react/my-app/node_modules'))
deletAll(path.resolve('E:/pgdemo/react/my-app/node_modules'))
// var fs = require('fs'); // 引入fs模块
// function deleteall(path) {
//   var files = [];
//   if(fs.existsSync(path)) {
//     files = fs.readdirSync(path);
//     files.forEach(function(file, index) {
//       var curPath = path + "/" + file;
//       if(fs.statSync(curPath).isDirectory()) { // recurse
//         deleteall(curPath);
//       } else { // delete file
//         fs.unlinkSync(curPath);
//       }
//     });
//     fs.rmdirSync(path);
//   }
// };