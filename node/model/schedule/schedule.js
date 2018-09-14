var schedule = require('node-schedule');
// var date = new Date(2018, 8, 14, 18, 22, 0);
var data = '1 35 18 * * *'
// 具体规则参照 https://www.jianshu.com/p/d9797f1afdc8
 console.log(data)
var j = schedule.scheduleJob(data, function(){
 console.log('现在时间：',new Date());
});