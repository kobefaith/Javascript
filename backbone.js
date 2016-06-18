```
backbone view
作用：数据渲染和事件处理
view的属性和方法
属性                
el  $(el)    this.$el.find(".class")       
template     template:require("./content.tpl") Handlebars,_.template,Mustache      
tagName             
className     className:"specClassName"        
id            id:"myid"     
attributes          
events        events:{
                   "click.icon":"onClickOIcon",
                   "mouseover.title":"clickTitle"
              } 


方法
render              render:function(){
                         this.$el.html(this.template(this.model.attributes));
                         return this;
                    }
initialize          
construct           
remove              view.remove()
delegateevents      
undelegateEvents    itemView.undelegateEvents();     

backbone Model 是任何JavaScript应用的核心，包括与服务器的数据交互及其相关的大量逻辑。
Model属性
id|cid
urlRoot
url
defalut
isNew

url和 urlRoot的区别是：
1.如果model在collection内部，model的请求url是：/[collection.url]/[id]
2.如果model不在collection内部，且有urlRoot值，model的请求url是[urlRoot]/[id]
3.如果model不在collection内部，也没有定义urlRoot，那么model.url会被使用
方法
get|set
escape
toJSON
validate
fetch|save
destroy|clear|unset
sync
has|haschanged

===========
backbone collection是模型的有序集合。collection优势：性能   视图逻辑语义化
collection属性
model  model：new Model
length  返回该集合包含的模型数量
url     设置url属性 以指定集合对应的服务器位置 url:"/notes"
collection方法
toJSON initialize
add remove                             collection.add(model)
reset set get                          使用reset，将一个新的模型列表替换集合，最后触发一个单独的"reset"事件
fetch save
push pop unshift shift slice sort      collection.push(model,[options])
pluck                                  从集合中的每个模型中拉去attribute。等价于调用map，并从迭代器中返回单个属性 collection.pluck("name")
where findWhere                        collection.where({job:"Musketeer"});
parse                                  每一次调用fetch从服务器拉取集合的模型数据时，parse都会被调用
fetch clone                            collection.fetch(option)
create                                 在集合中创建一个模型的新实例
backbone 中的router history 是MVC中的control 负责监听URL的hash变化，调用不同的view渲染页面。
Backbone.history.start()让backbone启动
router属性 
routes route navigate
router和history的区别
history用于监听url的变化，以及出发action方法
router声明需要监听的url规则和action
单页面应用的两个问题：
前进后退问题，用户希望能通过浏览器的前进后退来查看以前的页面
中间状态保存：遇到想买的商品想把url保存下来，但是下次打开后还是页面的初始状态。
backbone的解决方案
前进后退  pushState （h5支持），onpopstate ，iframe hash 浏览器不支持h5时使用 
中间状态保存  router map
routes：{
     "":"index",
     "help","help"
}根据hash值来选择渲染不同的页面
backbone router map规则
路由参数:param
通配符 *
可选部分 (:optional)
search/:type/(p:page)可以匹配如下的url
//search/book
//search/person/p4
=========================
events: {  
    // 单击id为”save”的元素时，执行视图的add方法  
    'click #save': 'add',  
    'mousedown .button': 'show',  
    'mouseover .button': 'hide'  
}  
var model = new Backbone.Model();  
// 在model对象中向自定义事件custom绑定两个函数  
model.on('custom', function(p1, p2) {  
    // todo  
});  
model.on('custom', function(p1, p2) {  
    // todo  
});  
// 触发custom事件，将调用上面绑定的两个函数  
model.trigger('custom', 'value1', 'value2');  
// 移除custom事件中绑定的所有方法  
model.off('custom');  
// 触发custom事件，但不会执行任何函数，已经事件中的函数已经在上一步被移除  
model.trigger('custom');  
在单页应用中，我们通过JavaScript来控制界面的切换和展现，并通过AJAX从服务器获取数据。

可能产生的问题是，当用户希望返回到上一步操作时，他可能会习惯性地使用浏览器“返回”和“前进”按钮，而结果却是整个页面都被切换了，因为用户并不知道他正处于同一个页面中。

对于这个问题，我们常常通过Hash（锚点）的方式来记录用户的当前位置，并通过onhashchange事件来监听用户的“前进”和“返回”动作，但我们发现一些低版本的浏览器（例如IE6）并不支持onhashchange事件。

Backbone提供了路由控制功能，通过Backbone提供的路由器，我们能通过一个简单的表达式将路由地址和事件函数绑定在一起，例如：
var CustomRouter = Backbone.Router.extend({  
    routes : {  
        '' : 'index', // 当URL Hash在根目录时执行index方法：url#  
        'list' : 'getList', // 当URL Hash在list节点时执行getList方法：url#list  
        'detail/:id' : 'query', // 当URL Hash在detail节点时执行query方法，并将detail后的数据作为参数传递给query方法：url#list/1001  
        '*error' : 'showError' // 当URL Hash不匹配以上规则时, 执行error方法  
    },  
    index : function() {  
        alert('index');  
    },  
    getList : function() {  
        alert('getList');  
    },  
    query : function(id) {  
        alert('query id: ' + id);  
    },  
    showError : function(error) {  
        alert('error hash: ' + error);  
    },  
});  
  
var custom = new CustomRouter();  
Backbone.history.start();  


var Model = Backbone.Model.extend({
    defaults: {
        selectedId: undefined,
        items: [
            {
                "name": "One",
                "id": 1
            },
            {
                "name": "Two",
                "id": 2
            },
            {
                "name": "Three",
                "id": 3
            }
        ]
    }
});
 
var View = Backbone.View.extend({
    initialize: function(options) {
       // Re-render when the model changes
        this.model.on('change:items', this.render, this);
    },
 
    template: _.template($('#list-template').html()),
 
    events: {
        "#items li a": "setSelectedItem"
    },
 
    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
    },
 
    setSelectedItem: function(event) {
        var selectedItem = $(event.currentTarget);
       // Set all of the items to not have the selected class
        $('#items li a').removeClass('selected');
        selectedItem.addClass('selected');
       // Store a reference to what item was selected
        this.model.set('selectedId', selectedItem.data('id'));
        return false;
    }
});

仅仅渲染视图的一部分
var View = Backbone.View.extend({
    initialize: function(options) {
        this.model.on('change:a', this.renderA, this);
        this.model.on('change:b', this.renderB, this);
    },
 
    renderA: function() {
        $(‘#a’, this.$el).html(this.model.get(‘a’));
        return this;
    },
 
    renderB: function() {
        $(‘#b’, this.$el).html(this.model.get(‘b’));
        return this;
    },
 
    render: function() {
        this
            .renderA()
            .renderB();
    }
});
get  model.get(attribute) 
从当前model中获取当前属性(attributes)值，比如： note.get("title")

set  model.set(attributes, [options]) 
向model设置一个或多个hash属性(attributes)。如果任何一个属性改变了model的状态，在不传入 {silent: true} 选项参数的情况下，会触发 "change" 事件，更改特定属性的事件也会触发。 可以绑定事件到某个属性，例如：change:title，及 change:content。

note.set({title: "March 20", content: "In his eyes she eclipses..."});

book.set("title", "A Scandal in Bohemia");

sync  model.sync(method, model, [options]) 
使用 Backbone.sync 可以将一个模型的状态持续发送到服务器。 可以自定义行为覆盖。

fetch  model.fetch([options]) 
通过委托给Backbone.sync从服务器重置模型的状态。返回jqXHR。 如果模型从未填充数据时非常有用， 或者如果你想确保你有最新的服务器状态。 如果服务器的状态不同于当前属性的"change"事件将被触发。 接受 success 和 error回调的选项散列， 这两个回调都可以传递(model, response, options)作为参数。

// 每隔 10 秒从服务器拉取数据以保持频道模型是最新的
setInterval(function() {
  channel.fetch();
}, 10000);

var StudentView=Backbone.View.extend({
		//表示<tr></tr>元素
		tagName:"tr",
		
		//将相应模板写入template属性中，_.template()为underscore.js中的方法
		template:_.template($('#item-template').html()),

		//绑定该tr下的事件
		events:{
			"click .toggle":"toggleSelect",
			"dblclick td":"edit",
			"click a.destroy":"clear",
			"blur .edit":"close"
		},

		//初始化该View，listenTo监听model的事件
		initialize:function(){
			//model发生变化就重新渲染视图
			this.listenTo(this.model,'change',this.render);
			//销毁model
			this.listenTo(this.model,'destroy',this.remove);
		},

		//this.$el为该tr节点元素，将template渲染进该节点，并把model的值写入
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			//如果该行被选中，则切换样式
			this.$el.toggleClass('selected',this.model.get('selected'));
			return this;
		},

		//判断该行是否被选中，对应model中的selected属性
		toggleSelect:function(){
			this.model.toggle();
		},

		//双击td将样式变为可编辑
		edit:function(e){
			$(e.currentTarget).addClass("editing").find("input,select").focus();
		},

		//编辑状态下失去焦点，则修改完成
		close:function(e){
			var input=$(e.currentTarget);

			if(input.attr('name')=="name"){
				if(!input.val()){
					input.val(this.model.defaults().name);
				}
				this.model.save({"name":input.val()});
			}else if(input.attr('name')=="gender"){
				if(!input.val()||!(/(^[1-9]\d*$)/.test(input.val()))){
					input.val(this.model.defaults().age);
				}
				this.model.save({"gender":input.val()});
			}else{
				this.model.save({"age":input.val()});
			}
			input.parent().removeClass("editing");
		},

		//删除该行的时候删除相应model
		clear:function(){
			this.model.destroy();
        }
 }）





```