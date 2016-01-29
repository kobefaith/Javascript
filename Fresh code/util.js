var util = require('util');

function Base(){
this.name = 'base';
this.base = 1991;
this.sayHello = function(){
console.log('Hello'+this.name);
};
}
Base.prototype.showName = function(){
console.log(this.name);
};
function Sub(){
this.name = 'sub';
}

var util = require('util');

function Person(){
    this.name = 'byvoid';
    this.toString = function(){
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));




