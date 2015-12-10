/**
 * Created by zhoufei on 2015/12/9.
 */
    <div id="test-div">
        <p id="test-js">javascript</p>
        <p>Java</p>
    </div>

    var js = document.getElementById('test-js');
    js.innerText = '<p>JavaScript</p>';
    js.style.color = '#ff0000';
    js.style.font-weight = 'bold';
<p id="js">javaScript</p>
        <div id="list">
        <p id="java">Java</p>
        <p id="python">Python</p>
        <p id="scheme">Scheme</p>
        </div>

        var js = document.getElementById('js');
list = document.getElementById('list');
list.appendChild(js);
var
    list = document.getElementById('list'),
    haskell =document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);
var d=document.createElement('style');
d.setAttribute('type','text/css');
d.innerHTML = 'p {color:red}';
document,getElementsByTagName('head')[0].appendChild(d);
document.getElementsByTagName('head')[0].appendChild(d);



var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell,ref);
list.insertBefore(haskell,ref);
