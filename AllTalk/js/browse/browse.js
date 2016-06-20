$(document).ready(function () {
	$(".topic_item").animate({opacity:'1'});
	//设置标签颜色
	var itemType;
	$(function () {
		var colorType;
		var type;
		for (var i = 0;i < $(".topic_item_content").length;i++) {
			colorType = $(".topic_item_content").eq(i).attr("colorType");
			itemType = $(".topic_item_content").eq(i).attr("itemType");
			type = colorType + itemType;
	//		console.log(type);
			switch (type){
				case "o1":
					$(".topic_item_content").eq(i).addClass("colorType_o_1");
					break;
				case "o2":
					$(".topic_item_content").eq(i).addClass("colorType_o_2");
					break;
				case "b1":
					$(".topic_item_content").eq(i).addClass("colorType_b_1");
					break;
				case "b2":
					$(".topic_item_content").eq(i).addClass("colorType_b_2");
					break;
				case "g1":
					$(".topic_item_content").eq(i).addClass("colorType_g_1");
					break;
				case "g2":
					$(".topic_item_content").eq(i).addClass("colorType_g_2");
					break;
				default:
					break;
			}
		}
	});

	//鼠标滚动自动加载下面的item
	$(window).scroll(function () {
		var scrollBottom = $(document).height() - $(window).height()-130;
		if ($(window).scrollTop() >= scrollBottom) {
			$("<div class='topic_item'></div>").appendTo("#topic_area");
			$(".topic_item").animate({opacity:'1'},1000);
		}
	});
	//单个item鼠标移入事件
	$(".topic_item").hover(function () {		
		if ($(this).find(".topic_item_content").attr("itemType") == "1") {
			var q = $(this).find(".topic_item_content").css("border-top-color");
		}else{
			var q = $(this).find(".topic_item_content").css("border-bottom-color");
		}
		console.log(q);
		$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote,.topic_tag").attr("style","color:#ffffff");
		$(this).find(".topic_tag img").attr("src","../img/browse/topic_tag2.png");
		$(this).find(".topic_browse img").attr("src","../img/browse/topic_browse2.png");
		$(this).find(".topic_vote img").attr("src","../img/browse/topic_vote2.png");
		$(this).find(".topic_tag").css("border-bottom-color","#FFFFFF");
		switch (q){
			case "rgb(255, 192, 102)":
				$(this).addClass("topic_item_hover1");
				break;
			case "rgb(153, 153, 238)":
				$(this).addClass("topic_item_hover2");
				break;
			case "rgb(136, 204, 204)":
				$(this).addClass("topic_item_hover3");
				break;
			default:
				break;
		}
	},
	//鼠标移出恢复
	function () {
		$(this).removeClass("topic_item_hover1");
		$(this).removeClass("topic_item_hover2");
		$(this).removeClass("topic_item_hover3");
		$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote,.topic_tag").attr("style","");
		$(this).find(".triangle1").attr("src","../img/browse/triangle.png");
		$(this).find(".topic_tag img").attr("src","../img/browse/topic_tag.png");
		$(this).find(".topic_browse img").attr("src","../img/browse/topic_browse.png");
		$(this).find(".topic_vote img").attr("src","../img/browse/topic_vote.png");
	}
	);
	//绘制图片遮盖
	$(function triangle () {
	   var ctx;
	   for (var i = 0;i < $(".triangle1").length;i++) {
		   ctx = $(".triangle1")[i].getContext("2d");
		   ctx.fillStyle ='#FFFFFF';//填充的颜色
		   ctx.beginPath();
		   ctx.moveTo(0,0);
		   ctx.lineTo(230,0);
		   ctx.lineTo(230,14);
		   ctx.lineTo(129,14);
		   ctx.lineTo(115,0);
		   ctx.lineTo(101,14);
		   ctx.lineTo(0,14);
		   ctx.closePath();
		   ctx.fill();//填充颜色
	   }
	   for (var i = 0;i < $(".triangle2").length;i++) {
		   ctx = $(".triangle2")[i].getContext("2d");
		   
		   ctx.fillStyle ='#FFFFFF';//填充的颜色
		   ctx.beginPath();
		   ctx.moveTo(0,0);
		   ctx.lineTo(101,0);
		   ctx.lineTo(115,14);
		   ctx.lineTo(129,0);
		   ctx.lineTo(230,0);
		   ctx.lineTo(230,14);
		   ctx.lineTo(0,14);
		   ctx.closePath();
		   ctx.fill();//填充颜色
	   }
	});
	
	
});