判断变量为空
if (!name) {

}
加入name是字符串或者整形， 那么name = ""
或者name = 0 时，!name 为true
type of(name) === "undefined"
可以判断字符串或者数字是否存在、 是否填写

如果一个对象为空， 那么用forEach循环的时候， 循环不会被执行。
所以可以用如下的方法判断对象为空

function isEmpty(e) {
	for (var key in e) {
		return false;
	}
	return true;
}

判断数字是否为整数
if (age === parseInt(age))
	根据一些类型来执行相应代码的时候：
if (['incount', 'inmoney', 'outcount', 'outmoney'].indexOf(_key) !== -1)
	continue;

js中date可能会出现时区问题， 2017 - 04 - 03 和 2017 - 04 - 03 00: 00: 00 可能会差8个小时， 此问题需要咨询吴安 严康
es6中的object.assign
https: //developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign