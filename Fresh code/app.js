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


