/**
 * Created by zhoufei on 2015/12/21.
 */
function test(resolve,reject){
    var timeOut = Math.random()*2;
    log('set timeout :' + timeOut + 'seconds.');
    setTimeout(function (){
        if (timeOut &lt; 1){
            log('call resolve()...');
            resolve('200 OK');
        }
        else{
            log('call reject()...');
            reject('timeout in '+ timeOut + 'seconds.');
        }
    },timeOut * 1000);
}
var p1 = new Promise(test);
var p2 = p1.then(function(result){
    console.log('成功：'+result);
});
var p3 = p2.catch(function (reason){
    console.log('失败：'+ reason);
});


new Promise(test).then(function (result){
    console.log('成功：'+ result);
}).catch(function (reason){
    console.log('失败：' + reason);
});