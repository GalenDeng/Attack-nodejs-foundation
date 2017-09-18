//2017.09.19
function Pet(words) {
    this.words = words,
    this.speak = function() {
        console.log(this.words);
    }
}

function Dog(words) {
    Pet.call(this,words) //把Pet当前的this指向Dog的对象this
    //Pet.apply(this,arguments)
}

var dog = new Dog('Wang');  //实例化对象

dog.speak();