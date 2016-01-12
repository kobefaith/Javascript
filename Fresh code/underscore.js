/**
 * Created by zhoufei on 2016/1/9.
 */
_.map({a:1,b:2,c:3},(v,k)=> k+ '=' +v);
_.map([1,2,3],(x) => x*x);
_.every([1,4,7,-3,-9],(x) => x> 0);
_.some([1,4,7,-3,-9],(x) => x > 0);

var upper = _.map(obj,function (value,key){
    return key.toUpperCase();
});

var upper = _.mapObject(obj,function (value,key){
    return key.toUpperCase();
});
var obj = {
    name:'bob',
    school:'No.1 middle school',
    address:'xueyuan road'
};
var r1 = _.every(obj,function (value,key){
    return key === key.toLowerCase();
});

var r2 = _.some(obj,function (value,key){
    return key === key.toLowerCase();
});

var arr = [3,5,7,9];
_.max(arr);
_.min(arr);
_.max({a:1,b:2,c:3});

var scores = [20,81,75,40,91,59,77,66,72,88,99];
var groups = _.groupBy(scores,function (x){
    if (x < 60){
        return 'C';
    }else if(x < 80){
        return 'B';
    } else{
        return 'A';
    }
});

_.shuffle([1,2,3,4,5,6]);
_.sample([1,2,3,4,5,6]);
_.sample([1,2,3,4,5,6],3);

var arr = [2,4,6,8];
_.first(arr);
_.last(arr);

_.flatten([1,[2],[3],[[4],[5]]]);

var names = ['Adam','Lisa','Bart'];
var scores = [86,93,58];
_.zip(names,scores);

var namesAndSores = [['Adam',85],['Lisa',92],['bart',59]];
_unzip(namesAndScores);

var names = ['Adam','Lisa','Bart'];
var scores = [85,92,59];
_object(names,scores);

_.range(10);

_.range(1,11);
_.range(0,30,5);
_.range(0,-10,-1);


function Student(name,age){
    this.name = name;
    this.age = age;
}
var xiaoming = new Student('xiaoming',20);
_.keys(xiaoming);

Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('xiaoming',20);
_.allkeys(xiaoming);
var obj = {
    name:'xiaoming',
    age:20
};
_.values(obj);
var obj = {a:1,b:2,c:3};
_.mapObject(obj,(v,k)=>100+v);
var obj = {
    adam:90,
    lisa:85,
    bart:59
};
_.invert(obj);
var a = {name:'bob',age:20};
_.extend(a,{age:15},{age:88,city:'beijing'});

var source = {
    name:'xiaoming',
    age:20,
    skills:['javascript','css','html']
};
var copied = _.clone(source);
var o1 = {name:'bob',skills:{java:90,javascript:99}};
var o2 = {name:'bob',skills:{javascript:99,java:90}};
o1 === o2;
_isEqual(o1,o2);


console.log('Hello,world');
var log = console.log;
log('Hello world!');

var log = console.log;
log.call(console,'Hello,world');

var log = _.bind(console.log,console);
log('hello,world');

var pow2N = _.partial(Math.pow,2);
pow2N(3);

var cube = _.partial(Math.pow,_,3);
cube(3);

function factorial(n){
    console.log('start calculate' +n +'!...');
    var s= 1,i = n;
    while (i > 1){
        s = s * i;
        i--;
    }
    console.log(n + '!='+s);
    return s;
}
factorial(10);


var factorial = _.memoize(function(n){
    console.log('start calculate '+n + '!...');
    var s = 1,i = n;
    while (i > 1){
        s = s * i;
        i--;
    }
    console.log(n + '!='+s);
    return s;
});

var factorial = _.memoize(function(n){
    console.log('start calculate' +n + '!...');
    if (n < 2){
        return 1;
    }
    return n * factorial(n-1);
});

var register = _.once(function (){
    alert('Register ok!');
});


_.delay(alert,2000);

var log = _.bind(console.log,console);
_.delay(log,2000,'hello,','world!');
