$(document).ready(function(){
	var $header_index = $("#header_index").find(".header_index_all");
	$header_index.click(function () {
		$header_index.find("span").removeClass("index_seleted");
		$header_index.find("img").removeClass("index_seleted");
		$(this).find("span").addClass("index_seleted");
		$(this).find("img").addClass("index_seleted");
	});
	$header_index.hover(function () {
		$(this).find("span").css("color","#FF6666");
		$(this).find("img").css("visibility","visible");
		},
		function () {
		$(this).find("span").css("color","#999999");
		$(this).find("img").css("visibility","hidden");
	});
	
	//动态载入函数
	$(function (bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute) {
		bindElement = "body";
		action = "click";
		triggerElement = "#personal_test";
		loadElement = "#content_test";
		pageRoute = "view/user/personal.html #personalPage";
		cssRoute = "css/personal/main.css"
		jsRoute = "js/personal/personal.js";
		ajaxLoad(bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute);
	});
	
	$("body").on("click","#header_personal",function () {
		$("#loginBox").css('display','inherit');
	});	
	
	
});