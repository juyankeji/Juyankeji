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
	$("body").on("click","#header_logo",function () {
		$("#content").load("view/user/personal.html #personalPage",function () {
			$("<link>")
    			.attr({ rel: "stylesheet",
        				type: "text/css",
        				href: "css/personal/main.css"
    			})
   				.appendTo("head");
		});
	});
	
	$("body").on("click","#header_index_all",function () {
		$("#content").load("test.html");
	});
	
});
