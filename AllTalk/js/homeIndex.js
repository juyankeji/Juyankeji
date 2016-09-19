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
	
});