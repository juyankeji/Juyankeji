$(document).ready(function(){
	
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
	
});