/**
 * Created by zhoufei on 2016/1/13.
 */
'use strict';
console.log('Hello,world');


var s = 'Hello';
function greet(name){
    console.log(s + ','+name + '!');
}
module.experts = greet;
var greet = require('./hello');
var s = 'Michael';

greet(s);
