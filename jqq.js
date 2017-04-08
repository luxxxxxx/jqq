/**
 *  Created on 2017/4/7
 *  version jqq-1.0
 *  Author luxxxxxx
**/
(function(){
	function $ (arg) {
		return new Init(arg);
	}
	function Init (arg) {
		if (typeof arg === 'string') 
			return this.exe(arg)
		else if (typeof arg === 'function')
			window.onload = arg;
	}
	Init.prototype = {
		exe : function (str) {  //如果传入的是字符串 自动转化成jqq对象
			var jqObject = document.querySelectorAll(str);
			this.length = 
			return jqObject;
		},
		each : function () {

		}
	}

	// var b = function (args) {
	// 	var i = new Init();
	// 	i.exe();
	// 	return i;
	// }
	// function Init () {
	// 	this.haha = function () {
	// 		alert('haha')	
	// 	}
	// }
	// Init.prototype = {
	//     exe : function () {
	//     	this.length = 10;
	//     }
	// }
	// b()
	window.$ = window.jqq =  $ ;
})()