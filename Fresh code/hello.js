
/**
 * Created by zhoufei on 2016/1/14.
 */
'use strict'

function hello(){
    console.log('Hello,world!');
}
function add( a, b){
    return a + b;
}

module.exports = {
    hello:hello,
    add:add
};