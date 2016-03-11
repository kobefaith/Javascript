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
