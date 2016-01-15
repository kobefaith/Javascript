console.log('current js file '+__filename);
console.log('current js dir:'+__dirname);
process.name = 'sample nodejs';
console.log('arguments:'+JSON.stringify(process.argv));
console.log('cwd'+process.cwd());
process.chdir('/private/tmp');
console.log('cmd:'+process.cwd());

process.nextTick(function(){
console.log('nextTick callback!');
});
console.log('next tick was set!');

process.on('exit',function (code){
console.log('about to exit with code:'+code);
});