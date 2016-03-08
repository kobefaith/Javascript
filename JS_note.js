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
http://www.jikexueyuan.com/course/208.html
    
http://www.jikexueyuan.com/course/196.html

http://www.jikexueyuan.com/course/207.html
http://www.jikexueyuan.com/course/210.html
    
    
    
    
    
    
    
    
    
    
    
    
    
    


```