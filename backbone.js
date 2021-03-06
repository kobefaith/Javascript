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
var StudentView=Backbone.View.extend({
		//表示<tr></tr>元素
		tagName:"tr",  //把view绑定页面的标签


Events 是一个可以融合到任何对象的模块, 给予 对象绑定和触发自定义事件的能力. 
Events 在绑定之前 不需要声明, 并且还可以传递参数. 比如:
object.on(event, callback, [context])
model.on('change', this.render, this) 
object.trigger(event, [*args]) 
view.listenTo(model, 'change', view.render);
 你也可以在Models（模型），Collection（集合），Views（视图）上自由地触发这些事件，只要你认为合适。
 
 "add" (model, collection, options) — 当一个model（模型）被添加到一个collection（集合）时触发。
"remove" (model, collection, options) — 当一个model（模型）从一个collection（集合）中被删除时触发。
"reset" (collection, options) — 当该collection（集合）的全部内容已被替换时触发。
"sort" (collection, options) — 当该collection（集合）已被重新排序时触发。
"change" (model, options) — 当一个model（模型）的属性改变时触发。
"change:[attribute]" (model, value, options) — 当一个model（模型）的某个特定属性被更新时触发。
"destroy" (model, collection, options) —当一个model（模型）被destroyed（销毁）时触发。
"request" (model_or_collection, xhr, options) — 当一个model（模型）或collection（集合）开始发送请求到服务器时触发。
"sync" (model_or_collection, resp, options) — 当一个model（模型）或collection（集合）成功同步到服务器时触发。
"error" (model_or_collection, resp, options) — 当一个model（模型）或collection（集合）的请求远程服务器失败时触发。
"invalid" (model, error, options) — 当model（模型）在客户端 validation（验证）失败时触发。
"route:[name]" (params) —  当一个特定route（路由）相匹配时通过路由器触发。
"route" (route, params) — 当任何一个route（路由）相匹配时通过路由器触发。
"route" (router, route, params) — 当任何一个route（路由）相匹配时通过history（历史记录）触发。
"all" — 所有事件发生都能触发这个特别的事件，第一个参数是触发事件的名称。

constructor / initializenew Model([attributes], [options]) 
当创建model实例时，可以传入 属性 (attributes)初始值，这些值会被 set （设置）到 model。 如果定义了 initialize 函数，该函数会在model创建后执行。

new Book({
  title: "One Thousand and One Nights",
  author: "Scheherazade"
});
getmodel.get(attribute) 
从当前model中获取当前属性(attributes)值，比如： note.get("title")
setmodel.set(attributes, [options]) 
向model设置一个或多个hash属性(attributes)。如果任何一个属性改变了model的状态，
在不传入 {silent: true} 选项参数的情况下，会触发 "change" 事件，更改特定属性的事件也会触发。 
可以绑定事件到某个属性，例如：change:title，及 change:content。
note.set({title: "March 20", content: "In his eyes she eclipses..."});

book.set("title", "A Scandal in Bohemia");
hasmodel.has(attribute) 
属性值为非 null 或非 undefined 时返回 true。
idmodel.id 
id是model的特殊属性，可以是任意字符串（整型 id 或 UUID）。在属性中设置的 id 会被直接拷贝到model属性上。 
我们可以从集合（collections）中通过 id 获取model，另外 id 通常用于生成model的 URLs。
unsetmodel.unset(attribute, [options]) 
从内部属性散列表中删除指定属性(attribute)。 如果未设置 silent 选项，会触发 "change" 事件。
syncmodel.sync(method, model, [options]) 
使用 Backbone.sync 可以将一个模型的状态持续发送到服务器。 可以自定义行为覆盖。
// 每隔 10 秒从服务器拉取数据以保持频道模型是最新的
setInterval(function() {
  channel.fetch();
}, 10000);
savemodel.save([attributes], [options]) 
通过委托给Backbone.sync，保存模型到数据库（或替代持久化层）。
集合是模型的有序组合，我们可以在集合上绑定 "change" 事件，
从而当集合中的模型发生变化时fetch（获得）通知，集合也可以监听 "add" 和 "remove" 事件， 
从服务器更新，并能使用 Underscore.js 提供的方法。
集合中的模型触发的任何事件都可以在集合身上直接触发，
所以我们可以监听集合中模型的变化： documents.on("change:selected", ...)
modelcollection.model 
覆盖此属性来指定集合中包含的模型类。可以传入原始属性对象（和数组）来 add, create,和 reset，传入的属性会被自动转换为适合的模型类型。

var Library = Backbone.Collection.extend({
  model: Book
});
synccollection.sync(method, collection, [options]) 
使用 Backbone.sync来将一个集合的状态持久化到服务器。 可以自定义行为覆盖。
addcollection.add(models, [options]) 
向集合中增加一个模型（或一个模型数组），触发"add"事件
var ships = new Backbone.Collection;

ships.on("add", function(ship) {
  alert("Ahoy " + ship.get("name") + "!");
});

ships.add([
  {name: "Flying Dutchman"},
  {name: "Black Pearl"}
]);
resetcollection.reset([models], [options]) 
每次都是只添加和删除一个模型那没问题， 但有时，你需要改变很多模型，那么你宁愿只更新集合。  
使用reset，将一个新的模型（或属性散列）列表替换集合，最后触发一个但单独的"reset"事件。
调用collection.reset()，不传递任何模型作为参数 将清空整个集合。
getcollection.get(id) 
通过一个id，一个cid，或者传递一个model来 获得集合中 的模型。

var book = library.get(110);
sortcollection.sort([options]) 
强制对集合进行重排序。一般情况下不需要调用本函数，因为当一个模型被添加时， comparator 函数会实时排序。
要禁用添加模型时的排序，可以传递{sort: false}给add。 调用sort会触发的集合的"sort"事件。
atcollection.at(index) 
获得集合中指定索引的模型。不论你是否对模型进行了重新排序， at 始终返回其在集合中插入时的索引值。
pushcollection.push(model, [options]) 
在集合尾部添加一个模型。选项和add相同。
fetchcollection.fetch([options]) 
从服务器拉取集合的默认模型设置 ，成功接收数据后会setting（设置）集合。
开始创建一个自定义的路由类。当匹配了 URL 片段便执行定义的动作，并可以通过 routes 定义路由动作键值对。 请注意，你要避免在路由定义时使用前导斜杠：

var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search"   // #search/kiwis/p7
  },

  
  startBackbone.history.start([options]) 
当所有的 Routers 创建并设置完毕，调用 Backbone.history.start() 开始监控 hashchange 事件并分配路由。
extendBackbone.View.extend(properties, [classProperties]) 
开始创建自定义的视图类。 通常我们需要重载 render 函数，声明 events， 以及通过 tagName, className, 或 id 为视图指定根元素。
elview.el 
所有的视图都拥有一个 DOM 元素（el 属性），即使该元素仍未插入页面中去。 视图可以在任何时候渲染，然后一次性插入 DOM 中去，这样能尽量减少 reflows 和 repaints 从而获得高性能的 UI 渲染。 
this.el 可以从视图的 tagName, className, id 和 attributes 创建，如果都未指定，el 会是一个空 div。
$elview.$el 
一个视图元素的缓存jQuery对象。 一个简单的引用，而不是重新包装的DOM元素。
renderview.render() 
render 默认实现是没有操作的。 重载本函数可以实现从模型数据渲染视图模板，
var Bookmark = Backbone.View.extend({
  template: _.template(...),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
```