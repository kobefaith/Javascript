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
