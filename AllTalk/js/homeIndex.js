$(document).ready(function(){
	//通知按钮移入样式
	$(".header_notic_img,.header_notice_content").hover(function () {
		$(this).parent().find(".header_notice_content").addClass("visibility_change");
	},function () {
		$(this).parent().find(".header_notice_content").removeClass("visibility_change");
	});
	//信息按钮移入样式
	$(".header_message_img,.header_message_content").hover(function () {
		$(this).parent().find(".header_message_content").addClass("visibility_change");
	},function () {
		$(this).parent().find(".header_message_content").removeClass("visibility_change");
	});
	
	$(".header_message_content li").hover(function () {
		$(this).addClass("message_content_hover");
	},function () {
		$(this).removeClass("message_content_hover");
	});
	
	var $header_index = $("#header_index").find(".header_index_all");
//	$(".header_index_all:first").addClass("index_seleted");
//	$(".header_index_all:first").find("span").addClass("index_seleted_span");
	$header_index.click(function () {
		$header_index.removeClass("index_seleted");
		$header_index.find("span").removeClass("index_seleted_span");
		$(this).addClass("index_seleted");
		$(this).find("span").addClass("index_seleted_span");
	});
	$header_index.hover(function () {
		$(this).find("span").css("color","#FF6666");
		},
		function () {
		$(this).find("span").css("color","#999999");
	});
	
	//底部信息栏跳转到相应位置
	$(".footer-item a").click(function () {
		var href = $(this).attr("href");
    	var pos = $(href).offset().top;
    	pos = pos - 89;
    	$("html,body").animate({scrollTop: pos}, 700);
    	return false;
	});
	
	//搜索栏为空时判断条件
	$("#header_select_text").on("click",".header_search_button",function searchValidate () {
		var searchVal = $("#header_select_input").val();
		console.log(searchVal=="");
		if (searchVal=="") {
			return false;
		}
	});
	
	//图片预加载优化
	$(function () {
		for (var i=0;i<$('#section1 img[data-original]').length;i++) {
			var $sectionNum = $('#section1 img[data-original]').eq(i);
			preloader($sectionNum);
		}
	});
	
	function preloader($sectionNum) {
		var __this__ = $sectionNum;  
	    var url = __this__.attr('data-original');  
	    var src = __this__.attr('src');  
	    console.log(url+","+src);
	    if(url ==''|| url == src)//这里判断如果图片实际地址不存在或者已经加载不处理  
	    {  
	         return;  
	    }  
	    var img =new Image();//实例化一个图片的对象  
	    img.src = url;//将要显示的图片加载进来  
	    if(img.complete)//如果图片已经加载存在浏览器缓存中直接处理  
	    {  
	       __this__.attr('src',url);//将要显示的图片替换过来
	       return;  
	    }  
	    img.onload =function(){//要显示的图片加载完成后做处理  
	       __this__.attr('src',url);
	    }
	}
		
});