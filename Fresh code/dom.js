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