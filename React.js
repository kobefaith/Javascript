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


























