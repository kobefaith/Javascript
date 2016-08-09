React 的核心是组件，组件的设计目的是提高代码复用率、降低测试难度和代码复杂度。
react 不是mvc架构,只是相当于view部分。
JSX  javascript XML 
基于ECMAScript的一种新特性
一种定义带属性树结构的语法
JSX五个特点
类XML语法容易接受
增强js语义
结构清晰
抽象程度高
代码模块化
如何使用JSX
组件中的注释要在{}中
var HelloWorld = React.createClass({
    render:function(){
       return <p>Hello, world{
           /*
              comment 
            */
            "hello",
            //comment
       }</p>
    }
});
添加css
为给HelloWorld添加css  可以增加一个父节点 div 然后在div中增加style属性。
<script type="text/jsx">
       var style = {
            color:"red",
            border:"1px #000 solid",
       };
       var HelloWorld = React.createClass({
       render:function(){
           return <p>Hello,World</p>
       }
       });
       React.render(<div style={style}><HelloWorld></HelloWorld></div>,document.body);
</script>
条件判断语句：
在{}中不能使用if语句，所以需要替换，有四种方法
1 三元表达式：{this.props.name ? this.props.name : "world"}
2 使用函数,然后把函数的返回值赋给一个变量：
 var HelloWorld = React.createClass({
       getName:function(){
           if(this.props.name)
               return this.props.name
           else 
               return "World"
        },
       render:function(){
           var name = this.getName();
           return <p>Hello,{name}</p>
       }
});    
3 去掉方法2中的变量，直接在{}中调用函数：           
 render:function(){         
           return <p>Hello,{this.getName()}</p>
       }
4 使用比较运算符 this.props.name || "World"
var HelloWorld = React.createClass({       
       render:function(){           
           return <p>Hello,{this.props.name || "World"}</p>
       }
});    

函数表达式
var HelloWorld = React.createClass({       
       render:function(){           
           return <p>Hello,{
            (function(obj){
                if(obj.props.name)
                    return obj.props.name
                else 
                    return "World"
           })(this) //也可以把)放到(this)的后面，放到前面是返回函数的引用，放到后面是直接返回值
        }</p>
    }
});    
非DOM属性
dangerouslySetInnerHTML   ref   key
dangerouslySetInnerHTML :在JSX中直接插入HTML代码
ref：父组件引用子组件
key：提高渲染性能

var rawHTML = {
    __html: "<h1>I'm inner HTML </h1>"
}
React.render(<div style={style} dangerouslySetInnerHTML={rawHTML}></div>,
    document.body);
var HelloWorld = React.createClass({     
render:function(){
    return <ul>
            <li key="1">1</li>
            <li key="2">2</li>
            <li key="3">3</li>
        </ul>    
    }
});
列表类型的一定要加上key  能避免很多性能问题
   
组件声明周期
组件本质上是状态机。
初始化    运行中     销毁
初始化阶段的钩子函数
getDefaultProps //组件的第一个实例初始化的时候调用，后面就不会调用了，实例之间共享引用
getInitialsState//初始化每个实例特有的状态
componentWillMount//render之前最后一次修改状态的机会
render//只能访问this.props  this.state 只有一个顶层组件，不允许修改状态和DOM输出
componentDidMount//成功render并渲染完成真实DOM之后触发，可以修改DOM

运行中阶段
componentWillReceiveProps//属性传递给组件之前
shouldComponentUpdate//组件接收到新的属性的时候 如果返回false会阻止render调用
componentWillUpdate//不能修改属性和状态
render//只能访问this.props  this.state 只有一个顶层组件，不允许修改状态和DOM输出
componentDidUpdate//可以修改DOM
销毁阶段
componentWillUnmount

初始化节点函数用法实例
<script type="text/jsx">
       var style = {
            color:"red",
            border:"1px #000 solid",
       };
       var HelloWorld = React.createClass({
       getDefaultProps:function(){
           console.log("getDefaultProps, 1");
       },
       getInitialState:function(){
           console.log("getInitialState, 2");
           return null;//必须有返回 
       },
       componentWillMount:function(){
           console.log("componentWillMount, 3");
       },
       render:function(){
           console.log("render, 4");
           return <p>Hello,World</p>
       },
       componentDidMount:function(){
           console.log("componentDidMount, 5");
       },
       });
       React.render(<div style={style}><HelloWorld></HelloWorld></div>,document.body);
</script>

<script type="text/jsx">
    $(document).ready(
        function() {
            var count = 0;
            var style = {
                color: "red",
                border: "1px #000 solid",
            };
            var HelloWorld = React.createClass({
                getDefaultProps: function () {
                    console.log("getDefaultProps, 1");
                    return {name: "Tom"};
                },
                getInitialState: function () {
                    console.log("getInitialState, 2");
                    return {myCount: count++,
                            ready: false};
                },
                componentWillMount: function () {
                    console.log("componentWillMount, 3");
                    this.setState({ready: true});
                },
                render: function () {
                    console.log("render, 4");
                    return <p ref="childp">Hello, {this.props.name ? this.props.name : "World"}<br/>{"" + this.state.ready} {this.state.myCount}</p>;
                },
                componentDidMount: function () {
                    console.log("componentDidMount, 5");
                    $(React.findDOMNode(this)).append("surprise!");
                },
            });
            React.render(<div style={style}><HelloWorld></HelloWorld><br/><HelloWorld></HelloWorld></div>, document.body);
        }
    );
</script>
运行中阶段的函数用法实例
<script type="text/jsx">
    var style = {
        color: "red",
        border: "1px #000 solid",
    };
    var HelloWorld = React.createClass({
        componentWillReceiveProps: function () {
            console.log("componentWillReceiveProps 1");
        },
        shouldComponentUpdate: function () {
            console.log("shouldComponentUpdate 2");
            return true;
        },
        componentWillUpdate: function () {
            console.log("componentWillUpdate 3")
        },
        render: function () { 
            console.log("render 4");
            return <p>Hello, {this.props.name ? this.props.name : "World"}</p>;
        },
        componentDidUpdate: function() {
            console.log("componentDidUpdate 5");
        },
    });
    var HelloUniverse = React.createClass({
        getInitialState: function () {
            return {name: ''};
        },
        handleChange: function (event) {
            this.setState({name: event.target.value});
        },
        render: function () {
            return <div>
            <HelloWorld name={this.state.name}></HelloWorld>
            <br/>
            <input type="text" onChange={this.handleChange} />
            </div>
        },
    });
    React.render(<div style={style}><HelloUniverse></HelloUniverse></div>, document.body);
</script>
<script type="text/jsx">
    $(document).ready(
        function() {
            var style = {
                color: "red",
                border: "1px #000 solid",
            };
            var HelloWorld = React.createClass({
                componentWillReceiveProps: function (newProps) {
                    console.log("componentWillReceiveProps 1");
                    console.log(newProps);
                },
                shouldComponentUpdate: function () {
                    console.log("shouldComponentUpdate 2");
                    return true;
                },
                componentWillUpdate: function () {
                    console.log("componentWillUpdate 3");
                },
                render: function () { 
                    console.log("render 4");
                    return <p>Hello, {this.props.name ? this.props.name : "World"}</p>;
                },
                componentDidUpdate: function() {
                    $(React.findDOMNode(this)).append("surprise!");
                },
            });
            var HelloUniverse = React.createClass({
                getInitialState: function () {
                    return {name: ''};
                },
                handleChange: function (event) {
                    this.setState({name: event.target.value});
                },
                render: function () {
                    return <div>
                    <HelloWorld name={this.state.name}></HelloWorld>
                    <br/>
                    <input type="text" onChange={this.handleChange} />
                    </div>
                },
            });
            React.render(<div style={style}><HelloUniverse></HelloUniverse></div>, document.body);
        }
    );
</script>
销毁阶段函数运行实例
React.unmountComponentAtNode(document.getElementsByTagName("body")[0]);
销毁一个组件实例
<script type="text/jsx">
        var style = {
            color: "red",
            border: "1px #000 solid",
        };
        var HelloWorld = React.createClass({
            render: function () { 
                console.log("render 4");
                return <p>Hello, {this.props.name ? this.props.name : "World"}</p>;
            },
            componentWillUnmount: function() { //组件销毁时调用
                console.log("BOOOOOOOOOOOOOOOOOM!");
            },
        });
        var HelloUniverse = React.createClass({
            getInitialState: function () {
                return {name: ''};
            },
            handleChange: function (event) {                
                if (event.target.value == "123") {
                    React.unmountComponentAtNode(document.getElementsByTagName("body")[0]);
                    return;
                }
                this.setState({name: event.target.value});
            },
            render: function () {
                return <div>
                <HelloWorld name={this.state.name}></HelloWorld>
                <br/>
                <input type="text" onChange={this.handleChange} />
                </div>
            },
        });
        React.render(<div style={style}><HelloUniverse></HelloUniverse></div>, document.body);
    </script>

React属性
使用属性的方法
1 键值对 
  <HelloWorld name= ? /> ?处可以是"Tim" {123} {"Tim" {[1,2,3]}  {variable}
  
2 展开
var props={
    one:"123",
    two:321
}
<HelloWorld {...props}/>
加上...后 组件会自动展开对象中的属性
3 直接调用setProps  //不常用
var instance=React.render(<HelloWorld></HelloWorld>,
    document.body);
instance.setProps({name:"Tim"});
状态的含义和用法
getInitialState:初始化每个实例特有的状态
setState：更新组件状态
熟悉和状态的相似点
    都是纯js对象
    都会触发render更新
    都具有确定性
                         属性   状态
能否从父组件获取初始值    能     否
能否由父组件修改          能     否
能否在组件内部设置默认值  能     能
能否在组件内部修改        不能   能
能否设置子组件的初始值    能     不能
能否修改子组件的值        能     不能

react事件
组件中的方法包括：React自有方法和 用户自定义方法
React事件：
触摸事件：onTouchCancel    onTouchEnd   onTouchMove onTouchStart
键盘：onKeyDown  onKeyPress  onKeyUp 
剪切:onCopy  onCut  onPaste
表单：onChange   onInput  onSubmit
焦点：onFocus  onBlur  
UI元素：onScroll
滚动：onWheel
鼠标：onClick  onContextMenu //右键事件  onDoubleClick   onMouseDown
onMouseEnter  onMouseLeave  onMouseMove  onMouseOut
onMouseOver onMouseUp
拖拽事件
onDrop  onDrag   onDragEnd  onDragEnter  onDragExit
onDragLeave   onDragOver  onDragStart  
<script type="text/jsx">
    var HelloWorld = React.createClass({
        handleChange: function (event) {
            console.log(event.target.value);
        },
        render: function () {
            return <div>
            <input onChange={this.handleChange}></input> //输入框中的内容发送变化会触发事件处理函数。
            </div>;
        },
    });
    React.render(<HelloWorld></HelloWorld>, document.body);
</script>
事件对象
handleChange:function(event){//event是事件对象
    console.log(event.target.value);//target是事件对象的属性
}
鼠标滚动来改变颜色
<script type="text/jsx">
    var HelloWorld = React.createClass({
        getInitialState: function () {
            return {
                backgroundColor: '#FFFFFF'
            }
        },
        handleWheel: function (event) {
            var newColor = (parseInt(this.state.backgroundColor.substr(1), 16) + event.deltaY * 997).toString(16);//deltaY是3或-3 ，997是为了放大变化，16表示16进制
            newColor = '#' + newColor.substr(newColor.length - 6).toUpperCase();//生成新的颜色
            this.setState({
                backgroundColor: newColor
            })
        },
        render: function () {
            console.log(this.state)
            return <div onWheel={this.handleWheel} style={this.state}>
            <p>Hello, World</p>
            </div>;
        },
    });
    React.render(<HelloWorld></HelloWorld>, document.body);
</script>
键盘事件实例
<script type="text/jsx">
    var HelloWorld = React.createClass({
        getInitialState: function () {
            return {
                password: ''
            }
        },
        handleKeyPress: function (event) {
            this.setState({
                password: this.state.password + event.which//修改密码，将密码加上输入的按键值
            });
            console.log(this.state)
        },
        handleChange: function (event) {
            event.target.value = '';
        },
        render: function () {
            return <div>
            <input onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
            <p style={{
                'display': this.state.password.indexOf('495051') >= 0 ? 'inline' : 'none'
                }}>You got it!</p>
            </div>;
        },
    });
    React.render(<HelloWorld></HelloWorld>, document.body);
</script>
事件和状态的关联
<script type="text/jsx">
    var HelloWorld = React.createClass({
        getInitialState: function () {
            return {//初始化状态
                x: 0,
                y: 0
            }
        },
        handleMouseMove: function (event) {
            this.setState({ //将鼠标移动的位置设置给状态
                x: event.clientX,
                y: event.clientY
            });
        },
        render: function () {
            return <div onMouseMove={this.handleMouseMove} style={{//div元素的css样式设置
                height: '1000px',
                width: '700px',
                backgroundColor: 'gray'
            }}>
            {this.state.x + ', ' + this.state.y}
            </div>;
        },
    });
    React.render(<HelloWorld></HelloWorld>, document.body);
</script>
组件的协同
组件协同本质上是对组件的一种组织、管理方式。
目的：逻辑清晰  代码模块化   封装细节   代码可复用
第一种协同方式：
组件嵌套 用一个父组件来包含若干个子组件
第二种 Mixin 
组件嵌套的本质是父子关系
父组件通过传递属性给子组件来实现通信，
子组件很难与父组件通信，可以在父组件中将事件处理函数通过属性传递给子组件，
然后子组件触发事件后可以调用父组件的事件处理函数，这样间接地实现通信
这种方式叫做委托
<script type="text/jsx">
    var GenderSelect = React.createClass({
        render: function() {
            return <select onChange={this.props.handleSelect}>//此处是将处理函数委托给了父组件
            <option value="0">男</option>
            <option value="1">女</option>
            </select>
        }
    })
    var SignupForm = React.createClass({
        getInitialState: function() {
            return {
                name: '',
                password: '',
                gender: '',
            }
        },
        handleChange: function(name, event) {
            var newState = {}
            newState[name] = event.target.value
            this.setState(newState)
        },
        handleSelect: function(event) {
            this.setState({gender: event.target.value})
        },
        render: function() {
            console.log(this.state)
            return <form>
            <input type="text" placeholder="请输入用户名" onChange={this.handleChange.bind(this, 'name')} />
            <input type="password" placeholder="请输入密码" onChange={this.handleChange.bind(this, 'password')} />
            <GenderSelect handleSelect={this.handleSelect}></GenderSelect>//父组件通过属性的方式将处理函数传递给子组件，实现委托。
            </form>
        }
    })
    React.render(<SignupForm></SignupForm>, document.body);
</script>
onChange={this.handleChange.bind(this, 'name')}  bind是es5中新加上的，后面的字符串是传递给函数的参数。
这样两个onChange事件共用一个事件处理函数。实现代码复用，用参数来区分。
Mixin是一组方法。
目的是横向抽离出组件的相似代码。
优点是：
代码复用：抽离出通用代码，减少开发成本，提高开发效率
即插即用：可以直接使用许多现有的Mixin来编写自己的组件
适应性强：改动一次代码，影响多个组件。
缺点：
编写难度高：Mixin可能被用在各种环境中，兼容多种环境就需要更多的逻辑和代码，通用的代价是提高复杂度。
降低代码的可读性：组件的优势在于将逻辑和界面直接结合在一起，Mixin本质上会分散逻辑，理解起来难度更大。
<script>
var BindingMixin = {
        handleChange: function(key) {
            var that = this//函数中嵌套函数的话 ，函数中的this会指向全局
            var newState = {}
            return function(event) {                
                newState[key] = event.target.value
                that.setState(newState)
            }
        }
    }
    var BindingExample = React.createClass({
        //mixins: [React.addons.LinkedStateMixin],
        mixins: [BindingMixin],//指定使用哪个Mixin,Mixin里面的东西会变成组件中的东西，handleChange 会变成组件中的函数。
        getInitialState: function() {
            return {
                text: '',
                comment: '',
            }
        },
        render: function() {
            return <div>
                <input type="text" placeholder="请输入内容" onChange={this.handleChange('text')}/>
                <textarea onChange={this.handleChange('comment')}></textarea>
                <p>{this.state.text}</p>
                <p>{this.state.comment}</p>
            </div>
        }
    })
    React.render(<BindingExample></BindingExample>, document.body);
</script>
不可控组件与可控组件
<input type="text" defaultValue="HelloWorld"/>
defaultValue 不可更改，是不可控的。如果要得到defaultValue的话需要得到dom来操作，不能通过state来操作。
<input type="text" defaultValue={this.state.value}/>
var inputValue=this.state.value
defaultValue是可以设置的，所以是可以控制的。
组件可控的好处是：
符合react 的数据流
数据存储在state中，便于使用
便于对数据进行处理（使用setstate来处理数据）
不可控组件的实例：
<script>
    var MyForm = React.createClass({ 
        submitHandler: function (event) {
            event.preventDefault();
            var helloTo = React.findDOMNode(this.refs.helloTo).value; 
            alert(helloTo);
        },
        render: function () {
            return <form onSubmit={this.submitHandler}> 
                <input
                    ref="helloTo"
                    type="text"
                    defaultValue="Hello World!" />
                <br />
                <button type="submit">Speak</button>
            </form>;
        } 
    });
    React.render(<MyForm></MyForm>, document.body);
</script>
可控组件的实例：
<script type="text/jsx">
    var MyForm = React.createClass({ 
        getInitialState: function () {
            return {
                helloTo: "Hello World!"
            }; 
        },
        handleChange: function (event) { 
            this.setState({
                helloTo: event.target.value
            });
        },
        submitHandler: function (event) {
            event.preventDefault();
            alert(this.state.helloTo); 
        },
        render: function () {
            return <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.helloTo} onChange={this.handleChange} />
                <br />
                <button type="submit">Speak</button>
            </form>;
            } 
        });
    React.render(<MyForm></MyForm>, document.body);
</script>
=================================================
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      // ** Our code goes here! **
    </script>
  </body>
</html>
上面代码有两个地方需要注意。首先，最后一个 <script> 标签的 type 属性为 text/babel 。
这是因为 React 独有的 JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 type="text/babel" 。
其次，上面代码一共用了三个库： react.js 、react-dom.js 和 Browser.js ，它们必须首先加载。其中，react.js 是 React 的核心库，react-dom.js 是提供与 DOM 相关的功能，Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成。

$ babel src --out-dir build
上面命令可以将 src 子目录的 js 文件进行语法转换，转码后的文件全部放在 build 子目录。
ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
上面代码将一个 h1 标题，插入 example 节点，运行结果如下。
HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);
上面代码体现了 JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
遇到代码块（以 { 开头），就用 JavaScript 规则解析。
JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);

React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。
React.createClass 方法就用于生成一个组件类
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
上面代码中，变量 HelloMessage 就是一个组件类。
模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。
所有组件类都必须有自己的 render 方法，用于输出组件。
注意，组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。
另外，组件类只能包含一个顶层标签，否则也会报错。
组件的用法与原生的 HTML 标签完全一致，可以任意加入属性，比如 <HelloMessage name="John"> ，
就是 HelloMessage 组件加入一个 name 属性，值为 John。
组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取。
添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，
这是因为 class 和 for 是 JavaScript 的保留字。
this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。
它表示组件的所有子节点
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);
这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;
如果有一个子节点，数据类型是 object ；
如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。
React 提供一个工具方法 React.Children 来处理 this.props.children 。
我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。
组件的属性可以接受任意值，字符串、对象、函数等等都可以。
有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。
组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});
上面的Mytitle组件有一个title属性。PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。
现在，我们设置 title 属性的值是一个数值。
var data = 123;

ReactDOM.render(
  <MyTitle title={data} />,
  document.body
);
后台显示如下错误：
Warning: Failed propType: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`.
此外，getDefaultProps 方法可以用来设置组件属性的默认值。
var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

ReactDOM.render(
  <MyTitle />,
  document.body
);
组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。
只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，
然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性
var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);

上面代码中，组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。
这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。
为了做到这一点，文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
React 组件支持很多事件，除了 Click 事件以外，还有 KeyDown 、Copy、Scroll 等
组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);

上面代码是一个 LikeButton 组件，它的 getInitialState 方法用于定义初始状态，
也就是一个对象，这个对象可以通过 this.state 属性读取。
当用户点击组件，导致状态变化，this.setState 方法就修改状态值，
每次修改以后，自动调用 this.render 方法，再次渲染组件。
由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。
一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，
而 this.state 是会随着用户互动而产生变化的特性。

用户在表单填入的内容，属于用户跟组件的互动，所以不能用 this.props 读取
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.body);

组件的生命周期分成三个状态：
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()

两种特殊状态处理
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Hello name="world"/>,
  document.body
);
上面代码在hello组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔100毫秒，就重新设置组件的透明度，从而引发重新渲染。
另外，组件的style属性的设置方式也值得注意，不能写成
style="opacity:{this.state.opacity};"
而要写成
style={{opacity: this.state.opacity}}

Ajax
var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.body
);

http://www.ituring.com.cn/article/211352
http://www.zhihu.com/question/29504639?sort=created
















