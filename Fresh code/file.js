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
        info.innerHTML = 'û��ѡ���ļ�';
        return;
    }
    var file = fileInput.files[0];
    info.innerHTML = '�ļ���'+file.name + '<br>'+
            '��С��'+file.size + '<br>'+
            '�޸ģ�'+file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
        alert('������Ч��ͼƬ�ļ���');
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
