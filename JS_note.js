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
http://www.jikexueyuan.com/course/208.html
    
http://www.jikexueyuan.com/course/196.html

http://www.jikexueyuan.com/course/207.html
http://www.jikexueyuan.com/course/210.html
    
    
    
    
    
    
    
    
    
    
    
    
    
    


```