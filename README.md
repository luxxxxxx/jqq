# jqq
写一个jquery更加轻量级框架 虽然功能没有jq那么强大，但是里面包含着项目常用的方法 和jq一样利用了方便的链式操作 取名为jqq

当前版本    -v1.30

### API

+ 绑定window对象的方法

  > cookie 操作
  >
  > + getCookie (key)  //返回对应名字的cookie 
  > + setCookie (key , value , time)  
  > + removeCookie(key)
  >
  > Ajax 
  >
  > + Ajax ({json})   
  >
  >   + json.data  //传入参数对象  默认为空字符串 ''
  >
  >   + json.method  //get post 方法，默认为get
  >
  >   + asyn //是否异步 ，默认为异步
  >
  >   + success  //成功调用方法 此项可以不填
  >
  >   + error //失败调用方法  此项可以不填
  >
  >   + url //请求地址
  >
  >     ```javascript
  >     //例子
  >     Ajax({
  >       method : 'post',
  >       data : {
  >         userName : 'abc',
  >         passWord : '123'
  >       },
  >       url : './postAddress',
  >       success : (data) => {
  >        	
  >       },
  >       error : (err) => {  // err返回 xhr参数
  >         console.log(err.status)
  >       }
  >     })
  >
  >     ```
  >

+ 绑定window对象的变量、常量

  > Tween 算法  （用于运动框架各种运动曲线函数）




---

+ JQQ 方法

  > $   
  >
  > jqq      //两个方法效果一样
  >
  > ```javascript
  > //传入方法
  > $(function () {})  // window.onload = function () {}   
  > jqq(function () {})
  > //传入字符串
  > $('div')  //尝试返回jqq对象  
  > jqq('div')
  >
  > //传入dom节点
  > let dom = document.querySelector('#main'),
  >     doms = document.querySelectorAll('div');  //传入domList
  > $(dom);
  > jqq(dom);
  > $(doms);
  > jqq(doms);
  >
  > //不能够传入window 对象
  >
  >
  > ```
  >
  > #### jqq 中的dom操作
  >
  > each (funcion)  //遍历节点 
  >
  > ```javascript
  > jqq.each(function(dom,i){})
  > //dom 返回当前遍历的dom节点 dom类型
  > //i 返回当前遍历的 序列
  >
  >
  > ```
  >
  > eq (index)  
  >
  > ```javascript
  > jqq.eq(i)  //返回指定位置的jqq对象
  > ```
  >
  > get (index)
  >
  > ```javascript
  > jqq.get(i) //返回指定位置的dom对象
  > ```
  >
  > first 
  >
  > ```javascript
  > jqq.first()  //返回当前jqq对象组的第一个jqq对象
  > ```
  >
  > last
  >
  > ```javascript
  > jqq.last()  //返回当前jqq对象组的最后一个jqq对象
  > ```
  >
  > parent   //父节点
  >
  > ```javascript
  > jqq.parent()  //返回当前jqq对象组（第一个对象）的父元素的jqq对象
  > ```
  >
  > siblings   //兄弟节点
  >
  > ```javascript
  > jqq.siblings()  //返回当前jqq对象组(第一个对象)的所有兄弟节点的 jqq对象
  > ```
  >
  > remove  //移除节点
  >
  > ```javascript
  > jqq.remove()  //移除当前jqq对象组节点  
  > ```
  >
  > child(index)  //子节点
  >
  > ```javascript
  > jqq.child(index)  //返回当前jqq对象组(第一个对象)的对应序列的子元素的jqq对象
  > ```
  >
  > html  //html操作
  >
  > ```javascript
  > jqq.html(string)  //设置当前jqq对象组(所有dom对象)的innerHTML
  > jqq.html()  //返回当前jqq对象组(第一个dom对象)的innerHTML
  > ```
  >
  > text  //修改里面文本节点的
  >
  > ```javascript
  > jqq.text(str)  //设置当前对象组的文本 -- 测试 
  > ```
  >
  > empty  //清空所有子节点
  >
  > ```javascript
  > jqq.empty()  //清空当前jqq对象的所有子节点以及文本节点
  > ```
  >
  > ​
  >
  > ### jqq中的属性操作
  >
  > css({css : val })    //jqq对象组的css操作
  >
  > ```javascript
  > jqq.css('height')  //  返回jqq对象的height  注意：left right top bottom 返回 值没有'px'单位
  >
  > jqq.css({'height':'100px'})  // 设置jqq对象组的  height 并返回当前jqq对象组
  >
  > jqq.css({  //设置jqq对象组的css  并返回当前jqq对象组
  >   'height':'100px',
  >   'width' : '200px',
  >   'background-color' : 'red'
  > })
  >
  > ```
  >
  > getStyle(attr)   //返回dom节点属性  类似于  css
  >
  > ```javascript
  > jqq.getStyle(attr)  //返回当前jqq对象组（第一个对象）的元素属性 
  > ```
  >
  > width (num)  //返回或者设置当前jqq节点的宽度
  >
  > ```javascript
  > jqq.width()  //返回当前jqq对象组(第一个对象)的宽度
  >
  >
  > jqq.width(100)  //设置当前jqq对象组(第一个对象节点的宽度) 并返回当前节点
  > jqq.width('100px')  //两种方法一样的效果
  > ```
  >
  > height (num)  //返回或者设置当前jqq节点的高度
  >
  > ```javascript
  > //方法参考width 方法
  > ```
  >
  > top(num)  //返回或者设置当前jqq节点的top
  >
  > ```javascript
  > jqq.top()  //返回当前jqq对象组(第一个对象)的 top值 并返回当前节点
  >
  > jqq.top(100)  //设置当前jqq对象组(第一个对象)的 top值 并返回当前节点
  > jqq.top('100px')  //两种方法一样的效果
  > ```
  >
  > right(num)   //返回或者设置当前jqq节点的right
  >
  > ```javascript
  > //方法参考top方法
  > ```
  >
  > bottom(num)  //返回或者设置当前jqq节点的bottom
  >
  > ```javascript
  > //方法参考top方法
  > ```
  >
  > left(num)    //返回或者设置当前jqq节点的left
  >
  > ```javascript
  > //方法参考top方法
  > ```
  >
  > ​
  >
  > hasClass(className)   //返回当前jqq对象组是否存在一个子对象包含有该className
  >
  > ```javascript
  > jqq.hasClass('xixi')  //遍历当前jqq 对象 如果存在一个jqq子对象 包含有xixi的className 就返回true  如果所有都不包含 就返回false
  > ```
  >
  > addClass(className)   //给jqq对象组增加 class
  >
  > ```javascript
  > jqq.addClass('xixi')   //遍历当前的jqq对象组 并将所有子对象节点全部加上'xixi'的className
  > ```
  >
  > removeClass(className)  //给 jqq对象组移除class
  >
  > ```javascript
  > //方法参考addClass 方法
  > ```
  >
  > class (className)   //设置或者获取当前的class
  >
  > ```javascript
  > jqq.class()  //获取当前jqq对象组（第一个jqq对象）的className
  >
  >
  > jqq.class('xixi haha miaomiaomiao')  //遍历当前jqq对象组，强制另所有的jqq对象的className 设置为 传入的参数
  >
  > ```
  >
  > toggleClass (classN)  //class 来回转换
  >
  > ```javascript
  > jqq.toggleClass(classN)  //遍历当前的jqq对象组
  > //如果当前子对象的class 存在 传入的className 则移除该class  如果当前子对象的class 并不存在传入的className  则添加该class  最后返回当前jqq对象
  > ```
  >
  > attr (attr)   //设置或者获取jqq对象的 属性 attr
  >
  > ``` javascript
  > jqq.attr('attr')  //获取当前jqq对象组（第一个子对象）的该 attr值
  >
  >
  > jqq.attr('class','xixi')  //设置当前jqq对象组(第一个子对象)的 class  为  xixi
  > ```
  >
  > val  //获取value
  >
  > ```javascript
  > jqq.val()  //返回当前jqq对象(第一个子对象)的 value
  >
  > jqq.val('content')  //遍历jqq对象组,将所有的jqq对象节点的value 设置为 传入参数
  > ```
  >
  > ​
  >
  > ### jqq中的 运动框架
  >
  > move (obj)
  >
  > ```javascript
  > jqq.move({
  > 	targetJson,
  > 	time,
  > 	mf,
  > 	callback
  > })
  > // targetJson : left,width ....能够变换的属性和 变换的数值 
  > // time ： 运动时间 
  > // mf ： 运动曲线函数 
  > // cb : callback 回调函数
  > //
  > /*
  > 传参 jqq.move({
  > 	targetJson,
  > 	time,
  > 	mf,
  > 	callback
  > })
  > */
  > // 第一个元素实现move   只限一个元素
  >
  > ```
  >
  > ​
  >
  > ### jqq中的 事件操作
  >
  > bind (event,func)
  >
  > ```javascript
  > jqq.bind('click',function(e){})    //绑定事件 jqq对象
  >
  > jqq.bind({   //绑定多个事件  并返回当前jqq对象
  >   'click':function () {},
  >   'mouseover': function () {}
  > })
  >
  >
  > ```
  >
  > click (func) //绑定点击事件
  >
  > ```javascript
  > jqq.click(func)  //绑定点击事件
  > ```
  >
  > ​