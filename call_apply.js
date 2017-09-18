//2017.09.19
var pet = {
    words : '...',
    speak : function(say) {
        console.log(say + ' ' + this.words);
    }
}

//pet.speak('speak');

var dog = {
    words : 'Wang'
}
/*
1、方法定义
call方法: 
语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
定义：调用一个对象的一个方法，以另一个对象替换当前对象。 
说明： 
call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。
*/
//使用speak的方法，但用dog的对象替代pet对象，'Speak'为输入参数 方便实现继承
/*result 
E:\http\http_practice>node call_apply.js
Speak Wang
*/
pet.speak.call(dog,'Speak');