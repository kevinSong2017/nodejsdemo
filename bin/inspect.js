var util =require('util')

function Person() {
    this.name='Kevin'
    this.toString=function () {
        return this.name;
    }
}

var obj=new Person();

console.log("***********************************************************************************************")
console.log(util.inspect(obj))
console.log("***********************************************************************************************")
console.log(util.inspect(obj,true));
console.log("***********************************************************************************************")
console.log(util.inspect(obj,true,true));
console.log("***********************************************************************************************")
console.log(util.inspect(obj,true,true,true));