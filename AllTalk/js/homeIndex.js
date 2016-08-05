$(document).ready(function(){
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
	
	//ajax载入个人主页
//	$(function (bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute) {
//		bindElement = "body";
//		action = "click";
//		triggerElement = "#username";
//		loadElement = "#content_test";
//		pageRoute = "view/user/personal.html #personalPage";
//		cssRoute = "css/personal/main.css";
//		jsRoute = "js/personal/personal.js";
//		ajaxLoad(bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute);
//		
//	});
	
	
//	$("body").on("click","#personal_pic",function () {
//		$("#loginBox").css('display','inherit');
//	});

	//底部信息栏跳转到相应位置
	$(".footer-item a").click(function () {
		var href = $(this).attr("href");
    	var pos = $(href).offset().top;
    	pos = pos - 89;
    	$("html,body").animate({scrollTop: pos}, 700);
    	return false;
	});
	
});