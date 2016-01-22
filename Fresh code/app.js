var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text.html'});
res.write('<h1>Node.js</h1>');
res.end('<p>hello world</p>');
}).listen(3000);
console.log("Http server is listening at port 3000.");

var fs = require('fs');

fs.readFile('file.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
}) ;
console.log('end');


var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
event.on('some_event',function(){
    console.log('some_event occured.');
});
setTimeout(function(){
    event.emit('some_event');
},1000);

var name ;
exports.setName = function(thyName){
    name = thyName;
};

exports.sayHello = function(){
    console.log('Hello'+name);
};
var myModule = require('./module');
myModule.setName('BYVoid');
myModule.sayHello();


    



