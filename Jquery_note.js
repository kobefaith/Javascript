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
jQuery选择器
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
jquery事件
<body>   
   <button>click</button>
   <button id="clickMeBtn">click</button>
</body>

$(document).ready(function(){
    //$("button").click(function(){
    //$("button").dblclick(function(){ 
    //$("button").mouseenter(function(){//鼠标移动到元素上时触发
    //$("button").mouseleave(function(){//鼠标移开时触发   
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
事件目标和冒泡
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
HTML元素捕获，设置，元素添加删除
<body>
    <p id="text">this is my webpage</p>
    <button id="btn1">点击</button>
    
</body>
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("text:" + $("#text").text());//获得text元素的内容
        alert("text:" + $("#text").html());//获得text元素的内容,与text的区别是可以获取内容中嵌入的标签
    });
});












