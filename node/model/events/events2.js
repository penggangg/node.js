var http = require('http')
var server = http.createServer()
var { EventEmitter } = require('events')
var callback = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write('hellow world2 哈哈2')
    res.end()
}
var callback1 = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write('hellow world2 哈哈22222')
    res.end()
}
server.on('request',callback )
// 移除绑定事件 必须指定移除的方法
// server.removeListener('request', callback)
// removeAllListeners 移除所有不需要指定函数
server.on('request',callback1 )

server.listen(2223, _=>{
    console.log('运行中。。。')
})
// 自己定事件
var events = new EventEmitter()
events.once('pgdemo',function(){
    console.log('123pgdemo1')
})
events.once('pgdemo',function(){
    console.log('123pgdemo2')
})
events.once('pgdemo',function(){
    console.log('123pgdemo3')
})
var num = EventEmitter.listenerCount(events, 'pgdemo');
console.log(num) // 在事件触发之前打印 则没被销毁因此 是3
// 手动触发 pgdemo 事件
events.emit('pgdemo')
// emitter.setMaxListeners(n)可以设置同一事件的监听器最大绑定数，默认情况下，超过10个就会警告提示，这能帮我们快速找到类存泄露的地方。显然，不是所有的事件触发器都限制在10个监听器，通过这个方法可以设置，如果设置为0就是无限制。
// 查看server绑定的'request'事件的监听器个数

// var num = EventEmitter.listenerCount(events, 'pgdemo');
// console.log(num)  这里因为绑定的once 所以执行完之后 就会被销毁了 因此打印的为0