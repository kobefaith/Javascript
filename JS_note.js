cheerio 服务器端用jquery解析dom工具
viewport http://weizhifeng.net/viewports.html
数据推送  http://luoxia.me/code/2016/10/16/数据推送业务解决方案/
js返回一个月有多少天
var d = new Date();
//d.getMonth()+1代表下个月，月份索引从0开始，即当前月为6月时，getMonth()返回值为5，创建日期时同理
//此处构造的日期为下个月的第0天，天数索引从1开始，第0天即代表上个月的最后一天
var curMonthDays = new Date(d.getFullYear(), (d.getMonth()+1), 0).getDate();
console.log("本月共有 "+ curMonthDays +" 天");
es6生成器 https://imququ.com/post/generator-function-in-es6.html
flex box实现居中对齐
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

前端seo http://www.cnblogs.com/EnSnail/p/5671345.html
浏览器缓存。https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651552184&idx=1&sn=09765a59391d7333b66284d50136fb27&chksm=8025ae79b752276fa42982771a577fcc95c1c6e1b1d0fedcbf0bdb817f8ddba8a4f08f5e12c7&mpshare=1&scene=24&srcid=0514yYnKit9GAbInuWZ0WIXr&key=227c90f337be412a0506a680244872a111e4f84162884535c4a823a5f8ec02d3a80b44c06753eb7dc7a717ad712273dd3138e9eac5c997b7bfbae5823223f1de0884187ffe499e5eaf9d64449039e824&ascene=0&uin=ODYxNTQxOTYy&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.3+build(16D30)&version=12020710&nettype=WIFI&fontScale=100&pass_ticket=djGJMb4DxRBtKNxjdOcj3R3Rkb6QCEPkBbp9Qli7wZOWnq0tB%2Bpum2Wbq6b1oNTM
轮播图实现
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>焦点轮播图</title>
    <style type="text/css">
        *{ margin: 0; padding: 0; text-decoration: none;}
        body { padding: 20px;}
        #container { width: 600px; height: 400px; border: 3px solid #333; overflow: hidden; position: relative;}
        #list { width: 4200px; height: 400px; position: absolute; z-index: 1;}
        #list img { float: left;}
        #buttons { position: absolute; height: 10px; width: 100px; z-index: 2; bottom: 20px; left: 250px;}
        #buttons span { cursor: pointer; float: left; border: 1px solid #fff; width: 10px; height: 10px; border-radius: 50%; background: #333; margin-right: 5px;}
        #buttons .on {  background: orangered;}
        .arrow { cursor: pointer; display: none; line-height: 39px; text-align: center; font-size: 36px; font-weight: bold; width: 40px; height: 40px;  position: absolute; z-index: 2; top: 180px; background-color: RGBA(0,0,0,.3); color: #fff;}
        .arrow:hover { background-color: RGBA(0,0,0,.7);}
        #container:hover .arrow { display: block;}
        #prev { left: 20px;}
        #next { right: 20px;}
    </style>
    <script type="text/javascript">

        window.onload = function () {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -600 * len + 'px';
                        }
                        if(left<(-600 * len)) {
                            list.style.left = '-600px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-600);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(600);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -600 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();

        }
    </script>
      <script type="text/javascript"> ／／jquery版本

        $(function () {
            var container = $('#container');
            var list = $('#list');
            var buttons = $('#buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 5;
            var interval = 3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -200){
                        list.css('left', -600 * len);
                    }
                    if(left < (-600 * len)) {
                        list.css('left', -600);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-600);
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(600);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -600 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);

            play();

        });
    </script>
</head>
<body>

<div id="container">
    <div id="list" style="left: -600px;">
        <img src="img/5.jpg" alt="1"/>
        <img src="img/1.jpg" alt="1"/>
        <img src="img/2.jpg" alt="2"/>
        <img src="img/3.jpg" alt="3"/>
        <img src="img/4.jpg" alt="4"/>
        <img src="img/5.jpg" alt="5"/>
        <img src="img/1.jpg" alt="5"/>
    </div>
    <div id="buttons">
        <span index="1" class="on"></span>
        <span index="2"></span>
        <span index="3"></span>
        <span index="4"></span>
        <span index="5"></span>
    </div>
    <a href="javascript:;" id="prev" class="arrow">&lt;</a>
    <a href="javascript:;" id="next" class="arrow">&gt;</a>
</div>

</body>
</html>

js知识 http://www.cnblogs.com/wangfupeng1988/p/3977924.html
下拉加载时优化
componentDidMount() {
    // 使用滚动时自动加载更多
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId
    function callback() {
        const top = wrapper.getBoundingClientRect().top
        const windowHeight = window.screen.height
        if (top && top < windowHeight) {
            // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
            loadMoreFn()
        }
    }
    window.addEventListener('scroll', function () {
        if (this.props.isLoadingMore) {
            return
        }
        if (timeoutId) { ／／此处通过定时器来防止每次下拉都会计算 高度，判断是否该加载数据。
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(callback, 50)
    }.bind(this), false);
}
瀑布流中下拉加载
function checkscrollside(){
    var oParent=document.getElementById('main');
    var aPin=getClassObj(oParent,'pin');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}
function checkscrollside(){
    var $aPin = $( "#main>div" );
    var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop = $( window ).scrollTop()//注意解决兼容性
    var documentH = $( document ).width();//页面高度
    return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
}
https://segmentfault.com/a/1190000002627927
js 快速排序
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
React 最基本的优化方式是使用PureRenderMixin，安装工具 npm i react-addons-pure-render-mixin --save，然后在组件中引用并使用

import React from 'react' 
import PureRenderMixin from 'react-addons-pure-render-mixin' 
class List extends React.Component { 
   constructor(props, context) { 
   super(props, context); 
   this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); 
} //...省略其他内容... }

http://www.imooc.com/article/17009
http://www.imooc.com/article/16745
http://www.imooc.com/article/16746
闭包面试题。 http://www.cnblogs.com/xxcanghai/p/4991870.html
标签切换
function $(id){
    return typeof  id=="string"?document.getElementById(id):id;
}

window.onload = function(){
    var titleName = $("tab-title").getElementsByTagName("li");
    var tabContent = $("tab-content").getElementsByTagName("div");
    if(titleName.length != tabContent.length){
        return;
    }
    for(var i = 0;i<titleName.length;i++){
        titleName[i].id = i;
        titleName[i].onmouseover = function(){
            for(var j = 0;j<titleName.length;j++){
                titleName[j].className = "";
                tabContent[j].style.display = "none"
            }
            this.className = "select";
            tabContent[this.id].style.display = "block";
        }
    }
}
侧边栏固定：
<script>
    var Getid = function(id){
        return document.getElementById(id);
    }

    var addEvent = function(obj,event,fun){
        if(obj.addEventListener){
            obj.addEventListener(event,fun,false);
        }else if(obj.attachEvent()){
            obj.attachEvent("on"+event,fun);
        }
    }

    var lnSider = Getid("lesson-nav");
    addEvent(window,"scroll",function(){
        var scrollHeight = document.body.scrollTop;
        console.log(scrollHeight);
        var contentHeight = Getid("changeid").offsetHeight - lnSider.offsetHeight;
//        console.log(contentHeight);
        if(scrollHeight >253 && scrollHeight<contentHeight+253){
            lnSider.style.position = "absolute";
            lnSider.style.left ="0px";
            lnSider.style.top = scrollHeight - 253 +"px";
        }else if(scrollHeight <=253){
            lnSider.style.position = "absolute";
            lnSider.style.left ="0px";
            lnSider.style.top = "0px";
        }
    });

</script>

<script>
    var jWindow = $(window);
    jWindow.scroll(function(){
        var scrollHeight = jWindow.scrollTop();
        var contentHeight = $("#changeid").height() - $(".lesson-nav").height();
//        console.log(scrollHeight+"---"+contentHeight);
        if(scrollHeight >253 && scrollHeight < contentHeight + 253){
            $(".lesson-nav").css({
                position:"absolute",
                left:"0px",
                top:scrollHeight - 253+"px"
            });
        }else if(scrollHeight <=253){
            $(".lesson-nav").css({
                position:"absolute",
                left:"0px",
                top:"0px"
            });
        }
    });
返回顶部实现：
window.onload = function () {
    var topbtn = document.getElementById("btn");
    var timer = null;
    var pagelookheight = document.documentElement.clientHeight;

    window.onscroll = function(){
//        alert("hello");
        var backtop = document.body.scrollTop;
        if(backtop >= pagelookheight){
            topbtn.style.display = "block";
        }else{
            topbtn.style.display = "none";
        }
    }

    topbtn.onclick = function () {
//        alert("Hello")

        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedtop = backtop/5;
            document.body.scrollTop = backtop -speedtop;
            if(backtop ==0){
                clearInterval(timer);
            }
        }, 30);
    }
}
``
`
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
<span style="font-family: verdana, geneva;">
var array1 = ['a','b','c'];
var bArray = ['d','e','f'];
var cArray = array1.concat(bArray);
cArray.splice(1,1); 
</span>
cArray.slice(0,1); //有两个参数，该方法返回开始和结束位置之间的项，但不包含结束位置的项。只有一个参数的情况下，返回从该参数指定位置开始到数组末尾的所有项
cArray.splice(1,1);//删除第二项，要删除的第一项的位置和项数，就可以删除指定的项。
cArray.splice(2,0,"z","x");//从第二项开始 删除0项，然后插入 z  x 两项。
cArray.splice(2,1,"z","x");//从第二项开始 删除1项然后插入 z x 两项
15.将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成10，{$name}替换成Tony （使用正则表达式）

答案："<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>".replace(/{\$id}/g, '10').replace(/{\$name}/g, ‘Tony’);
输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
<span style="font-family: verdana, geneva;">
var d = new Date();
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
<span style="font-family: verdana, geneva;">
var foo = "11"+2-"1";//如果一个操作符是字符串或bool型，则-的时候会将字符型转化为数字运算
console.log(foo);
console.log(typeof foo);</span>
执行完后foo的值为111，foo的类型为Number。
<span style="font-family: verdana, geneva;">
var foo = "11"+2+"1";    //体会加一个字符串'1' 和 减去一个字符串'1'的不同
console.log(foo);
console.log(typeof foo);</span>
执行完后foo的值为1121(此处是字符串拼接)，foo的类型为String。
看下列代码,输出什么？解释原因。
<span style="font-family: verdana, geneva;">
var undefined;
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
<span style="font-family: verdana, geneva;">
var numberArray = [3,6,2,4,1,5];
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
利用事件句柄可以为元素添加多个事件,会依次触发
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
require.config({
    baseUrl: './app',

    paths: {
        underscore: '../libs/underscore',
        backbone: '../libs/backbone',
        jquery: '../libs/jquery-2.1.1',
        text: '../libs/text',
        config: 'config',
        marquee: 'common/jquery.marquee',
        jeasing: 'common/jquery.easing',
        three: '../libs/three.min',
        webaudiox: '../libs/webaudiox',
        id3: '../libs/id3-minimized',
        stats: '../libs/stats.min',
        modernizr: '../libs/Modernizr',
        rgbaster: '../libs/rgbaster'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'underscore': {
            exports: '_'
        },        
    }
});

// App Entry
require([
    'jquery',
    'underscore',
    'backbone',
    'router',    
], function($, _, Backbone, Router, Modernizr, Global, app, MonetKeyValue, PathDef) {

    console.log('application start');

    envInit();

    //loadInitFiles();
    window.onload = App.onload;
    window.onShow = App.onShow;
    window.onResume = App.onResume;
    
    Backbone.history.start();

    window.Router = Router;    

}, function(err) {console.log('application error: ' + err);});
NowingPlaying_PhotoView.js
define([
    'jquery',
    'underscore',
    'backbone',
    'common/commonDef',
    'models/InstagramModel',
    'text!templates/Home/NowPlaying_PhotoTemplate.html'
], function($, _, Backbone, CommonDef,InstagramModel,NowPlaying_PhotoTemplate) {

		var self = null;

		var NowPlaying_PhotoView = Backbone.View.extend({
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
Js的继承方式
二、 prototype模式
一、构造继承
var Base = function()  
{  
    this.level = 1;  
    this.name = "base";  
    this.toString = function(){  
        return "base";  
    };  
};  
Base.CONSTANT = "constant";  
  
var Sub = function()  
{  
    Base.call(this);  
    this.name = "sub";  
};
优点：可以实现多重继承，可以把子类特有的属性设置放在构造器内部。
缺点：使用instanceof发现，对象不是父类的实例。
二、 prototype模式
第二种方法更常见，使用prototype属性。
如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。
　　Cat.prototype = new Animal();
　　Cat.prototype.constructor = Cat;
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
三、 直接继承prototype
第三种方法是对第二种方法的改进。由于Animal对象中，不变的属性都可以直接写入Animal.prototype。所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。
现在，我们先将Animal对象改写：
　　function Animal(){ }
　　Animal.prototype.species = "动物";
然后，将Cat的prototype对象，然后指向Animal的prototype对象，这样就完成了继承。
　　Cat.prototype = Animal.prototype;
　　Cat.prototype.constructor = Cat;
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
与前一种方法相比，这样做的优点是效率比较高（不用执行和建立Animal的实例了），比较省内存。
缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype。
四、 利用空对象作为中介
由于"直接继承prototype"存在上述的缺点，所以就有第四种方法，利用一个空对象作为中介。
　　var F = function(){};
　　F.prototype = Animal.prototype;
　　Cat.prototype = new F();
　　Cat.prototype.constructor = Cat;
我们将上面的方法，封装成一个函数，便于使用。
　　function extend(Child, Parent) {

　　　　var F = function(){};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
　　　　Child.uber = Parent.prototype;
　　}
　　使用的时候，方法如下
　　extend(Cat,Animal);
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
五、 拷贝继承
写一个函数，实现属性拷贝的目的。
　　function extend2(Child, Parent) {
　　　　var p = Parent.prototype;
　　　　var c = Child.prototype;
　　　　for (var i in p) {
　　　　　　c[i] = p[i];
　　　　　　}
　　　　c.uber = p;
　　}
这个函数的作用，就是将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。
使用的时候，这样写：
　　extend2(Cat, Animal);
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物

设立"严格模式"的目的，主要有以下几个：
　　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
　　- 提高编译器效率，增加运行速度；
　　- 为未来新版本的Javascript做好铺垫。
将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行。
如果这行语句不在第一行，则无效，整个脚本以"正常模式"运行。
如果不同模式的代码文件合并成一个文件，这一点需要特别注意。
在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。
"use strict";
　　v = 1; // 报错，v未声明
　　for(i = 0; i < 2; i++) { // 报错，i未声明
　　}
因此，严格模式下，变量都必须先用var命令声明，然后再使用。
禁止使用with语句
因为with语句无法在编译时就确定，属性到底归属哪个对象。
　　"use strict";
　　var v = 1;
　　with (o){ // 语法错误 
　　　　v = 2;
　　}
创设eval作用域
正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。
正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。
　　"use strict";
　　var x = 2;
　　console.info(eval("var x = 5; x")); // 5
　　console.info(x); // 2
禁止在函数内部遍历调用栈
　　function f1(){
　　　　"use strict";
　　　　f1.caller; // 报错
　　　　f1.arguments; // 报错
　　}
　　f1();
禁止删除变量
严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除。
　　"use strict";
　　var x;
　　delete x; // 语法错误
　　var o = Object.create(null, {'x': {
　　　　　　value: 1,
　　　　　　configurable: true
　　}});
　　delete o.x; // 删除成功
对象不能有重名的属性
正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。
函数不能有重名的参数
正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。
禁止八进制表示法
正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示法，整数第一位为0，将报错。
函数必须声明在顶层
将来Javascript的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。
　　"use strict";
　　if (true) {
　　　　function f() { } // 语法错误
　　}
　　for (var i = 0; i < 5; i++) {
　　　　function f2() { } // 语法错误
　　}

 JSON字符串转换为JSON对象:
var obj =eval('('+ str +')');
var obj = str.parseJSON();
var obj = JSON.parse(str);

JSON对象转换为JSON字符串：
var last=obj.toJSONString();
var last=JSON.stringify(obj);
下面代码运行结果是什么？请解释。
  function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printing();
要弄懂数字为何以这种顺序输出，你需要弄明白setTimeout()是干什么的，
以及浏览器的事件循环工作原理。浏览器有一个事件循环用于检查事件队列，处理延迟的事件。
UI事件（例如，点击，滚动等），Ajax回调，以及提供给setTimeout()和setInterval()的回调都会依次被事件循环处理。
因此，当调用setTimeout()函数时，即使延迟的时间被设置为0，提供的回调也会被排队。
回调会呆在队列中，直到指定的时间用完后，引擎开始执行动作（如果它在当前不执行其他的动作）。
因此，即使setTimeout（）回调被延迟0毫秒，它仍然会被排队，并且直到函数中其他非延迟的语句被执行完了之后，才会执行。
方法一.判断其是否具有“数组性质”，如slice()方法。可自己给该变量定义slice方法，故有时会失效
方法二.obj instanceof Array 在某些IE版本中不正确
方法三.方法一二皆有漏洞，在ECMA Script5中定义了新方法Array.isArray(), 保证其兼容性，最好的方法如下：
<span style="font-family: verdana, geneva;">if(typeof Array.isArray==="undefined")
{
  Array.isArray = function(arg){
        return Object.prototype.toString.call(arg)==="[object Array]"
    }; 
}
</span>     
Ajax
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();
alert('请求已发送，请等待响应...');

如果您希望通过 GET 方法发送信息，请向 URL 添加信息：
xmlhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);
xmlhttp.send();

如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");

readyState	
存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪
    
  1 css 压缩
 2 行内元素 块级元素  盒子模型的类型
 3 Ie5 Ie6 等 css hjack经验
 4 浏览器内核 
 5 浮动元素 垂直对齐 img如何垂直对齐
 6 不用框架 修改html 为XXXX ，修改字体颜色
 7 代码输出结果 
var j = 100;
~(function test(){
    console.log(j);
    var j = 2；
    console.log(j);   
})();
  8 jQuery实现.ajax GET方法与POST方法的区别 
  9 css3实现每隔1秒 元素扩大一倍
         
 offsetWidth/offsetHeight返回值包含content + padding + border，效果与e.getBoundingClientRect()相同
clientWidth/clientHeight返回值只包含content + padding，如果有滚动条，也不包含滚动条   
  scrollWidth/scrollHeight返回值包含content + padding + 溢出内容的尺寸  
           
 javascript有哪几种数据类型

六种基本数据类型

undefined
null
string
boolean
number
symbol(ES6)
一种引用类型
Object   

下面这段代码想要循环延时输出结果0 1 2 3 4,请问输出结果是否正确,如果不正确,请说明为什么,并修改循环内的代码使其输出正确结果

for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i + ' ');
  }, 100);
}    
 不能输出正确结果，因为循环中setTimeout接受的参数函数通过闭包访问变量i。
 javascript运行环境为单线程，setTimeout注册的函数需要等待线程空闲才能执行，
 此时for循环已经结束，i值为5.五个定时输出都是5 修改方法：将setTimeout放在函数立即调用表达式中，
 将i值作为参数传递给包裹函数，创建新闭包

for (var i = 0; i < 5; ++i) {
  (function (i) {
    setTimeout(function () {
      console.log(i + ' ');
    }, 100);
  }(i));
}      
 如何判断一个对象是否为数组
function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}
<span style="font-family: verdana, geneva;">var a = new Object();
a.value = 1;
b = a;
b.value = 2;
alert(a.value);
</span>
输出2
JS的基础类型与引用类型
两种类型：
1.   ECMAScript变量包含两种不同类型的值：基本类型值、引用类型值；
2.   基本类型值：指的是保存在栈内存中的简单数据段；
3.   引用类型值：指的是那些保存在堆内存中的对象，意思是，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象；
 两种访问方式：
4.   基本类型值：按值访问，操作的是他们实际保存的值；
5.   引用类型值：按引用访问，当查询时，我们需要先从栈中读取内存地址，然后再顺藤摸瓜地找到保存在堆内存中的值；   
两种类型复制
 
1.   基本类型变量的复制：从一个变量向一个变量复制时，会在栈中创建一个新值，然后把值复制到为新变量分配的位置上；
1.   引用类型变量的复制：复制的是存储在栈中的指针，将指针复制到栈中未新变量分配的空间中，而这个指针副本和原指针执行存储在堆中的同一个对象；
2. 复制操作结束后，两个变量实际上将引用同一个对象；因此改变其中的一个，将影响另一个；
两种变量类型检测
 
1.   Typeof操作符是检测基本类型的最佳工具；
2.   如果变量值是nul或者对象，typeof 将返回“object”；
3.   Instanceof用于检测引用类型，可以检测到具体的，它是什么类型的实例；
4.   如果变量是给定引用类型的实例，instanceof操作符会返回true;    
    
 想实现一个对页面某个节点的拖曳？如何做？（使用原生JS）

给需要拖拽的节点绑定mousedown, mousemove, mouseup事件
mousedown事件触发后，开始拖拽
mousemove时，需要通过event.clientX和clientY获取拖拽位置，并实时更新位置
mouseup时，拖拽结束
需要注意浏览器边界的情况        
<html>
<head>
<script type="text/javascript">
function show_coords(event)
  {
  x=event.clientX
  y=event.clientY
  alert("X coords: " + x + ", Y coords: " + y)
  }
</script>
</head>

<body onmousedown="show_coords(event)">
	
	<p>Click in the document. An alert box will alert 
the x and y coordinates of the mouse pointer.</p>

</body>
</html>   
H5实现拖拽，在两个边框中拖拽图片。
首先，为了使元素可拖动，把 draggable 属性设置为 true ：<img draggable="true" />
拖动什么 - ondragstart 和 setData()

然后，规定当元素被拖动时，会发生什么。
在上面的例子中，ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。
dataTransfer.setData() 方法设置被拖数据的数据类型和值：
function drag(ev){
   ev.dataTransfer.setData("Text",ev.target.id);
}
放到何处 - ondragover
ondragover 事件规定在何处放置被拖动的数据。
默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
这要通过调用 ondragover 事件的 event.preventDefault() 方法：
进行放置 - ondrop
当放置被拖数据时，会发生 drop 事件。
在上面的例子中，ondrop 属性调用了一个函数，drop(event)：
function drop(ev)
{
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
代码解释：

    调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
    通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
    被拖数据是被拖元素的 id ("drag1")
    把被拖元素追加到放置元素（目标元素）中
===========================
<script type="text/javascript">
function allowDrop(ev)
{
    ev.preventDefault();//阻止默认事件
}

function drag(ev)
{
   ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
   ev.preventDefault();
   var data=ev.dataTransfer.getData("Text");
   ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img src="/i/w3school_logo_black.gif" draggable="true" ondragstart="drag(event)" id="drag1" />
    </div>
    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
</body>   
      
 appcelerator可以用js来开发跨平台的安卓和IOS应用。它可以做到一套代码跑不同的平台。   
    
 两层循环写成foreach
 var fn = function(d, element) {
   if (element.productid == d.productid && element.unitprice == d.unitprice && element.batchno == d.batchno && element.productiontime == d.productiontime) {
     element.count += d.count;
   } else {
     _dataarray.push(d);
   }
 };

 var fn1 = function(d) {
   _dataarray.forEach(fn.bind(null, d));
 };

 _data.forEach(fn1);   
    
js touch事件
document.addEventListener('touchstart',function(event){
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
});

document.addEventListener('touchend',function(event){
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    var deltax = endx - startx;
    var deltay = endy - starty;


    
    
    


`
``