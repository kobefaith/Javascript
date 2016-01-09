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

