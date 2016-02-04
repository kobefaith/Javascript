var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write('<h1>Node.js</h1>');
res.end('<p>Hello world</p>');
}).listen(3000);
console.log("Http server is listening at port 3000.");


var http = require('http');
var server = new http.Server();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello world</p>');
});
server.listen(3000);
console.log("Http server is listening at port 3000.");


var http = require('http');
var url = require('url');
vat util = require('util');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);

var http = require('http');
var querystring = require('querystring');
var util = require('util');
http.createServer(function(req,res){
  var post = '';
req.on('data',function(chunk){
    post += chunk;
}) ; 
req.on('end',function(){
    post = querystring.parse(post);
    res.end(util.inspect(post));
});
}).listen(3000);



