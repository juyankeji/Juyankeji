$(document).ready(function () {
//	$(".concern_person_item_content").on("mousemove",".concern_Btn",function () {
//		$(".concern_cancel_Btn").css("visibility","visible");
//		$(".concern_cancel_Btn").animate({right:'0',opacity:1},500);
//	}).on("mouseout",".concern_cancel_Btn",function () {
//		$(".concern_cancel_Btn").animate({right:'-56px',opacity:0},500);
//		$(".concern_cancel_Btn").css("visibility","hidden");
//	});
	
	$(".concern_person_item").hover(function () {
		$(this).find(".concern_Btn").css("visibility","visible");
	},function () {
		if ($(this).find(".concern_Btn").css("right") != "0px") {
			$(this).find(".concern_Btn").css("visibility","hidden");
		}else{
			$(this).find(".concern_Btn").animate({right:'-75px'},200,function () {
				$(this).css("visibility","hidden");
			});
		}
	});
	
	$(".concern_person_item").on("click",".concern_Btn_click_area",function () {
		
		if ($(this).parent().css("right") != "0") {
			$(this).parent().animate({right:'0'},200);
		}
		if ($(this).parent().css("right") == "0px") {
			$(this).parent().animate({right:'-75px'},200);
		}
	});
	
	
});