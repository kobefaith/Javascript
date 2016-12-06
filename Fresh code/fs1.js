var fs = require('fs');
fs.readFile('content.txt',function(err,data){
if(err){
console.error(err);
}else{
console.log(data);
}
});

var fs = require('fs');
fs.open('content.txt','r',function(err,fd){
if(err){
console.error(err);
return;
}
var buf = new Buffer(8);
fs.read(fd,buf,0,8,null,function(err,bytesRead,buff){

if(err){
console.error(err);
return;
}
console.log('bytesRead:'+bytesRead);
console.log(buffer);
})
});