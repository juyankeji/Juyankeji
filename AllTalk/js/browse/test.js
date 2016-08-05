$(document).ready(function () {
	for (var i = 0;i < $(".topic_item_content").length;i++) {
			var colorType = $(".topic_item_content").eq(i).attr("colorType");
			var itemType = $(".topic_item_content").eq(i).attr("itemType");
			type = colorType + itemType;
			if (i%2 == 1) {
				$(".triangle").eq(i).addClass("triangle_down");
			} else{
				$(".triangle").eq(i).addClass("triangle_up");
			}
			//添加标签边框颜色
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
	
	$(document).on("mousemove",".topic_item",function () {
		var itemType = $(this).find(".topic_item_content").attr("itemType");
		if (itemType == "1") {
			var q = $(this).find(".topic_item_content").css("border-top-color");
		}else{
			var q = $(this).find(".topic_item_content").css("border-bottom-color");
		}
		$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote,.topic_tag").attr("style","color:#ffffff");
		$(this).find(".topic_tag img").attr("src","../../img/browse/topic_tag2.png");
		$(this).find(".topic_browse img").attr("src","../../img/browse/topic_browse2.png");
		$(this).find(".topic_vote img").attr("src","../../img/browse/topic_vote2.png");
		$(this).find(".topic_tag").css("border-bottom-color","#FFFFFF");
		switch (q){
			case "rgb(255, 192, 102)":
				$(this).addClass("topic_item_hover1");
				$(this).find(".triangle").addClass("triangle_o");
				break;
			case "rgb(153, 153, 238)":
				$(this).addClass("topic_item_hover2");
				$(this).find(".triangle").addClass("triangle_b");
				break;
			case "rgb(136, 204, 204)":
				$(this).addClass("topic_item_hover3");
				$(this).find(".triangle").addClass("triangle_g");
				break;
			default:
				break;
		}
	})
	//鼠标移出恢复
	.on("mouseout",".topic_item",function () {
		$(this).removeClass("topic_item_hover1");
		$(this).removeClass("topic_item_hover2");
		$(this).removeClass("topic_item_hover3");
		$(this).find(".triangle").removeClass("triangle_o");
		$(this).find(".triangle").removeClass("triangle_b");
		$(this).find(".triangle").removeClass("triangle_g");
		$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote,.topic_tag").attr("style","");
		$(this).find(".triangle1").attr("src","../../img/browse/triangle.png");
		$(this).find(".topic_tag img").attr("src","../../img/browse/topic_tag.png");
		$(this).find(".topic_browse img").attr("src","../../img/browse/topic_browse.png");
		$(this).find(".topic_vote img").attr("src","../../img/browse/topic_vote.png");
	});
});