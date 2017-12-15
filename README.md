# jqq
写一个jquery更加轻量级框架 虽然功能没有jq那么强大，但是里面包含着项目常用的方法 和jq一样利用了方便的链式操作 取名为jqq

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
  >
  > //传入字符串
  > $('div')  //尝试返回jqq对象  
  >
  > //传入dom节点
  > let dom = document.querySelector('#main'),
  >     doms = document.querySelectorAll('div');  //传入domList
  > $(dom);
  > $(doms);
  >
  > //不能够传入window 对象
  >
  >
  >
  >
  >
  > ```
  >
  > ​
  >
  >  