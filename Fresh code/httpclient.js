var http = require('http');
var  querystring = require('querystring');

var contents = querystring.stringify({
name:'byvoid',
email:'byvoid@byvoid.com',
address:'zijing 2#,tsinghua university',
});
var options = {
host:'www.byvoid.com',
path:'/application/node/post.php',
method:'POST',
headers:{
'Content-Type':'application/x-www-form-urlencoded',
'Content-Length':content.length
}
};
var req = http.request(options,function(res){
res.setEncoding('utf8');
res.on('data',function(data){
console.log(data);
});
});
req.write(contents);
req.end();


var http = require('http');
http.get({host:'www.byvoid.com'},function(res){
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log(data);
    });
});


