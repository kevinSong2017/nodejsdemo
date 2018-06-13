var util=require('util')

function Base() {
    this.name='base';
    this.base=1991;
    this.sayHello=function () {
        console.log('Hello '+this.name)
    }
};
Base.prototype.shownamX=function(){
    console.log(this.name)
};

function Sub() {
    this.name='sub';
}

util.inherits(Sub,Base); //Sub 继承 Base的原型，通过结果可以知道 Sub仅仅只是继承了Base在原型中定义的函数，而构造函数内部创造的base属性
// 和sayHello函数都没有被继承，并且，在原型中定义的属性不会被console.log作为对象的属性输出

var objBase=new Base();
objBase.shownamX();
objBase.sayHello();
console.log(objBase);

console.log('*****************************************');

var  objSub=new Sub();
objSub.shownamX();
//objSub.sayHello();
console.log(objSub);