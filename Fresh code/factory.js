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