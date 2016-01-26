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