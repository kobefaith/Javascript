Ajax跨域请求：
a.test.com 与b.test.com 之间进行通信的话，可以用iframe进行。
iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。
iframe可以在子域之间进行通信，比如上面两个就可以看做test.com的两个子域。
http://b.test.com/cross_sub_domain.html 利用这个页面做中间人，这个页面是b的域的页面，所以可以
与b域进行ajax通信，然后a域和这个中间人通过iframe进行通信，得到从b域得到的数据。
a.test.com 中
<iframe id="bfrm" style="display:none;" src="http://b.test.com/cross_sub_domain.html"></iframe>
<button class="btn-sm btn btn-primary" onclick="crossSubDomain();">跨子域请求</button>
<script>
function crossSubDomain() {
        document.domain = 'test.com'; // 提升域 关键操作
        window.frames['bfrm'].contentWindow.doAjax(function(data) {
            alert(data);
        });
    }
</script> 

http://b.test.com/cross_sub_domain.html 中
<script>
        document.domain = 'test.com';  //提升域 关键操作
        function doAjax(callback) {
            $.ajax('/test').done(function(data) {
                callback(data);//a域的回调函数可以得到b域的数据。
            });
        }

</script>
问题：
1、安全性，当一个站点（b.a.com）被攻击后，另一个站点（c.a.com）会引起安全漏洞。
2、如果一个页面中引入多个iframe，要想能够操作所有iframe，必须都得设置相同domain。
jsonp原理
本质上并不是ajax，只是执行了跨域的js
html中所有带src属性的标签都可以跨域script img iframe
所以，可以通过script加载其他域的一段动态脚本，这段脚本包含了想要的数据信息。
jsonp.html
<script>//index.js中返回的是调用callback函数的字符串，所以我们要定义一个叫callback的函数 来获取数据。
function callback(data){
    console.log(data);            
}
</script>
<script src="http://b.test.com/testjsonp"></script>

要返回数据的index.js中
var express = require('express');
var router = express.Router();
router.all('/testjsonp', function(req, res) {   //利用express响应testjsonp路由，然后返回一个回调函数，并将要传输的数据写入回调函数的参数。
    res.setHeader('Content-Type', 'application/javascript'); //callback({a:1,b:2});
    res.send('callback(' + JSON.stringify({a:1, b:2}) + ')');
});
动态生成JavaScript标签的做法：
<p>动态生成script</p>
<button class="btn btn-primary btn-sm" onclick="calltest();">调用测试</button>

function jsonp(url, data, callback) {
    var script = document.createElement('script');
    document.body.appendChild(script);

    data = data || {};
    data.callback = 'cb' + new Date().getTime();
    window[data.callback] = callback;

    url += '?' + $.param(data);

    script.src = url;
    script.onload = function () {
        document.body.removeChild(script);
    }
}

function calltest() {
    jsonp('http://b.test.com/testjsonp2', {test: 'ok'}, function (data) {
        console.log(data);
    });
}
router.all('/testjsonp2', function(req, res) {
    res.setHeader('Content-Type', 'application/javascript'); //cb123({a:1,b:2})
    res.send(req.query.callback + '(' + JSON.stringify({a:1, b:2}) + ')');
});
jquery 的getJSON方法 发起jsonp
<h3>jquery对jsonp的支持</h3>
<p>getJSON(url, data, callback);</p>
<button class="btn btn-primary btn-sm" onclick="testGetJson();">test getJSON</button>
function testGetJson() {
    $.getJSON('http://b.test.com/testjsonp2?callback=?', {test: 'ok'}, function(data) {  //url中必须有 函数名称（如 ?callback=?名称任意）否则就不会被认为是跨域的请求
       console.log(data);
    });
}
用jquery的ajax方法发起
<p>jsonp jsonpCallback 参数</p>
<button class="btn btn-primary btn-sm" onclick="testArgs();">test args</button>

function testArgs() {
    $.ajax('http://b.test.com/testjsonp3', {
        dataType: 'jsonp',
        jsonp: 'cbname',
        jsonpCallback: 'cbfun',
        cache: true,
        success: function(data) {
            console.log(data);
        }
    });
}

router.all('/testjsonp3', function(req, res) {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(req.query.cbname + '(' + JSON.stringify({a:1, b:2}) + ')');
});
jsonp的缺点：
只支持get方式
后端代码需要调整
CORS的实现
<h3>CORS原理</h3>

<p>xhr level2 支持的新标准，允许发起ajax请求</p>

<p>但是为了跨域安全，需要在服务器响应头部提供一些信息，供浏览器校验请求是否被允许</p>
<p><b>Access-Control-Allow-Origin</b></p>
<p><b>Access-Control-Allow-Methods</b></p>
<p><b>Access-Control-Allow-Headers</b></p>
<button class="btn btn-primary btn-sm" onclick="crossAjax();">CORS TEST</button>
<script>
function crossAjax() {
    $.ajax('http://b.test.com/test', {
        type: 'PUT',
        headers: {test: 'haha'}
    }).done(function(data) {
        alert(data);
    });
}
</script>

后端
router.all('/test', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://a.test.com');
    ////res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'test,other');

    res.send('ok');
});
CORS头信息通用设置方法
http://enable-cors.org/server.html
