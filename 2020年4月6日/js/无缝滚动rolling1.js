//回调函数
(function(){
	var rolling=document.getElementById("rolling1");//大盒子
	var m_unit=document.getElementById("m_unit1");//运动单位
	var listul=m_unit.getElementsByTagName("ul")[0];//ul  m_unit下面的ul
	var imgs=listul.getElementsByTagName("img");//所有图片
	var zhefandian;
	//复制li
	listul.innerHTML+=listul.innerHTML;
	//紧接着获得新的所有的li,包括新的li
	var lis=listul.getElementsByTagName("li");
	var lislength=lis.length;
	//offsetleft折返点，【lislength/2】
	for(var i=0,count=0;i<imgs.length;i++){
		imgs[i].onload=function(){
			count++;
			if (count==imgs.length) {
				zhefandian=lis[lislength/2].offsetLeft;
				//开始运动
				move();
			}
		}
	}
	
	var nowleft=0;
	//设表先停
	var timer;
	
	//鼠标移入
	rolling.onmouseover=function(){
		//设表先停
		clearInterval(timer);
	}
	//鼠标移出
	rolling.onmouseout=function(){
		//继续动，调用一下
		move();
	}
	
	
	//写一个定时器
	function move(){
		clearInterval(timer);
		timer=setInterval(function(){
			nowleft-=5;
			if(nowleft<-zhefandian){
				nowleft=0;
			}
			m_unit.style.left=nowleft+"px";
		},20)
	}
})();
