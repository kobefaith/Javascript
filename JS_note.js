```
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
document.write(str.match("world"));
document.write(str.replace("world","jikexueyuan"));
document.write(str.toUpperCase());
var str1 = "hello, world, xueyuan";
var s = str1.split(",");
document.write(s[1]);//world
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
<script>
        function getLoc(){
            document.getElementById("ptime").innerHTML=window.location.pathname;
        }
        function getLoc(){
            location.assign("http://www.jikexueyuan.com");
        }
</script>
screen对象
<script>
    document.write("可用高度"+screen.availHeight+"，可用高度"+screen.availWidth);
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
       btn1.attachevent("onclick",demo);
   }else{
       btn1.onclick = demo;
   }
   function demo(){
       alert("Hello");
   }
</script>
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
       var div = document.getelementById("pid");
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
    
    
    
    
    
    
    
    
    
    
    
    


```