匹配邮箱的正则表达式
var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:'1', b:'2', c:'', d:'xxx', e:undefined}。
function serilizeUrl(url) {
    var result = {};
    url = url.split("?")[1];
    var map = url.split("&");
    for(var i = 0, len = map.length; i < len; i++) {
        result[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    return result;
}
把两个数组合并，并删除第二个元素。
<span style="font-family: verdana, geneva;">var array1 = ['a','b','c'];
var bArray = ['d','e','f'];
var cArray = array1.concat(bArray);
cArray.splice(1,1); 
</span>
cArray.slice(1,1); //有两个参数，该方法返回开始和结束位置之间的项，但不包含结束位置的项。只有一个参数的情况下，返回从该参数指定位置开始到数组末尾的所有项
cArray.splice(1,1);//删除第二项，要删除的第一项的位置和项数，就可以删除指定的项。
cArray.splice(2,0,"z","x");//从第二项开始 删除0项，然后插入 z  x 两项。
cArray.splice(2,1,"z","x");//从第二项开始 删除1项然后插入 z x 两项
15.将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成10，{$name}替换成Tony （使用正则表达式）

答案："<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>".replace(/{\$id}/g, '10').replace(/{\$name}/g, ‘Tony’);
输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
<span style="font-family: verdana, geneva;">var d = new Date();
// 获取年，getFullYear()返回4位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0是1月，11是12月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? '0' + month : month;
// 获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);
</span>    
12.已知数组var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu Campus”。

答案：alert(stringArray.join(" "))
已知有字符串foo="get-element-by-id",写一个function将其转化成驼峰表示法"getElementById"。
<span style="font-family: verdana, geneva;">function combo(msg){
    var arr = msg.split("-");
    var len = arr.length;    //将arr.length存储在一个局部变量可以提高for循环效率
    for(var i=1;i<len;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
    }
    msg=arr.join("");
    return msg;
}</span>
看下面的代码，输出什么，foo的类型为什么？    
<span style="font-family: verdana, geneva;">var foo = "11"+2-"1";//如果一个操作符是字符串或bool型，则-的时候会将字符型转化为数字运算
console.log(foo);
console.log(typeof foo);</span>
执行完后foo的值为111，foo的类型为Number。
<span style="font-family: verdana, geneva;">var foo = "11"+2+"1";    //体会加一个字符串'1' 和 减去一个字符串'1'的不同
console.log(foo);
console.log(typeof foo);</span>
执行完后foo的值为1121(此处是字符串拼接)，foo的类型为String。
看下列代码,输出什么？解释原因。
<span style="font-family: verdana, geneva;">var undefined;
undefined == null; // true
1 == true;   // true
2 == true;   // false
0 == false;  // true
0 == '';     // true
NaN == NaN;  // false
[] == false; // true
[] == ![];   // true</span>

var numberArray = [3,6,2,4,1,5]; （考察基础API）
1) 实现对该数组的倒排，输出[5,1,4,2,6,3]
2) 实现对该数组的降序排列，输出[6,5,4,3,2,1]
<span style="font-family: verdana, geneva;">var numberArray = [3,6,2,4,1,5];
numberArray.reverse(); // 5,1,4,2,6,3
numberArray.sort(function(a,b){  //6,5,4,3,2,1
   return b-a;
})
</span>
<p>i = 10,j = 10;i+j = ?</p>
<p id="sumid"></p>
<button onclick="mysum()">结果</button>
<script>
   function mysum(){
       var i = 10;
       var j = 10;
       var m = i + j;
       document.getElementById("sumid").innerHTML=m;
   }
</script>
任何类型和字符串类型相加都会转化成字符串类型。
var i = "10";
var j = 10;
document.write(i==j);//true
    
var i = "10";
var j = 10;
document.write(i===j);//false ===必须满足类型也相等

var i = [1,2,3,4,5,6];
var j;
   for(j in i){
       document.write(i[j]+"<br/>");
   }
var i = 1;
   while(i<10){
       document.write("i="+i+"<br/>");
       i++;
   }
<form>
    <input id="txt" type="text">
    <input id="btn" type="button" onclick="demo()" value="按钮">
</form>
<script>
   function demo(){
       try{
          var e = document.getElementById("txt").value;
          if(e==""){
             throw "请输入"；
          }
       }catch(err){
           alert(err);
       }   
   }    
</script>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<div class="div" onmouseout="onOut(this)" onmouseover="onOver(this)"></div>
<script>
       function onOver(ooj){
         ooj.innerHTML = "Hello";  
       }
       function onOut(ooj){
           ooj.innerHTML = "World";
       }
</script>
<form>
    <input type="text" onchange="alert('hello ')">
    <input type="text" onselect="changeDemo(this)">
</form>
<script>
       function changeDemo(bg){
         bg.style.background="red";
       }       
</script>
onClick     单击事件
onMouseOver 鼠标经过事件
onMouseOut  鼠标移出事件
onChange    文本内容改变事件
onSelect    文本框选中事件
onFocus     光标聚集事件
onBlur      移开光标事件
onLoad      网页加载事件
onUnload    关闭网页事件
DOM操作HTML
1.改变HTML输出流。
不能在文档加载完成后使用document.write()。这会覆盖该文档。
document.getElementsByTagName("p")//如果有多个p元素，会寻找到第一个。
<a id="aid" href="http://www.baidu.com">Hello</a>
<button onclick="demo()">按钮</button>
<script>
       function demo(){
           document.getElementById("aid").href="http://www.jikexueyuan.com";   //直接修改html的属性
       }
</script>
DOM改变CSS
document.getElementById(id).style.property=new style;
document.getElementById("div").style.background="blue";
DOM 的事件句柄
addEventListener()用于向指定元素添加事件句柄
removeEventListener()移除方法添加的事件句柄

<button id="btn">按钮</button> //此处不用为onclick事件绑定函数，避免了函数改名后 需要修改代码重新绑定的问题。另外，可以对一个元素添加多个事件。
<script>
    document.getElementById("btn").addEventListener("click",function (){
        alert("hello");
    });
</script>
利用事件句柄可以为元素添加多个事件
<script>
    var x = document.getElementById("btn");
    x.addEventListener("click",hello);
    x.addEventListener("click",world);
    //x.removeEventListener("click",hello);
    function hello(){
        alert("Hello");
    }
    function world(){
        alert("world");
    }
      
</script>
    
JS内置对象：
两种创建对象的方法：
people = new Object();
people.name = "iwen";
people.age = "30";

    function people(name,age){
        this.name = name;
        this.age = age;
    }
    son = new people("kobe",37);
    document.write("name:"+son.name+",age"+son.age);
字符串对象
var str = "hello world";
document.write(str.length);
document.write(str.indexOf("world"));
document.write(str.lastindexOf("o")); 7
document.write(str.match("world"));
document.write(str.replace("world","jikexueyuan"));
document.write(str.toUpperCase());
var str1 = "hello, world, xueyuan";
var s = str1.split(",");
document.write(s[1]);//world
var stringvalue = "hello world";
alert(stringvalue.charAt(1));//e

var stringvalue = "hello";
var result = stringvalue.concat("world");

var stringvalue = "hello world";
alert(stringvalue.slice(3));//lo world

stringvalue.trim()删除字符串前后的空格
stringvalue.toLowerCase()转换为小写
stringvalue.toUpperCase()转换为大写
日期对象
var date = new Date();
document.write(date);
document.write(date.getFullYear());//获取年份
document.write(date.getTime());//获取毫秒数
date.setFullYear(2010,1,1);//修改年份
document.write(date);
document.write(date.getDay());//获取星期
date.getHours()
date.getMinutes();
date.getSeconds();
数组对象
var a = ["hello"];
var b = ["world"];
var c = a.concat(b);
var d = ["2","4","6","1"];
d.sort();
a.push("a");
a.reverse();
Math对象
Math.round(2.4)//四舍五入。
Math.random()//产生0到1之间的随机数。
parseInt(Math.random()*10)//转化成从0到10的值
Math.max()
Math.min();
Math.abs();
JS 浏览器对象
window对象
所有的js的全局对象、函数以及变量均自动成为window对象的成员。
HTML DOM的document也是window对象的属性之一
window.innerHeight 浏览器内部窗口的高度 不包含导航栏
window.innerWidth  浏览器内部窗口的宽度  不包含滚动条
    function btnClicked(){
        window.open("index.html","windowname",
            "height=200,width=200,
             top = 100, left = 100,
             toolbar = no,menubar = no
             "
        )
    }
计时器
    setInterval()间隔指定的毫秒数不停地执行指定的代码。
    setTimeout()暂停指定的毫秒数后执行指定的代码。
    <p id="ptime"></p>
<script>
    var mytime = setInterval(function(){
        getTime();
    },1000);
    function getTime(){
        var d = new Date();
        var t = d.toLocaleTimeString();//打印时分秒。
        document.getElementById("ptime").innerHTML=t;
    }
    function stopTime(){
        clearInterval(mytime);
    }
    
    var win;
    function myWin(){
        win = setTimeout(function(){alert("hello");},3000);
    }
    function stopWin(){
        clearTimeout(win);
    }    
    </script>
history对象
window.history对象包含浏览器的历史url的集合
history.back()与浏览器中点击后退按钮相同
history.forward()与浏览器中点击向前按钮相同
history.go()进入某个历史页面
history.go("wrox.com");
history.go(-1);后退一页
history.go(2);前进两页
<button id="btn" onclick="go()">按钮</button>
<script>
    function go(){
        history.forward();
    }
</script>
<form>
  <input type="text" id="username">
</form>
<button id="btn" onclick="safe">按钮</button>
<script>
    function safe(){
        var name = document.getElementById("username").value;
        if(name=="hello"){
            history.go(-1);
        }else{
            alert("输入错误");
        }
    }
</script>
Location对象
用于获得当前页面的地址url，并把浏览器重定向到新的页面。
location.hostname  返回web主机的域名
location.pathname  返回当前页面的路径和文件名
location.port      返回web主机的端口
location.protocol  返回所使用的协议
location.href      返回当前页面的url
location.assign() 加载新的文档
location.search() 返回URL的查询字符串。这个字符串以问号开头 "?q=javascript"
<script>
        function getLoc(){
            document.getElementById("ptime").innerHTML=window.location.pathname;
        }
        function getLoc(){
            location.assign("http://www.jikexueyuan.com");
        }
</script>
http://cn.bing.com/search?q=nba&qs=n&form=QBRE&pq=nba&sc=8-3&sp=-1&sk=&cvid=2044A37DAFCE48DBB483168BA8F2C96F
如果想处理以上的URL，从中提取出参数，可用如下程序：
function getQuerySringArgs(){
    var qs = (location.search.length >0 ?location.search.substring(1):""),
    args = {},
    items = qs.length ? qs.split("&"):[],
    item = null,
    name = null,
    value = null,
    i = 0,
    len = items.length;
    for(i = 0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if( name.length){
            args[name] = value;
        }
    }
    return args;
}
navigator对象
可以用来识别客户端浏览器。
appName  完整浏览器名称
cookieEnabled  表示cookie是否启用
onLine   表示浏览器是否连接到了互联网
plugins 浏览器中安装的插件信息的数组
在非IE浏览器中检测是否安装了特定插件的程序如下：
function hasPlugin(name){
    name = name.toLowerCase();
    for (var i = 0; i < navigator.plugins.length; i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}
alert(hasPlugin("Flash"));
alert(hasPlugin("QuickTime"));
<script>
screen对象
<script>
    document.write("可用高度"+screen.availHeight+"，可用宽度"+screen.availWidth);
    document.write("高度"+screen.height+"，宽度"+screen.width);
</script>
JS 事件流：
事件冒泡：
由具体的元素接受，然后逐级向上传播至最不具体的元素的节点(文档)，浏览器兼容性最后
事件捕获：
最不具体的节点先接受事件，而最具体的节点应该是最后接受事件。
Js事件的处理
DOM0级事件处理
<script>
    var btn1 = document.getElementById("btn1");
    btn1.onclick = function(){alert("DOM0级事件处理程序1");}//坏处是会被后面的覆盖掉。
    btn1.onclick = function(){alert("DOM0级事件处理程序2");}
</script>
DOM2级事件处理
script>
    var btn1 = document.getElementById("btn1").addEventListener("click",demo);
    function demo(){
        alert("DOM2级事件处理程序");
    })    
</script>
为兼容各种浏览器：
<script>
   var btn1 = document.getElementById("btn1");
   if(btn1.addEventListener){
       btn1.addEventListener("click",demo);
   }else if(btn1.attachEvent){
       btn1.attachEvent("onclick",demo);
   }else{
       btn1.onclick = demo;
   }
   function demo(){
       alert("Hello");
   }
</script>
DOM2级方法是指用addEventListener方法添加事件处理的方法。
使用DOM2级方法添加事件处理程序的主要好处是可以添加多个事件处理程序。
所添加的事件处理程序会按照添加它们的顺序触发。
btn1.addEventListener("click",demo，false);//false是指将事件处理程序添加到事件流的冒泡阶段，true是捕获阶段
这样可以最大限度地兼容各种浏览器。

IE 和opera中使用attachEvent("onclick",handler)来添加事件处理函数，
可以为一个事件绑定多个处理函数，但是执行顺序不是添加顺序，而是相反的顺序。    
事件对象
在触发DOM事件的时候都会产生一个对象。
事件对象event：
type:获取事件类型
target：获取事件目标
stopPropagation():阻止事件冒泡
preventDefault()：阻止事件默认行为
<div id="div">
     <button id="btn1">按钮</button>
     <a href="http://www.jikexueyuan.com" id="aid">极客学院</a>
</div>
<script>
   document.getElementById("btn1").addEventListener("click",showType);
   document.getElementById("div").addEventListener("click",showDiv);
   document.getElementById("aid").addEventListener("click",showA);
   function showType(event){
       alert(event.type);
       alert(event.target);
       event.stopPropagation();//阻止事件冒泡，也就是只有button元素能收到事件，div元素不能收到事件
   }
   function showDiv(){
       alert("div");
   }
   function showA(event){
       event.stopPropagation();
       event.preventDefault();//阻止<a>元素的跳转功能。
   }
</script>
JS DOM 对象控制html
getElementsByName()  获取name
getElementsByTagName()获取元素
getAttribute()         获取元素属性
setAttribute()       设置元素属性
childNodes()        访问子节点
parentNode()        访问父节点
createElement()     创建元素节点
createTextNode()    创建文本节点
insertBefore()      插入节点
removeChild()       删除节点
offsetHeight        网页尺寸
scrollHeight        网页尺寸
<p name="pn">Hello</p>
<p name="pn">Hello</p>
<p name="pn">Hello</p>
<p name="pn">Hello</p>
<a id="aid" title="a标签的属性">hello</a>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<div id="div">
    <p id="pid">div的p元素</p>    
</div>
<script>
   function getName(){
       var count = document.getElementsByName("pn");//var count = document.getElementsByTagName("p");两种方法效果相同
       alert(count.length);//4
       var p = count[2];//通过下标访问
       p.innerHTML = "world";
   }
   getName();
   function getAttr(){
       var anode = document.getElementById("aid");
       var attr = anode.getAttribute("id");
       alert(attr);
   }
   getAttr();
   function getChildNode(){
       var childnode = document.getElementsByTagName("ul")[0].childNodes;
       alert(childnode.length);//7  因为空格也算一个 <ul>  <li>后面的空格
       alert(childnode[0].nodeType);
   }
   function getParentNode(){
       var div = document.getElementById("pid");
       alert(div.parentNode.nodeName);
   }
   getParentNode();
   function createNode(){
       var body = document.body;
       var input = document.createElement("input");
       input.type = "button";
       input.value = "按钮";
       body.appendChild(input);
   }
   createNode();
   function addNode(){
       var div = document.getElementById("div");
       var node = document.getElementById("pid");
       var newnode = document.createElement("p");
       newnode.innerHTML = "动态添加第一个p元素"；
       div.insertBefore(newnode,node);
   }
   addNode();
   function removeNode(){
       var div = document.getElementById("div");
       var p = div.removeChild(div.childNodes[1]);
   }
   removeNode();
   function getSize(){
       var width = document.documentElement.offsetWidth || document.body.offsetWidth;//为了兼容浏览器。
       var height = document.documentElement.offsetHeight;
       alert(width+" , "+height);
   }
</script>
JS面向对象
function Person(){
    
}
Person.prototype={
    name:"iwen",
    age:"30",
    eat:function(){
        alert("我在吃");
    }
}
var p=new Person();
===================================
function People(){
    
}
People.prototype.say = function(){
    alert("hello");
}
function Student(){
    
}
Student.prototype = new People();
Student.protype.say = function(){
    alert("stu-hello");
}
var s = new Student();
s.say();
闭包
(function (){
    var n = "ime";
    function People(name){
        this.name = name;
    }
    People.prototype.say = function(){
        alert("peo-hello"+this.name);
    }
    window.People = People;
}());
this http://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/

function Person(){
    var _this = {};
    _this.sayHello = function(){
        alert("Hello");
    }
    return _this;
}
function Teacher(){
    var _this = Person();
    return _this;
}
var t = Teacher();
t.sayHello();
JS作用域
JS是函数级作用域，在函数内的变量都能被函数访问到。外部不能访问内部的，内部能访问外部的。
var j = 100;
~(function test(){
    console.log(j);
})();   //经典面试题  如果不加~会报错。~是把后面的语句当成一个表达式来立即执行。

var j = 100;
function test(){
    alert(j);
    var j;
}//输出undefined 因为后面声明的j声明会被前置，但是赋值不会前置。
谁调this  this就指向谁
window.m=100;
function test(){
    alert(this.m);
}
window.test();//window调用this 所以this的m是window的

this.m = 1000;
var obj={
    m:100,
    test:function(){
        alert(this.m);
    }
}
obj.test();//obj调用this  所以 this 指向obj ，然后alert中的m就是100.
this.a=1000;
function test(){
    this.a = 1;
}
test.prototype.geta=function(){
    return this.a;
}
var p=new test;
console.log(p.geta());//1
构造函数中的this绑定的是对象
按引用传递
function test(obj){
    obj.age="20";
    console.log('inner',obj);
}
var obj={
    name:"xiaoming"
}
test(obj);
console.log('outer',obj);
两个输出是一样的 都有age，这是按引用传递
js中的Object Array Date RegExp Function 等都是引用类型
按值传递的是string  number  boolen等类型。


http://www.jikexueyuan.com/course/208.html    
http://www.jikexueyuan.com/course/196.html
http://www.jikexueyuan.com/course/207.html
http://www.jikexueyuan.com/course/210.html

http://www.jikexueyuan.com/course/180.html    
    
http://www.jikexueyuan.com/course/1272.html
http://www.jikexueyuan.com/course/1313.html    
http://www.jikexueyuan.com/course/2038.html   
http://www.jikexueyuan.com/course/2209.html    
http://www.jikexueyuan.com/course/1774.html   
http://www.jikexueyuan.com/course/2224.html    
jquery
http://www.jikexueyuan.com/course/245.html
初级前端面试题
http://www.zhufengpeixun.cn/JavaScriptmianshiti/2014-02-25/249.html
中级前端面试题
http://jingyan.baidu.com/article/546ae185643bc01148f28c4b.html
https://segmentfault.com/a/1190000002627927
创建对象
1.工厂模式
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
       alert(this.name);
    }
    return o;
}
var person1 = createPerson("tim",37,"powerforward")
var person2 = createPerson("park",30,"gard")

2.构造函数模式

function Person(name,age,job){
    this.name  = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };
}
var person1 = new Person("tim",37,"PF");
var person2 = new Person("park",30,"PG");
与工厂模式的不同
没有显示地创建对象；
直接将属性和方法赋给了this对象；
没有return 语句。

构造函数的问题：
每个方法都要在每个实例上重新创建一遍。

原型模式来解决这个问题：
创建的每一个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，这个对象的用途是包含可以由
特定类型的所有实例共享的属性和方法。
function Person(){
    Person.prototype.name = "tim";
    Person.prototype.age = 30;
    Person.prototype.job = "player";
    Person.prototype.sayName = function(){
        alert(this.name);
    };
}
var person1 = new Person();
var person2 = new Person();

alert(person1.sayName == person2.sayName);//true;

同步 异步  阻塞 非阻塞
http://blog.csdn.net/historyasamirror/article/details/5778378   
 
浏览器渲染网页的过程：
1.解析html（HTML parser）
2.构建DOM树（DOM tree）
3.渲染树构建（render tree）
4.绘制渲染树（painting）   
JS的继承
所有引用类型默认都继承了object
原型链继承
function SuperType(){
    this.property = true;        
}
SuperType.prototype.getSuperValue = function (){
    return this.property;
};
function SubType(){
    this.subproperty = false;
}
SubType.prototype = new SuperType();
原型链继承的问题在于1 所有的子类对象都会共享同样的父类属性和函数，2 不能向父类的构造函数传递参数。
实践中很少会单独使用原型链。
借用构造函数继承
function SuperType(){
    this.colors = ["red","blue","green"];    
}
function SubType(){
    SuperType.call(this); //继承了SuperType;
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);//"red","blue","green","black"
 
var instance2 = new SubType();
alert(instance2.colors);//"red","blue","green"

向父类的构造函数传递参数：
function SuperType(name){
    this.name = name;
}
function SubType(){
    SuperType.call(this，"tim"); //继承了SuperType;
    this.age = 30;
}
借用构造函数继承的问题是方法都在构造函数中定义，子类对象之间无法共享方法。而且在超类型的原型中定义的方法，
对子类型而言也是不可见的。所以借用构造函数的方法也是很少单独使用的。
组合继承 ：
是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。
背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
function SuperType(name){
    this.colors = ["red","blue","green"];   
    this.name = name;
}
SuperType.prototype.sayName = function (){
    alert(this.name);
};
function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
    alert(this.name);
};
var instance1 = new SubType("tim",20);
instance1.colors.push("black");
alert(instance1.colors);//"red","blue","green","black"
instance1.sayName();tim
instance1.sayAge();20

var instance2 = new SubType("kobe",37);
alert(instance2.colors);//"red","blue","green"
instance1.sayName();kobe
instance1.sayAge();37
原型式继承
var person = {
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};
var anotherPerson1 = Object.create(person);
anotherPerson1.name = "Greg";
anotherPerson1.friends.push("Rob");

var anotherPerson2 = Object.create(person);
anotherPerson2.name = "Linda";
anotherPerson2.friends.push("Barbie");

alert(person.friends);//Shelby,Court,Van,Rob,Barbie

寄生式继承
function createAnother(original){
    var clone = object(original);
    clone.sayHi = function(){
        alert("hi");
    };
    return clone;
}

var person = {
    name:"kobe",
    friends:["fisher","warton","gasol"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();//hi
寄生组合继承
function inheritPrototype(subType,superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
inheritPrototype(SubType,SuperType);
SubType.prototype.sayAge = function(){
    alert(this.age);
}   
JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array：
function foo(x) {
    alert(x); // 10
    for (var i=0; i<arguments.length; i++) {
        alert(arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
另一个与apply()类似的方法是call()，唯一区别是：
apply()把参数打包成Array再传入；
call()把参数按顺序传入。   
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。
它采用异步方式加载模块，模块的加载不影响它后面语句的运行。
所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
require([module], callback);
第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：
require(['math'], function (math) {
　　math.add(2, 3);
});
math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。
目前，主要有两个Javascript库实现了AMD规范：require.js和curl.js。
网页加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；
由于js文件之间存在依赖关系，因此必须严格保证加载顺序（比如上例的1.js要在2.js的前面），依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。
require.js的作用
（1）实现js文件的异步加载，避免网页失去响应；
（2）管理模块之间的依赖性，便于代码的编写和维护。
require.js加载
<script src="js/require.js"></script>
有人可能会想到，加载这个文件，也可能造成网页失去响应。解决办法有两个，一个是把它放在网页底部加载，另一个是写成下面这样：
<script src="js/require.js" defer async="true" ></script>  async属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持defer，所以把defer也写上。
加载require.js以后，下一步就要加载我们自己的代码了。假定我们自己的代码文件是main.js，也放在js目录下面。那么，只需要写成下面这样就行了：
<script src="js/require.js" data-main="js/main"></script>
data-main属性的作用是，指定网页程序的主模块。在上例中，就是js目录下面的main.js，这个文件会第一个被require.js加载。由于require.js默认的文件后缀名是js，所以可以把main.js简写成main。
上一节的main.js，我把它称为"主模块"，意思是整个网页的入口代码。它有点像C语言的main()函数，所有代码都从这儿开始运行。
下面就来看，怎么写main.js。
假定主模块依赖jquery、underscore和backbone这三个模块，main.js就可以这样写：
require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
　　// some code here
});
使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
require.config({
　　　paths: {
　　　　　"jquery": "jquery.min",
　　　　　"underscore": "underscore.min",
　　　　　"backbone": "backbone.min"
　　　}
}); 
上面的代码给出了三个模块的文件名，路径默认与main.js在同一个目录（js子目录）。
如果这些模块在其他目录，比如js/lib目录，则有两种写法。一种是逐一指定路径。
require.config({
　　paths: {
　　　　"jquery": "lib/jquery.min",
　　　　"underscore": "lib/underscore.min",
　　　　"backbone": "lib/backbone.min"
　　}
});
另一种则是直接改变基目录（baseUrl）。
require.config({
　　baseUrl: "js/lib",
　　paths: {
　　　　"jquery": "jquery.min",
　　　　"underscore": "underscore.min",
　　　　"backbone": "backbone.min"
　　}
});
require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。
具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，
那么可以直接定义在define()函数之中。
假定现在有一个math.js文件，它定义了一个math模块。那么，math.js就要这样写：
// math.js
define(function (){
　　var add = function (x,y){
　　　　return x+y;
　　};
　　return {
　　　　add: add
　　};
});
加载方法如下：
// main.js
require(['math'], function (math){
　　alert(math.add(1,1));
});
如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。
define(['myLib'], function(myLib){
　　function foo(){
　　　　myLib.doSomething();
　　}
　　return {
　　　　foo : foo
　　};
});
理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。
但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，
更多的库并不符合。那么，require.js是否能够加载非规范的模块呢？
require.config({
　　shim: {

　　　　'underscore':{
　　　　　　exports: '_'
　　　　},
　　　　'backbone': {
　　　　　　deps: ['underscore', 'jquery'],
　　　　　　exports: 'Backbone'
　　　　}
　　}
});
require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。
具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。

HTML5的离线储存怎么使用，工作原理能不能解释一下？
在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，
更新用户机器上的缓存文件。
原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，
通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。
之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。


如何使用：
1、页面头部像下面一样加入一个manifest的属性；
2、在cache.manifest文件的编写离线存储的资源；
    CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
3、在离线状态时，操作window.applicationCache进行需求实现。







   
    
        
    
    
    
    
    
    
    
    
    
    

