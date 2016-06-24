$(document).ready(function () {
	$(".footer_content_index_item a").click(function () {
		var href = $(this).attr("href");
    	var pos = $(href).offset().top;
    	pos = pos - 89;
    	$("html,body").animate({scrollTop: pos}, 700);
    	return false;
    	
	});
	
	$(".footer_content_index_item a").hover(function () {
//		$(".footer_content_index_item").css("background-color","#FF5053");
		$(".footer_content_index_item").animate({width: '200px'},1000);
	});
	
});