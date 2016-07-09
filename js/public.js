var common={
	//获取ID
	getId:function(id){
		return document.getElementById(id);
	},

	//获取className
	getClassName:function(oParent,cls){    //oParent为选取className的父级元素，cls是匹配的classnName
		var oEle=oParent.getElementsByTagName('*'),arr=[];
		for(var i=0;i<oEle.length;i++){
			if(oEle[i].className==cls){
				arr.push(oEle[i]);
			}
		}
		return arr;
	},

	//递归求和
	dgui:function (num){
		var sum=0;
		if(num<=0){
			return num=0;
		}else{
			sum=num+common.dgui(num-1);
			return sum;
		}
	},

	//冒泡排序
	BubbleSort:function(array){
		var arr=array;
		for(var i=0;i<arr.length;i++){
			for(var j=0;j<arr.length-i;j++){
				if(arr[j]>arr[j+1]){
					var temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}
		}
		return arr;
	},

	//选择排序
	ChooseSort:function(arr){
		var mark=0,num=0;
		for(var i=0; i<arr.length-1; i++){
			num = arr[i];
			mark = i;
			for(var j = i+1; j<arr.length;j++){
				if(num > arr[j]){
					num = arr[j];
					mark = j;
				}		
			}
			arr[mark] = arr[i];
			arr[i] = num;
		}
		return arr;
	},

	//插入已经排好序的数组，插入后保持排序次序
	InsertNum:function(arr,num){
		var index=arr.length,j=0;
		for(var i=0;i<arr.length;i++){
			if(arr[i]>=num){
				index=i;
				break;
			}	
		}
		for(var i=arr.length;i>index;i--){
				arr[i]=arr[i-1];
		}
		arr[index]=num;
		return arr;
	},

	//随机n位数,区分大小写
	RandomNum:function(n){
		var str='',arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		for(var i=0;i<n;i++){
			 str+=arr[parseInt((Math.random()*100)%62)];
		}
		return str;
	},

	//时间戳转换日期格式对象
	TimeToDate:function(num){
		if(parseInt(num)<10){
			num=num*1000;
		}
		var date=new Date(num);
		return{
				year  :   date.getFullYear(),
				month :   date.getMonth()+1,
				date  :   date.getDate(),
				day   :   date.getDay(),
				hours :   date.getHours(),
				minutes : date.getMinutes(),
				seconds : date.getSeconds(),
				milliSecond:date.getMilliseconds()
		}
	},

	//日期格式转换，12:9->12:09
	changeNum:function(n){
		if(n<10){
			return n='0'+n;
		}
		return n;
	},

	//字符串截取substring();
	strCutOut:function(str,n){
		return str.substring(n,str.length);
	},
	
	//字符串替换
	strReplace:function(arr,index,n){
		return arr.splice(index,n);
	},

	//属性获取
	getStyle:function(obj,attr){
		if(obj.currentStyle){			//IE特有
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,null)[attr]; //其他浏览器
		}
	},


	//属性获取
	getStyle:function(obj,attr){
		if(obj.currentStyle){			//IE特有
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,null)[attr]; //其他浏览器
		}
	},
	//ajax对象封装
	oAjax:function(){
		if(window.XMLHttpRequest){
			return new XMLHttpRequest;
		}else{
			return new ActiveXobject('Microsoft HttpRequest');
		}
	},

	//drag拖拽效果
	drag:function(container,obj){        //container为拖动的Div,obj为鼠标按下的显示拖动的对象
		var oDiv=common.getId(container);
		var oBtn=common.getId(obj);
		oBtn.onmousedown=function(ev){			//鼠标按下时记录鼠标与obj的相对距离dis
			var oEvent=ev||event;
			var disx=oEvent.clientX-oDiv.offsetLeft;
			var disy=oEvent.clientY-oDiv.offsetTop;

			document.onmousemove=function(ev){	//鼠标移动时始终保持鼠标与obj的相对距离不变client-dis
				var oEvent=ev||event;
				var l=(document.documentElement.clientWidth||document.body.clientWidth)-oDiv.offsetWidth;
				var t=(document.documentElement.clientHeight||document.body.clientHeight)-oDiv.offsetHeight;
				oDiv.style.left=oEvent.clientX-disx+'px';
				oDiv.style.top=oEvent.clientY-disy+'px';
				if(parseInt(oDiv.style.left)>=l){
					oDiv.style.left=l+'px';
				}else if(parseInt(oDiv.style.left)<=0){
					oDiv.style.left=0+'px';
				}
				if(parseInt(oDiv.style.top)>=t){
					oDiv.style.top=t+'px';
				}else if(parseInt(oDiv.style.top)<=0){
					oDiv.style.top=0+'px';
				}
				window.onmousemove=function(){ return false;}
			}
			document.onmouseup=function(){		//鼠标抬起时取消onmousemove移动事件
				document.onmousemove=null;
			}
		}
	},

	//运动事件 仿jquery中slideDown并加上渐变
	startMove:function(obj,btn,target){  //obj运动对象,btn触发运动的按钮,obj运动到的目标位置
		var obj=common.getId(obj);
		var oBtn=common.getId(btn);
		var i=0,timer;
		oBtn.onclick=function(){
			clearInterval(timer);
			timer=setInterval(function()
			{
				if(parseInt(obj.style.height)>=target)
				{
					clearInterval(timer);
				}else
				{
					i+=3;
					obj.style.height=i+'px';
					obj.style.width=i+'px';
					obj.style.opacity=i*1/target; 
				}
			},30);
		}
	},

	//阻止默认冒泡时间兼容处理var oEvent=ev||event 调用的点击函数需传参oEvent;
	stopBubble:function(oEvent)
	{
		if(oEvent.stopPropagation)
		{
			oEvent.stopPropagation();
		}
		else
		{
			oEvent.cancelBubble=true;
		}
	},

	//设置cookie

	setCookie:function (key,value,n)
	{
		var oDate=new Date;
		oDate.setDate(oDate.getDate()+n);
		document.cookie=key+"="+encodeURIComponent(value)+";expires="+oDate;
	},

	//获取cookie
	getCookie:function (key) 
	{
		if(document.cookie.length!=0)
		{	
			var str=document.cookie.replace(/\s/g,'').split(';');
			for(var i=0;i<str.length;i++){
				var arr=str[i].split('=');
				if(arr[0]==key){
					return decodeURIComponent(arr[1]);
				}
			}
		}
		return '';
	},


	//删除cookie
	delCookie:	function (key)
	{
		setCookie(key,'',-1);
	},

	//ajax封装
	oAjax:	function(url,callBack)
	{
		//创建XMLHttpRequest对象
		var XHR;
		if(window.XMLHttpRequest)
		{
			XHR=new XMLHttpRequest;
		}else
		{
			XHR=new ActiveXobject('microsoft.HttpRequest');
		}

		//创建连接
		XHR.open('get',url,true);

		//发送请求或数据
		XHR.send();

		//设置响应
		XHR.onreadystatechange=function()
		  {
		  if (XHR.readyState==4 && XHR.status==200)
		    {
				if(callBack)
				{
					var data=JSON.parse(XHR.responseText);
					callBack(data);
				}
		    }
		  }
	},
	
	//弹性运动
	elasticMove:function(obj,iTarget)
	{
		var iSpeed=0;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			iSpeed+=(iTarget-obj.offsetLeft)/5;
			iSpeed*=0.7;
			obj.style.left=obj.offsetLeft+iSpeed+'px';
		},30);
	}
	


}