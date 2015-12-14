/**
 * Created by zhoufei on 2015/12/13.
 */
var f = document.getElementById('test-file-upload');
var filename = f.value;
if(!filename || !(filename.endsWith('.jpg')||filename.endsWith('.png')||filename.endsWith('.gif'))){
    alert('Can only upload image file.');
    return false;
}
var fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
fileInput.addEventListener('change',function(){
    preview.style.backgroundImage = '';
    if (!fileInput.value){
        info.innerHTML = '没有选择文件';
        return;
    }
    var file = fileInput.files[0];
    info.innerHTML = '文件：'+file.name + '<br>'+
            '大小：'+file.size + '<br>'+
            '修改：'+file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
        alert('不是有效的图片文件！');
        return;
    }

    var reader  = new FileReader();
    reader.onload = function(e) {
        var
            data = e.target.result;
        preview.style.backgroundImage = 'url('+data+')';
    };
    reader.readAsDataURL(file);
});



var request;
if(windows.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHttp")
}


request.open("GET","get.php",true);
request.send();

request.open("POST","post.php",true);
request.send();

request.open("POST","create.php",true);
request.setRequestHeader("Content-type","application/X-www-form-urlencoded");
request.send("name=kobe&age=37");
