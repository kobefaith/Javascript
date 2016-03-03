function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}
var person1 = createPerson("Nocholas",29,"software engineer");
var person2 = createPerson("Greg",27,"Doctor");

var fs = require('fs');
var files = ['a.txt','b.txt','c.txt'];

for(var i = 0; i < files.length; i++){
    fs.readFile(files[i],'utf-8',function(err,contents){
        console.log(files[i] + ':' + contents);
    });
}

var fs = require('fs');
var files = ['a.txt','b.txt','c.txt'];

files.forEach(function(filename){
    fs.readFile(filename,'utf-8',function(err,contents){
        console.log(filename + ':' + contents);
    });
});


var fs = require('fs');
var accessLogfile = fs.createWriteStream('access.log',{flags:'a'});
var errorLogfile = fs.createwriteStream('error.log',{flags:'a'});

app.use(express.logger({stream:accessLogfile}));
app.configure('production',function(){
    app.error(function(err,req,res,next){
        var meta = '[' + new Date() + ']' + req.url +'\n';
        errorLogfile.write(meta + err.stack + '\n');
        next();
    });
});

if(! module.parent){
    app.listen(3000);
    console.log("Express server listening on port!");
}



server{
    listen 80;
    server_name mysite.com;
    
    location / {
        proxy_pass http://localhost:3000;
    }
}

