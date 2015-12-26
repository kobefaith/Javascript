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

