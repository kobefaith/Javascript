/**
 * Created by zhoufei on 2015/12/13.
 */
var f = document.getElementById('test-file-upload');
var filename = f.value;
if(!filename || !(filename.endsWith('.jpg')||filename.endsWith('.png')||filename.endsWith('.gif'))){
    alert('Can only upload image file.');
    return false;
}
