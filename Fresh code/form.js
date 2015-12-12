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
