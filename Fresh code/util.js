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
