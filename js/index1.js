	
	(function(){
		//ul.banner-nav  li
		//div#banner-center img
		var color=["#FF8A02","#14789C","#E3792B","#43ABE2","#FF8FB5","#EEA970"]
	var timer=null	
	timer=setInterval(function(){
		if($index==5){$index=-1}	
		$index++
		move()
	},1200) 
	$("div#banner-center").hover(function(){
		clearInterval(timer)
		},function(){
			clearInterval(timer)
			timer=setInterval(function(){
				if($index==5){$index=-1}	
				$index++
				move()
			},1200) 
		}
	)

		function move(){
			$('div#banner-center img').attr("src","images/banner"+$index+".jpg")
				$('ul.banner-nav li').eq($index).addClass("active").siblings().removeClass("active")
				$("#banner").css("background-color",color[$index])
		}
		
		var $index=0
			$("ul.banner-nav li").click(function(){
				$index=$(this).index()
				move()
			})
			$("#banner-center .next").click(function(){
				if($index==5){$index=-1}
				$index++
				move()
			})
			$("#banner-center .prev").click(function(){
				if($index==0){$index=5}
				$index--
				move()
			})
	})()
	
//	(function(){
		//div.recommend-pic>ul.carousel>li>img
		//div.recommend-pic>a.next 250
		$("div.recommend-pic .prev").click(function(){
			if($('.carousel').position().left<=-3000){
			
				$('.carousel').css({"left":"0"})
			}
			
				$('.carousel').stop().animate({"left":"-=1000px"})
			
					
			})
		$("div.recommend-pic .next").click(function(){
		console.log($('.carousel').position().left)
			if($('.carousel').position().left>=0){
			
				$('.carousel').css({"left":"-3000px"})
			}
				$('.carousel').stop().animate({"left":"+=1000px"})
					
			})
//	})()

$(".f-tab:eq(0) li").hover(function(){
	$index=$(this).index()
	$(".tab").eq($index).css("display","block").siblings(".tab").css("display","none")
})


$("#fixside").hide()
			$(window).scroll(function(){
				var i=parseInt(($(window).scrollTop()-500)/630)-1
				if(i==-1){
					$("#fixside").hide()
				}else{
					$("#fixside").show()
				$("#cell li").eq(i).css({"position":"absolute","left":"36px"}).addClass('current').siblings().removeClass("current").css({"position":"relative","left":"0"})
				}

			})
			$("#floor").on("click","li",function(){
				var $index=$(this).index()
				//var dis=
				//$(window).scrollTop(600+600*$index)
				$(document.body).stop().animate({"scrollTop":(1280+630*$index)},2000)
			})
			$("#cell li:eq(9)").on("click",function(){
				$(window).scrollTop(0)
			})
			