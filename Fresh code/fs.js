'use strict';
var fs = require('fs');
fs.readFile('sample.txt','utf-8',function(err,data){
if(err){
console.log(err);
}else{
console.log(data);
}
});

var fs = require('fs');

fs.readFile('sample.png',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
    }
});

var buf = new Buffer(text,'utf-8');
console.log(buf);

var text = data.toString('urf-8');
console.log(text);

var fs = require('fs');

fs.stat('sample.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log('isFile:'+stat.isFile());
        console.log('isDirectory:'+stat.isDirectory());
        if(stat.isFile()){
            console.log('size:'+stat.size);
            console.log('birth time:'+stat.birthtime);
            console.log('modified time:'+stat.mtime);
        }
    }
});


