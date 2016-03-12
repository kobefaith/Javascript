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
get|set                model.set("title","我是title")
escape                 与get类似，只是返回的是HTML转义后版本的model属性值
toJSON                 model.toJSON()   
validate               validate:function(attrs,options){
                               if(attrs.end<attrs.start){
                                   return "can't end before it starts";
                               }
                       }
fetch|save             fetch默认get请求，也可以设置type=post destory:backbone.destory(success,fail)
destroy|clear|unset    model.clear()
sync
has|haschanged         model.has("title")   model.hasChanged("title")
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

