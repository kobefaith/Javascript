/**
 * Created by zhoufei on 2015/12/15.
 */
<script>
    document.getElementById('keyword').oninput = function(){
    var keyword = this.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','keyword/hit?keyword=' +encodeURIComponent(keyword),true);
    xhr.onreadystatechange = function(){
        //0：未初始化
        //1：连接建立、请求发出
        //2：服务器返回响应
        //3：交互（处理响应数据）
        //4：完成，数据可交付客户端使用
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

function testCreateXhr(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://test/keyword/hit',true);
    xhr.setRequestHeader("content-Type","application/json");
    xhr.send(JSON.stringify({
        keyword:'c',
        other:'test'
    }));
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4 && xhr.status == 200) {

            console.log(xhr.responseText);

            console.log(xhr.responseXML);
            console.log(xhr.getAllResponseHeaders());
            console.log(xhr.getResponseHeader("Content-Type"));
            console.log(xhr.status);
            console.log(xhr.statusText);
        } // readyState 5种状态
        // 0: 未初始化
        // 1： 连接建立、请求发出
        // 2: 服务器返回响应
        // 3: 交互（处理响应数据）
        // 4: 完成，数据可交付客户端使用
        //						console.log('onreadystatechange: readyState:%d, status:%d, responseText:%s', xhr.readyState, xhr.status, xhr.responseText);
        // demo
    }

}
