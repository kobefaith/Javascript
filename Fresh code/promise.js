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


function ajax(method,url,data){
    var request = new XMLHttpRequest();
    return new Promise(function(resolve,reject){
        request.onreadystatechange = function(){
            if(request.readyState === 4){
                if (request.readystate === 200){
                    resolve(request.responseText);
                }else{
                    reject(request.status);
                }
            }
        };
        request.open(method,url);
        request.send(data);
    });
}
var log = document.getElementById('test-promise-ajax-result');
var p = ajax('GET','/api/categories');
p.then(function (text){
    log.innerText = text;
}).catch(function (status){
    log.innerText = 'ERROR:' + status;
});


var p1 = new Promise(function (resolve,reject){
    setTimeout(resolve,500,'P1');
});
var p2 = new Promise(function(resolve,reject){
    setTimeout(resolve,600,'P2');
});
Promise.all([p1,p2]).then(function(results){
    console.log(results);
});

