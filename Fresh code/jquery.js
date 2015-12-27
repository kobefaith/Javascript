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


