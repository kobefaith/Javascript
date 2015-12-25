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