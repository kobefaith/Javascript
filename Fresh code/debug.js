var a = 1;
var b = 'world';
var c = function(x){
console.log('hello'+x+a);
};
c(b);

console.log(process.argv);
process.stdin.resume();
process.stdin.on('data',function(data){
    process.stdout.write('read from console:'+data.toString());
})
function doSomethings(args,callback){
    somethingComplicated(args);
    callback();
}
dosomething(function onEnd(){
    compute();
});

function dosomething(args,callback){
    somethingComplicated(args);
    process.nextTrick(callback);
}
doSomething(function onEnd(){
    compute();
});