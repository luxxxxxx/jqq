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
					var jqObject = document.querySelectorAll(args),
						l = jqObject.length;
					this.length = l;
					for (var i = 0; i < l; i++) {
						this[i] = jqObject[i];
					};
					break;
				case 'function' :
					window.onload = args;
					break;
				case 'object' :  //如果传进来的是dom节点
					if (args.nodeType || args === window) {  //单个节点判断一下是不是window 
						this[0] = args;
						this.length = 1;
					} else {  //nodeList 就直接转化成jqq对象
						var l = args.length;
						for (var i = 0; i < l; i++) {
							this[i] = args[i];
						};
						this.length = l;
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
					return targetDom.currentStyle ? targetDom.currentStyle[attr] : getComputedStyle(targetDom)[attr]; 
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
		eq : function (num) {  //返回指定位置的jqq对象
			return $(this[num]);
		},
		get : function (num) {
			return this[num];
		},
		first : function () {
			return $(this[0]);
		},
		last : function () {
			return $(this[this.length-1])
		},
		find : function (selector) {  //通过选择器名称来进行选择
			var objectArr = [],
				parentsL = this.length;
			this.each(function (i) {
				var targetDomArr = this.querySelectorAll(selector),
					targetDomArrL = targetDomArr.length;
				if (targetDomArrL != 0) {
					for (var j = 0; j < targetDomArrL; j++) {
						objectArr.push(targetDomArr[j])
					};
				};
			})
			var objectArrL = objectArr.length;
			for (var i = 0; i < objectArrL; i++) {
				this[i] = objectArr[i];
			}
			this.length = objectArrL;
			return this;
		},
		is : function (selector) {  //用一个表达式来检查当前选择的元素集合如果其中至少有一个给定的表达式就返回true
			var allDom = document.querySelectorAll(selector),
				l = allDom.length;
			this.each (function (i) {
				for (var j = 0; j < l; j++) {
					if (this == allDom[j]) {
						return true;
					}
				}
			});
			return false;
		},
		// has : function () {
		// 	var jqArr = [];
		// 	for (var i = 0; i < .length; i++) {
		// 		[i]
		// 	}
		// },
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
					var lastChar = classN[classN.length - 1];  //class最后一个字符
					if ( lastChar === undefined || lastChar === ' ')  //最后一个字符如果不存在 （也就是没有class的情况下）或者最后一个字符是空格
						this.className += clN;
					  else if ( lastChar != ' ')
					  	this.className += ' ' + clN;
				}
			})
		},
		removeClass : function (clN) {
			if (typeof clN === 'string') {
				this.each(function(i) {
					var classN = this.className;
					if ($(this).hasClass(clN)) {
						var clsArr = classN.split(' '),
							arrL = clsArr.length,
							fixArr = [];
						for (var i = 0; i < arrL; i++) {
							if (clsArr[i] != '' && clsArr[i] != clN) 
								fixArr.push(clsArr[i]);
						}
						this.className = fixArr.join(' ');
					};
				});
			} else if (typeof clN === 'object') {
				if (clN instanceof Array) {
					var l = clN.length;
					for (var i = 0; i < l; i++) {  //递归实现移除所有数组参数里面的class
						this.removeClass(clN[i]);						
					}
				} else {
					throw 'type error';
				}
			};
		},
 	}
	window.$ = window.jqq =  $;
})()