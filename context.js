//2017.09.19
/* var pet = {
    words : '...',
    speak : function() {
        console.log(this.words);
        console.log(this === pet);
    }
}

pet.speak();    //speak为pet的方法，所以调用的时候要加()
*/

/* function pet(words) {
    this.words = words;     //这里的this并不是指pet的对象，而是指向顶层的全局变量
    //this 指向 global
    console.log(this.words);
    console.log(this);
    console.log(this === global);   //true
}

pet('...'); */

function Pet(words) {
    this.words = words,
    this.speak = function() {
        console.log(this.words);
        console.log(this);
    }
}

var cat = new Pet('Miao');  //实例化对象
//this指向当前对象的拥有者，我们把这个拥有者叫做执行上下文，如pet
cat.speak();    //这个时候打印的this就是Pet对象的成员。
/* result
E:\http\http_practice>node context.js
Miao
Pet { words: 'Miao', speak: [Function] }
*/