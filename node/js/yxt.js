var fs = require('fs'); //文件模块
var path = require('path'); //系统路径模块

var obj = {
    "accountId": 0,
    "avgQtyYd": 0,
    "billDate": "2019-03-09T10:51:38.426Z",
    "daysToSell": 0,
    "downloadTime": "2019-03-09T10:51:38.426Z",
    "id": 0,
    "model": "string",
    "prodAmount": 0,
    "prodBarcode": "string",
    "prodCode": "string",
    "prodName": "string",
    "prodQuantity": 0,
    "prodSpec": "string",
    "prodUnit": "string",
    "stockAmount": 0,
    "stockQty": 0,
    "storeCode": "string",
    "storeName": "string",
    "subcode": "string",
    "supplier": "string",
    "supplierCode": "string",
    "supplierProdCode": "string",
    "updatedTime": "2019-03-09T10:51:38.426Z"
  }
  var arr = []
  for (const key in obj) {
      arr.push({
          "name": key,
          "title": obj[key]
      })
  }
  console.log(arr)
  var obj = $('.resource.active').eq(0).find('.description .propName')
  var obj2 = $('.resource.active').eq(0).find('.description .markdown p')
  var arr1 = []
  for (let index = 0; index < obj.length; index++) {
      arr1.push({
        "name": obj.eq(index).text(),
        "title": obj2.eq(index).text()
      })
  }
  console.log(arr1)
//把data对象转换为json格式字符串
var content = JSON.stringify(arr); 

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'data/test.json'); 

//写入文件
fs.writeFile(file, content, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功，地址：' + file);
});