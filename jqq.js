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
		return this.exe(arg);
	}
	Init.prototype = {
		exe : function (args) {  
			var typeArgs = typeof args;
			switch (typeArgs) {   //如果传入的是字符串 自动转化成jqq对象
				case 'string' : 
					console.log('string')
					var jqObject = document.querySelectorAll(args),
						l = jqObject.length;
					this.length = l;
					for (var i = 0; i < l; i++) {
						this[i] = jqObject[i];
					};
					break;
				case 'function' :
				console.log('function')
					window.onload = args;
					break;
				case 'object' :  //如果传进来的是dom节点
				console.log('object')
					if (args.nodeType || args === window) {  //单个节点判断一下是不是window 
						this[0] = args;
					} else {  //nodeList 就直接转化成jqq对象
						var l = args.length;
						for (var i = 0; i < l; i++) {
							this[i] = args[i];
						};
					};
					break;
			};
		},
		each : function (func) {
			var l = this.length;
			for (var i = 0; i < l; i++) {
				func.call(this[i],i);
			};
		},
		css : function () {
			var args = arguments,
				argsL = arguments.length;
			if (argsL === 1) {
				var attr = args[0];
				if (typeof attr === 'string') {  //如果css 只传入一个参数只返回dom第一个元素的该css属性的值
					targetDom = this[0];  //第一个节点(目标节点) 在这里先转化成js对象用js的currentStyle 和 getComputedStyle
					return targetDom.currentStyle?targetDom.currentStyle[attr]:getComputedStyle(targetDom)[attr]; 
				} else if (typeof attr === 'object') {
					for (var i in attr) {
						this.each(function(){
							if (typeof attr[i] === 'number') //自动补全px
								attr[i] += 'px';
							this.style[i] = attr[i];
						})
					}
				}

			} else if (argsL === 2) {
				this.each(function(i) {
					this.style[args[0]] = args[1];
				});
			}
		},
		hasClass : function (attr) {  //如果至少有一个元素含有该class  就返回true 如果都没有则返回false
			var flag = false;
			var reg = new RegExp('\\b' + attr + '\\b');
			this.each(function(i) {
				if (reg.test( this.className ))
					flag = true;
			});
			return flag;
		},
		addClass : function (clN) {
			this.each(function(i) {
				var classN = this.className;
				if (!$(this).hasClass(clN)) {  //如果该元素没有该class增加该class
					var lastChar = classN[classN.length];  //class最后一个字符
					if (lastChar === 'undefined' || lastChar != '')  //判断class最后一个字符是不是空格或者有其他字符结尾自动在后面补充一个空格
						this.className += classN + ' ' + clN;
					  else 
					  	this.className += classN + clN;
				}
			})
		}
 	}

	window.$ = window.jqq =  $ ;
})()