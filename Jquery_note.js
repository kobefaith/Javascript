<head lang="en">
<meta charset="UTF-8">
<script src="jquery-2.1.1.min.js"></script>
<script src="app.js"></script>
</head>

app.js中
$(document).ready(function(){
    //alert("文档加载完毕！");
    $("p").click(function(){
        $(this).hide();//点击后隐藏p元素
    })
});
1.jQuery选择器
<body>
   <p>p1</p>
   <p id="pid">p2</p>
   <p class="pclass">p3</p>
   <button>click</button>
</body>
$(document).ready(function(){
    $("button").click(function(){
        $("p").text("p元素被修改了");//元素选择器
        $("#pid").text("p2元素被修改了");//id选择器
        $(".pclass").text("p3元素被修改了");//类选择器
    });
});
2.jquery事件
<body>   
   <button>click</button>
   <button id="clickMeBtn">click</button>
</body>

$(document).ready(function(){
    //$("button").click(function(){
    //$("button").dblclick(function(){ 
    //$("button").mouseenter(function(){//鼠标移动到元素上时触发
    //$("button").mouseleave(function(){//鼠标移开时触发  
      $( "li" ).hover(              //鼠标滑过触发，第一个函数是鼠标进入触发，第二个函数是鼠标离开触发
        function() {
          $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
          $( this ).find( "span:last" ).remove();
      });    
    $(this).hide();    
    });
    $("#clickMeBtn").bind("click",clickHandler1);//绑定事件
    $("#clickMeBtn").bind("click",clickHandler2);//绑定两个事件可以同时起作用
    $("#clickMeBtn").unbind("click",clickHandler2);//不写clickHandler2会解除所有的事件绑定
    
    $("#clickMeBtn").on("click",clickHandler1);//绑定事件 jquery 1.7之后 官方推荐用on方法
    $("#clickMeBtn").on("click",clickHandler2);//绑定两个事件可以同时起作用
    $("#clickMeBtn").off("click",clickHandler2);//不写clickHandler2会解除所有的事件绑定
    
});
function clickHandler1(e){
    console.log("clickHandler1");
}
function clickHandler2(e){
    console.log("clickHandler2");
}
按键事件处理
<script type="text/javascript">
    $(document).ready(function(){
      $("#text_box").keydown(function(event){
        if(event.ctrlKey && event.which == 13)       //13等于回车键(Enter)键值,ctrlKey 等于 Ctrl
        alert("按了ctrl+回车键!")
      });
      $("input").keyup(function(){
        $("input").css("background-color","#D6D6FF");
      });
    });
</script>
<input type="text" id="text_box"/>
2.1事件目标和冒泡
<body>
   <div style="width:300px;height:300px;background-color:aqua">
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
        </ul>
   </div>
</body>
$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler1);
    $("div").bind("click",divHandler2);
});
function bodyHandler(event){//事件冒泡后 点击div的时候会传到body
    console.log(event);
}
function divHandler1(event){
    console.log(event);
    event.stopPropagation();//阻止事件冒泡，这样body就不会收到事件了
    event.stopImmediatePropagation();//阻止所有事件冒泡。divHandler2的事件不会出现
    
}
function divHandler2(event){
    console.log(event);   
}
另外 console.log()并不是所有的浏览器都支持，比如在IE下就不支持。
所以可以自己定义log函数
function conlog(event){
    console.log(event);//在IE下注销此行就不会出现编译错误。
}
自定义事件
<body>   
   <button>click</button>
   <button id="clickMeBtn">click</button>
</body>
$(document).ready(function(){
    $("#clickMeBtn").click(function(){
        var e = jQuery.Event("MyEvent");
        $("#clickMeBtn").trigger(e);
    });
     $("#clickMeBtn").bind("MyEvent",function(event){
         console.log(event);
     });
});
3.HTML元素捕获，设置，元素添加删除
<body>
    <p id="text">this is my webpage</p>
    <button id="btn1">点击</button>
    <p><input type="text" id="it" value="jike"></p>
    <p><a href="http://www.jikexueyuan.com" id="aid"></a></p>
    <button id="btn2">点击</button>
</body>
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("text:" + $("#text").text());//获得text元素的内容
        alert("text:" + $("#text").html());//获得text元素的内容,与text的区别是可以获取内容中嵌入的标签
        alert("text:" + $("#it").val());//获取input标签的value
        
    });
    $("#btn2").click(function(){
        alert("text:"+$("#aid").attr("href"));//获取属性
        alert("text:"+$("#aid").attr("id"));//获取属性
    });
});
3.1html设置
<body>
    <p id="p1">hello world</p>
    <button id="btn1">点击</button>
    
    <p id="p2">hello world</p>
    <button id="btn2">点击</button>
    <input type="text" id="i3" value="hello world">
    <button id="btn3">点击</button>
    <br/>
    <a id="aid" href="http://www.baidu.com">最初是百度，接下来是极客学院</a>
    <button id="btn4">跳转</button>
    
    <p id="p5">hello world</p>
    <button id="btn5">按钮</button>
</body>
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").text("极客学院");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href="http://www.baidu.com">百度</a>");//用html可以增加标签
    });
    $("#btn3").click(function(){
        $("#i3").val("极客学院");
    });
    $("#btn4").click(function(){
        $("aid").attr("href","http://www.jiekexuayuan.com");
    });//如果修改多个属性，则采用如下的方式
    $("#btn4").click(function(){
        $("#aid").attr({
            "href":"http://www.jikexuayuan.com",
            "title":"hello"
        });
    });
    $("#btn5").click(function(){
       $("#p5").text(function(i,ot){//通过回调的方式来修改元素内容
           return "old:"+ot+" new:这是新内容"+(i);//i是元素的标号默认是0
       }); 
    });
});
3.2html添加元素
<body>
    <p id="p1">Hello world</p>
    <button id="btn1">按钮</button>
    
    <p id="p2">Hello world</p>
    <button id="btn2">按钮</button>
    <button onclick="appendText()">按钮</button>
</body>
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").append("this is my webpage");//在后面添加，不会换行
        $("#p1").prepend("this is my webpage");//在前面添加，不会换行
    });
    $("#btn2").click(function(){
        $("#p2").before("hello");//在p2之前添加，会换行
        $("#p2").after("hello");//在p2之后添加，会换行
    });
});
funtion appendText(){
    /*
       有三种添加元素的方式
       html  jquery DOM
    */
    var text1 = "<p>html方式添加元素</p>";
    var text2 = $("<p></p>").text("jquery方式添加元素");
    var text3 = document.createElement("p");
    text3.innerHTML = "DOM 方式添加元素";
    $("body").append(text1,text2,text3);
}
3.3删除元素
<body>
   <p>hello world</p>
   <button id="btn">click</button>
</body>
$(document).ready(function(){
    $("#btn").click(function(){
        $("p").remove();//全部删除，比如会将div中的背景颜色 边框等连同内部的p元素一起删除
        $("p").empty();//仅仅是删除div元素内部的p元素等子元素
    });
});
4.jQuery效果
4.1显示与隐藏
<body>
   <p>hello</p>
   <button id="hide">隐藏</button>
   <button id="show">显示</button>
   <button id="toggle">隐藏/显示</button>
   <script>
       for(var i = 0; i < 5; i++){
           $("<div>").appendTo(document.body);//添加元素到body           
       }
       $("div").click(function(){
           $(this).click(function(){
               $(this).remove();
           });
       });
   </script>
</body>
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();//设置元素隐藏
        $("p").hide(1000);//1000是设置隐藏过程持续1000毫秒
        
    });
    $("#show").click(function(){
        $("p").show();
        $("p").show(1000);
    });
    $("#toggle").click(function(){
        $("p").toggle(1000); //点击后隐藏 ，再点击会显示 参数代表执行的时间，也可以用fast slow  normal等
        $("p").toggle("fast");
    });
});
4.2淡入淡出
<body>
    <button id="in">fadein</button>
    <button id="out">fadeout</button>
    <button id="toggle">fadetoggle</button>
    <button id="to">fadeto</button>
    <div id="div1" style="width:80px;height:80px;display:none;background-color:aqua"></div>
    <div id="div2" style="width:80px;height:80px;display:none;background-color:#ece023"></div>
    <div id="div3" style="width:80px;height:80px;display:none;background-color:darkgoldenrod"></div>
</body>
$(document).ready(function(){
    $("#in").on("click",function(){
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
    $("#out").on("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    $("#toggle").on("click",function(){
        $("#div1").fadeToggle(1000);//点击淡入再点击淡出。
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });
    $("#to").on("click",function(){
        $("#div1").fadeTo(1000,0);//设置透明效果，0代表完全透明，1代表不透明
        $("#div2").fadeTo(1000,0.7);
        $("#div3").fadeTo(1000,1);
    });
});
4.3滑动
<head>
    <style>
        #content,#flipshow,#fliphide,#fliptoggle{
            padding:5px;
            text-align:center;
            background-color:#ece023;
            border:solid 1px #ece999;
        }
        #content{
            padding:50px;
            display:none;
        }
    </style>
</head>
<body>
    <div id="flipshow">出现</div>
    <div id="fliphide">隐藏</div>
    <div id="fliptoggle">出现/隐藏</div>
    <div id="content">Hello World</div>
    
</body>
$(document).ready(function(){
    $(#flipshow).click(function(){
        $("#content").slideDown(1000);
    });
    $(#fliphide).click(function(){
        $("#content").slideUp(1000);
    });
    $(#fliptoggle).click(function(){
        $("#content").slideToggle(1000);
    });
});
4.4jQuery回调
<body>
    <button>隐藏</button>
    <p>hello world jiekxueyuan </p>
</body>
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide(1000,function(){
            alert("动画结束");
        });
        $("p").css("color","red").slideUp(1000).slideDown(1000);//同时添加多个动画
    });
});
5.jQuery Ajax 异步访问
<body>
    <input type="text" id="namevalue">
    <br/>
    <button id="btn">Send</button>
    结果:<span id="result"></span>
</body>
$(document).ready(function(){
    $("#btn").on("click",function(){
        $.get("Server.php",{name:$("#namevalue").val()},function(data){
            $("#result").text(data);
        });
    });
    $("#btn").on("click",function(){
        $.post("Server.php",{name:$("#namevalue").val()},function(data){
            $("#result").text(data);
        }).error(function(){//处理错误
            $("#result").text("通讯有问题");
        });
    });
});
5.2AJAX加载片段
box.htm
<div style="width:100px;height:100px;background-color:red"></div>
HelloJS.js
function sayHello(){
    alert("Hello AJAX");
}
$(document).ready(function(){
    $("body").text("正在加载数据");
    $("body").load("box.htm",function(a,status,c){  //在一个html文件中加载一段html代码，后缀自行定义，一般是htm
        console.log(status);
        if(status=="error"){
            $("body").text("加载失败");
        }
    });
    $.getScript("HelloJS.js").complete(function(){
        sayHello();
    });
});
6jQuery扩展
一种扩展方式
myjQuery.js
$.myjq = function(){
    alert("Hello myjQuery");
}
Extendindex.js
$(document).ready(function(){
    $.myjq();//第一种扩展方式调用
    $("div").myjq();//第二种扩展方式调用
})
另外的扩展方式
$.fn.myjq=function(){
    $(this).text("Hello");
}
6.2 noConflict
<body>
    <div>Hello</div>
    <button id="btn">按钮</button>
</body>
$.noConflict();//如果$被其他框架占有 ，可以用jQuery 替换$
jQuery(document).ready(function(){
    jQuery("#btn").on("click",function(){
        jQuery("div").text("new content");
    });
});
var myjq = $.noConflict();
myjq(document).ready(function(){
    myjq("#btn").on("click",function(){
        myjq("div").text("new content");
    });
});

7 jQuery css
7.1操作css
$(document).ready(function(){
    $("div").css("width","100px");
    $("div").css("height","100px");
    $("div").css("background","#FF0000");
    以上写法特啰嗦，下面是简洁的写法
    $("div").css({
        width:"100px",height:"100px",backgroundColor:"#00FF00"
    });
    还可以使用addClass的方式:
    $("div").addClass("style1");//style1是在css文件中定义
    $("div").click(function(){
        $(this).addClass("style2");
        $(this).removeClass("style2");
        $(this).toggleClass("style2");//可以在style1 和style2 之间来回的切换。
    });
});
jQcss.css
.style1{
    width:100px;
    height:100px;
    background-color:red;
}
.style2{
    width:100px;
    height:100px;
    background-color:blue;
}
7.2盒子模型
<style>
    #div{
        width:100px;
        height:100px;
        margin:50px;
        padding:50px;
        border:2px solid aqua;
        background-color:blue;
    }
</style>
$(document).ready(function(){
    alert($("#div").height());//100
    alert($("#div").innerHeight());//200 height + padding
    alert($("#div").outerHeight());//204 height+padding +border 
    alert($("#div").outerHeight(true));//304 height+padding +border+margin
});
8.jquery元素遍历和过滤
8.1向下遍历
<div id="div1">div1
   <div id="div2">div2
       <p>
            <a>
                hello
            </a>
       </p>
   </div>
</div>

style.css
#div1{
    width:500px;
    height:200px;
    border:3px solid chocolate;
}
#div2{
    width:400px;
    height:150px;
    margin-top:10px;
    margin-left:10px;
    border:3px solid chocolate;
}
p{
    margin-left:10px;
    margin-top:10px;
    width:150px;
    height:80px;
    border:3px solid chocolate;
}

$(document).ready(function(){
   $("#div1").children().css({border:"3px solid #FF0000"});
   $("#div1").children("#div2").css({border:"3px solid #FF0000"});//参数是可选的，但是不能选孙元素
   $("#div1").children("p").css({border:"3px solid #FF0000"});//find可以选择孙元素，只要指定名字就可以。find必须填参数
   
});
8.2向上遍历
$(document).ready(function(){
   $("p").parent().css({border:"3px solid #FF0000"});//只改变直接父元素的css
   $("p").parents().css({border:"3px solid #FF0000"});//所有的父元素包括document的css也变化。
   $("a").parentsUntil("#div1").css({border:"3px solid #FF0000"});//从a 到div1 之间有 p和div2  ，这两个会被变红
});
8.3同级遍历
<style>
.bd *{
    display:block;
    border:3px solid gray;
    color:gray;
    padding:5px;
    margin:15px;
}
</style>
<div class="bd">
    <p>p</p>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>    
</div>
$(document).ready(function(){
    $("h4").siblings().css({boder:"3px solid #FF0000"});//会把所有同级的元素都更改css
    $("h4").next().css({boder:"3px solid #FF0000"});//只修改h4下方的h5
    $("h4").nextAll().css({boder:"3px solid #FF0000"});//从h4往下所有的都修改
    $("h4").nextUntil("h6").css({boder:"3px solid #FF0000"});//只修改h4 到h6之间的h5
    $("h4").prev().css({boder:"3px solid #FF0000"});//只修改上一个
    $("h4").preAll().css({boder:"3px solid #FF0000"});//修改h4以上所有的
    $("h4").preUntil("p").css({boder:"3px solid #FF0000"});//修改p到h4之间的所有元素
    
});
8.4过滤
<div>
    <p>div1</p>
</div>
<div>
    <p class="pclass">div2</p>
</div>
<div>
    <p class="pclass">div3</p>
</div>
<div>
    <a>div4</a>
</div>
$(document).ready(function(){
    $("div p").first().css("background-color","red");//只修改第一个 
    $("div p").last().css("background-color","red");//只修改最后一个
    $("div p").eq(0).css("background-color","red");//0代表div1 ，1代表div2,2代表div3
    $("div p").filter("p").css("background-color","red");//修改所有的p元素
    $("div p").not(".pclass").css("background-color","red");//修改除pclass之外的元素
});
9jQuery菜单
9.1垂直菜单布局
<ul>
   <li class="main">
      <a href="#">菜单1</a>
      <ul>
           <li><a href="#">子菜单1</a></li>
           <li><a href="#">子菜单2</a></li>
      </ul>
    </li>
    <li class="main">
      <a href="#">菜单2</a>
      <ul>
           <li><a href="#">子菜单1</a></li>
           <li><a href="#">子菜单2</a></li>
      </ul>
    </li>
    <li class="main">
      <a href="#">菜单3</a>
      <ul>
           <li><a href="#">子菜单1</a></li>
           <li><a href="#">子菜单2</a></li>
      </ul>
    </li>
</ul>
style.css
ul,li{
    list-style:none; //去除ul li前面的点
}
ul{
    padding:0;
    margin:0;
}
.main{
    background-image:url(images/title.gif);
    background-repeat:repeat-x;
    width:100px;
}
li{
    background-color:#eeeeee;
}
a{
    text-decoration:none;
    padding-left:20px;
    display:block;
    width:80px;
    padding-top:3px;
    padding-bottom:3px;    
}
.main a{
    color:white;
    background-image:url(images/collapsed.gif);
    background-repeat:no-repeat;
    background-position:3px center;
}
.main li a{
    color:black;
    background-image:none;
}
.main ul{
    display:none;  //收起子菜单
}
app.js
$(document).ready(function(){
    $(".main>a").click(function(){
        var ulNode = $(this).next("ul");
        //ulNode.show();
        //ulNode.hide();
        //ulNode.toggle("normal");
        //ulNode.slideDown();//向下展开菜单
        //ulNode.slideUp();//收起菜单
        ulNode.slideToggle();//开关一样的收起展开菜单
        changeIcon($(this));
    });
});
9.2水平菜单布局
<ul>
   <li class="hmain">
      <a href="#">菜单1</a>
      <ul>
           <li><a href="#">子菜单1</a></li>
           <li><a href="#">子菜单2</a></li>
      </ul>
    </li>
    <li class="hmain">
      <a href="#">菜单2</a>
      <ul>
           <li><a href="#">子菜单1</a></li>
           <li><a href="#">子菜单2</a></li>
      </ul>
    </li>
    <li class="hmain">
      <a href="#">菜单3</a>
      <ul>
           <li><a href="#">子菜单1</a></li>
           <li><a href="#">子菜单2</a></li>
      </ul>
    </li>
</ul>
ul,li{
    list-style:none; //去除ul li前面的点
}
ul{
    padding:0;
    margin:0;
}
.main,.hmain{
    background-image:url(images/title.gif);
    background-repeat:repeat-x;
    width:100px;
}
li{
    background-color:#eeeeee;
}
a{
    text-decoration:none;
    padding-left:20px;
    display:block;
    width:80px;
    padding-top:3px;
    padding-bottom:3px;    
}
.main a,.hmain a{
    color:white;
    background-image:url(images/collapsed.gif);
    background-repeat:no-repeat;
    background-position:3px center;
}
.main li a,.hmain li a{
    color:black;
    background-image:none;
}
.main ul,.hmain ul{
    display:none;  //收起子菜单
}
.hmain{
    float:left;  //浮动后会水平显示
    margin-right:1px;//相互之间加上间隔
}
app.js
$(document).ready(function(){
    $(".hmain").hover(function(){   //鼠标滑过触发事件
        $(this).children("ul").slideDown();
        changeIcon($(this).children("a"));
    },function(){
        $(this).children("ul").slideUp();
        changeIcon($(this).children("a"));
    });
});
如果我们想在点击后 改变菜单前面三角形图片的形状，可以用下面的函数
function changeIcon(mainNode){
    if(mainNode){
        if(mainNode.css("background-image").indexOf("collapsed.gif")>=0){
            mainNode.css("background-image","url('images/expanded.gif')");
        }else{
            mainNode.css("background-image","url('images/collapsed.gif')");
        }
    }
}
























