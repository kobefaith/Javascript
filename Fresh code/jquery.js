/**
 * Created by zhoufei on 2015/12/25.
 */
var div = $('abc');
var divDom = div.get(0);
var another = $(divDom);

var ps = $('p');
ps.length;

var a = $('.red');
var a = $('.red.green');
<div class="red green">color</div>

var email = $('[name=email]');

var icons = $('[name^=icon]');
var name = $('[name$=with]');

var icons = $('[class^="icon-"]');

var emailInput = $('input[name=email]');
var tr = $('tr.red');
$('p,div');
$('p.red,p.green');



<div class="testing">
    <ul class="lang">
    <li class="lang-javascript">Javascript</li>
    <li class="lang-python">Python</li>
    <li class="lang-lua">Lua</li>
    </ul>
    </div>
    $('ul.lang li.lang-javascript');
$('div.testing li.lang-javascript');
$('ul.lang li');
$('form[name=upload] input');
$('form.test p input');
$('ul.lang li');
$('ul.lang li:first-child');
$('ul.lang li:last-child');
$('ul.lang li:nth-child(2)');
$('ul.lang li:nth-child(even)');
$('ul.lang li:nth-child(odd)');


<div class="test-selector">
    <ul class="test-lang">
    <li class="lang-javascript">JavaScript</li>
    <li class="lang-python">Python</li>
    <li class="lang-lua">Lua</li>
    </ul>
    <ol class="test-lang">
    <li class="lang-swift">Swift</li>
    <li class="lang-java">Java</li>
    <li class="lang-c">C</li>
</ol>
</div>


selected = $('div.test-selector li');
selected = $('ul.test-lang li');
selected = $('ol.test-lang li');
selected = $('ul.test-lang li.lang-javascript');
selected = $('ul.test-lang li.lang-lua');
selected = $('ol.test-lang li.lang-c');


<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
    </ul>
var ul = $('ul.lang');
var dy = ul.find('.dy');
var swf = ul.find('#swift');
var hsk = ul.find('[name=haskell]');
var swf = $('#swift');
var parent = swf.parent();
var a = swf.parent('div.red');

var swift = $('#swift');
swift.next();//Scheme
swift.next('[name=haskell]');
swift.prev();//Python
swift.prev('.js');


var langs = $('ul.lang li');
var a = langs.filter('.dy');

var langs = $('ul.lang li');
langs.filter(function(){
    return this.innerHTML.indexOf('S') === 0;
});
var langs=$('ul.lang li');
var arr = langs.map(function(){
    return this.innerHTML;
}).get();

var langs = $('ul.lang li');
var js = langs.first();
var haskell = langs.last();
var sub = langs.slice(2,4);


<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java</li>
    </ul>

    $('#test-ul li[name=book]').text();

$('#test-ul li[name=book]').html();

var j1 = $('#test-ul li.js');
var j2 = $('#test-ul li[name=book]');
j1.html('<span style="color : red">JavaScript</span>');
j2.text('JavaScript & ECMAScript');


<ul id="test-css">
    <li class="lang dy"><span>Javascript</span></li>
<li class="lang"><span>Java</span></li>
<li class="lang dy"><span>Python</span></li>
<li class="lang"><span>Swift</span></li>
<li class="lang dy"><span>Scheme</span></li>
</ul>
$('#test-css li.dy>span').css('background-color','#ffd351').css('color','red');



<div id="test-highlight-css">
    <ul>
    <li class="py"><span>Python</span></li>
<li class="js"><span>JavaScript</span></li>
<li class="sw"><span>Swift</span></li>
<li class="hk"><span>Haskell</span></li>
</ul>
</div>
var div = $('#test-hightlight-css');
div.find('.js').addClass('hightlight');
var a = $('a[target=_blank]');
a.hide();
a.show();
$(window).width();
$(window).height();
$(document).width();
$(document).height();
var div = $('#test-div');
div.width();
div.height();
div.width(400);
div.height('200px');



var div = $('#test-div');
div.attr('data');
div.attr('name');
div.attr('name','Hello');
div.removeAttr('name');
<input id="test-input" name="email" value="">
        <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
    <option value="SH" >shanghai</option>
        <option value="SZ">shenzhen</option>
        </select>
        <textarea id="test-textarea">hello</textarea>

var
    input = $('#test-inout'),
    select = $('#test-select'),
    textarea = $('#test-textarea');
input.val();
input.val('abc@example.com');
select.val();
select.val('SH');

textarea.val();
textarea.val('Hi');


<div id="test-div">
        <ul>
        <li><span>Javascript</span></li>
    <li><span>python</span></li>
    <li><span>swift</span></li>
    </ul>
    </div>

    var ul = $('#test-div>ul');
ul.append('<li><span>haskell</span></li>');


var ps = document.createElement('li');
ps.innerHTML = '<span>pascal</span>';
ul.append(ps);
ul.append($('#scheme'));
ul.append(function (index,html){
    return '<li><span>language-'+index'</span></li>';
});



var js = $('#test-div>ul>li:first-child');
js.after('<li><span>Lua</span></li>');
var li = $('#test-div>ul>li');
li.remove();

var js = $('#test-div>ul>li:first-child');
js.after('<li><span>Lua</span></li>');
$('#test-div>ul>li:nth-child(2)').after('<li><span>Pascal</span></li>');
$('#test-div>ul>li:nth-child(4)').after('<li><span>Ruby</span></li>');

<a id="test-link" href="#0">点我试试</a>
        var a = $('#test-link');
a.on('click',function(){
    alert('Hello!');
});
a.click(function (){
    alert('hello!');
})
$(document).ready(function (){
    $('#testForm').submit(function (){
        alert('submit!');
    });
});
$(function (){
    console.log('init A...');
});
$(function (){
    console.log('init B...');
});
$(function (){
    console.log('init C...');
});
$(function (){
    $('#testMouseMoveDiv').mousemove(function (e){
        $('#testMouseMoveSpan').text('pageX = '+ e.pageX +',pageY='+ e.pageY );
    });
});
function hello(){
    alert('hello!');
}
a.click(hello);
setTimeout(function (){
    a.off('click',hello);
},1000);



var input = $('#test-input');
input.val('change it!');
input.change();

$(function(){
    window.open('/');
});
var button1 = $('#testPopButton1');
var button2 = $('#testPopButton2');
function popupTestwindow(){
    window.open('/');
}
button1.click(function (){
    popupTestWindow();
});
button2.click(function (){
    setTimeout(popupTestwindow,100);
});

var div = $('test-show-hide');
div.hide(3000);

var div = $('test-show-hide');
div.show('slow');
var div = $('#test-slide');
div.slideUp(3000);
var div = $('#test-fade');
div.fadeOut('slow');

var div = $('#test-animate');
div.animate({
    opacity:0.25,
    width:'256px',
    height:'256px',
},3000);

var div = $('#test-animates');
div.slideDown(2000)
    .delay(1000)
    .animate({
        width:'256px',
        height:'256px',
    },2000)
    .delay(1000)
    .animate({
        width:'128px',
        height:'128px'
    },2000);
function deleteFirstTR(){
    var tr = $('#test-table>tbody>tr:visable').first();
    tr.fadeOut('slow');
}

var jqxhr = $.get('/path/to/resource',{name:'bob lee',check:1});

var jqxhr = $.post('/path/to/resource',{name:'bob lee',check:1});
var jqxhr = $.getJSON('/path/to/resource',{
    name:'bob lee',
    check:1
}).done(function (data){

});
$.fn.highlight1 = function(){
    this.css('backgroundColor','#fffceb').css('color','#d85030');
    return this;
}
$.fn.highlight2 = function (options){
    var bgcolor = options && options.backgroundColor || '#fffceb';
    var color = options && options.color || '#d85030';
    this.css('backgroundcolor',bgcolor).css('color',color);
    return this;
}
$('#test-highlight2 span').highlight2({
    backgroundColor:'#00a8e6',
    color:'#ffffff'
});
$.fn.highlight = function (options){
    var opts = $.extend({}, $.fn.highlight.defaults,options);
    this.css('backgroundColor',opts.backgroundColor).css('color',color);
    return this;
}
$.fn.highlight.defaults = {
    color:'#d85030',
    backgroundColor:'#fff8de'
}

$.fn.external = function() {
    return this.filter('a').each(function (){
        var a=$(this);
        var url = a.attr('href');
        if (url && (url.indexOf('http://')===0 || url.indexOf('http://')===0)){
            a.attr('href','#0')
                .removeAttr('target')
                .append('<i class="uk-icon-external-link"></i>')
                .click(function (){
                    if(confirm('你确定要前往'+url+'?')){
                        window.open(url);
                    }
                });
        }
    });
}