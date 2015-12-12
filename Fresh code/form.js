/**
 * Created by zhoufei on 2015/12/11.
 */
<input type="text" id="email">
        var  input = document.getElementById('email');
input.value;
<label><input type="radio" name="weekday" id="monday" value="1">Moday</label>
<label><input type="radio" name="weekday" id="thurday" value="2">Thurday</label>
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value;
tue.value;
mon.checked;
tue.checked;

var input =document.getElementById('email');
input.value = 'test@example.com';
<input type="date" value="2015-07-01">
<input type="color" value="#ff0000">
<form id="test-form" onsubmit="return checkForm()">
        <input type="text" name="test">
        <button type="submit">Submit</button>
        </form>
<script>
        function checkForm(){
            var form = document.getElementById('test-form');

            return true;
        }
</script>
<form id="login-form" method="post" onsubmit="return checkForm()">
        <input type="text" id="username" name="username">
        <input type="password" id="password" name="password">
        <button type="submit">Submit</button>
</form>
<script>
        function checkForm(){
            var pwd = document.getElementById('password');
            pwd.value = toMD5(pwd.value);
            return true;
        }
</script>
<form id="login-form" method="post" onsubmit="return checkForm()">
        <input type="text" id="username" name="username">
        <input type="password" id="input-password">
        <input type="hidden" id="md5-password" name="password">
        <button type="submit">Submit</button>
</form>
<script>
        function checkForm(){
            var input_pwd = document.getElementById('input-password');
            var md5_pwd = document.getElementById('md5-password');
            md5_pwd.value = toMD5(input_pwd.value);
            return true;
        }
</script>
var checkRegisterForm = function(){
    var username = document.getElementById('username');
    var passwd = document.getElementById('password');
    var passwd_2 = document.getElementById('password-2');
    var re = /[0-9a-zA-Z]{3,10}/;
    if (passwd.length<5 && passwd.length > 20){
        return false;
    }
    if (passwd != passwd2){
        return false;
    }
    if (re.test(username) === false){
        return false;
    }
    return true;
}