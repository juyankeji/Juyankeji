$(document).ready(function () {
	$(".topic_item").animate({opacity:'1'});
	$(window).scroll(function () {
		var scrollBottom = $(document).height() - $(window).height()-130;
		if ($(window).scrollTop() >= scrollBottom) {
			$("<div class='topic_item'></div>").appendTo("#topic_area");
			$(".topic_item").animate({opacity:'1'},1000);
		}
	});
	$(".topic_item").hover(function () {
		var q = $(".topic_tag").css("border-top-color");
//		switch (q){
//			case "rgb(255, 192, 102)":
//				
//				break;
//			case value:
//				break;
//			case value:
//				break;
//			default:
//				break;
//		}
		if (q =="rgb(255, 192, 102)") {
			$(this).addClass("topic_item_hover1");
//			$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote").css("color","#FFFFFF");
			$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote").attr("style",{'color':'#ffffff'});
			$(this).find(".triangle").attr("src","../img/browse/triangle_orange.png");
			$(this).find(".topic_browse img").attr("src","../img/browse/topic_browse2.png");
			$(this).find(".topic_vote img").attr("src","../img/browse/topic_vote2.png");
		}
	},
	function () {
		$(this).removeClass("topic_item_hover1");
		$(this).find(".triangle").attr("src","../img/browse/triangle.png");
		$(this).find(".topic_browse img").attr("src","../img/browse/topic_browse.png");
		$(this).find(".topic_vote img").attr("src","../img/browse/topic_vote.png");
	}
	);
});