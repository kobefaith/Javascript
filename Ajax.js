Ajax跨域请求：
a.test.com 与b.test.com 之间进行通信的话，可以用iframe进行。
iframe可以在子域之间进行通信，比如上面两个就可以看做test.com的两个子域。
http://b.test.com/cross_sub_domain.html 利用这个页面做中间人，这个页面是b的域的页面，所以可以
与b域进行ajax通信，然后a域和这个中间人通过iframe进行通信，得到从b域得到的数据。
a.test.com 中
<iframe id="bfrm" style="display:none;" src="http://b.test.com/cross_sub_domain.html"></iframe>
<button class="btn-sm btn btn-primary" onclick="crossSubDomain();">跨子域请求</button>
<script>
function crossSubDomain() {
        document.domain = 'test.com'; // 提升域 关键操作
        window.frames['bfrm'].contentWindow.doAjax(function(data) {
            alert(data);
        });
    }
</script> 

http://b.test.com/cross_sub_domain.html 中
<script>
        document.domain = 'test.com';  //提升域 关键操作
        function doAjax(callback) {
            $.ajax('/test').done(function(data) {
                callback(data);//a域的回调函数可以得到b域的数据。
            });
        }

    </script>