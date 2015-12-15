/**
 * Created by zhoufei on 2015/12/15.
 */
<script>
    document.getElementById('keyword').oninput = function(){
    var keyword = this.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','keyword/hit?keyword=' +encodeURIComponent(keyword),true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            handleResult(xhr.responseText);
        }
    };
    xhr.send();
};
function handleResult(ret){
    ret = JSON.parse(ret);
    var domHits = document.getElementById('hits');
    if (ret.length){
        var lis = [];
        for (var i = 0; len = ret.length; i < len; ++i){
            lis.push('<li>' + ret[i] + '</li>');
        }
        domHits.innerHTML = lis.join('');
        domHits.style.display = 'block';
    }else{
        domHits.innerHTML = '';
        domHits.style.display = 'none';
    }
}
