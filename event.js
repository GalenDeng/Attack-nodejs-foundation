// events 事件驱动介绍 （2017.09.27）

var EventEmitter = require('events').EventEmitter //发射事件

var life = new EventEmitter()  //创建一个对象

life.setMaxListeners(11)       //设置监听的最大数目

function water(who) {
  console.log('给' + who + '倒水')
}

//addEventListener 监听

life.on('求安慰',function(who) {     //监听到事件到来，就执行回调函数
  console.log('给'+ who + '倒水')
})

life.emit('求安慰','汉子')            //发射事件
life.removeListener('求安慰',water)   //把倒水这个监听事件移除掉   移除单个事件
life.removeAllListeners()           //不田家庵参数的话，会把所有的事件都移除掉
life.removeAllListeners('求安慰')    //只删除所有求安慰的事件

//作用：查看一个事件是否被监听过,监听过则返回true 没有监听过则返回false
var hasConfortListen = life.emit('求安慰','汉子')  
console.log (hasConfortListen)
//var hasConfortListen = life.emit('求安慰',water)  

 //console.log(life.listeners('求安慰'))    //查询事件   运行结果：Function[ [Function] ]
 //两个参数 前者为：实例的名字 后者为：具体的事件
console.log(EventEmitter.listenerCount(life,'求安慰'.length))   //查询life的"求安慰"事件的个数 result = 1