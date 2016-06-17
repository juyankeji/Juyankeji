$(document).ready(function(){
	var $header_index = $("#header_index").find(".header_index_all");
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
	
	//动态载入函数
	$(function (bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute) {
		bindElement = "body";
		action = "click";
		triggerElement = "#personal_test";
		loadElement = "#content_test";
		pageRoute = "view/user/personal.html #personalPage";
		cssRoute = "css/personal/main.css";
		jsRoute = "js/personal/personal.js";
		ajaxLoad(bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute);
	});
	
//	$("body").on("click","#personal_pic",function () {
//		$("#loginBox").css('display','inherit');
//	});	
	
	
});