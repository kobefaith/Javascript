npm install  wepy-cli -g
wepy init standard wepy-demo
npm install 
wepy build --watch

微信开发者工具中添加 编译好的dist目录。
开发者工具的 右上角的详情
关闭ES6转ES5。重要：漏掉此项会运行报错。
关闭上传代码时样式自动补全 重要：某些情况下漏掉此项会也会运行报错。
项目-->关闭代码压缩上传 重要：开启后，会导致真机computed, props.sync 等等属性失效。#270
小程序分包加载。https://blog.csdn.net/acmdown/article/details/80037660
