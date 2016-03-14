var router=Backbone.Router.extend({
   routes:{
   '':'home'
   }
})
function crossAjax(){
    var url = 'http://b.test.com/test';
    $.ajax(url).done(function (data){
        alert(data);
    }).fail(function(){
        alert('请求失败');
    });
}