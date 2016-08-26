$(document).ready(function () {
	//移入删除按钮动作
	$(".delete_item").hover(function () {
		$(this).addClass("delete_item_hover");
	},function () {
		$(this).removeClass("delete_item_hover");
	}).click(function () {
		$(this).parent().remove();
	});
	
	//鼠标移入参与话题时小三角变色
	$("#personal_concerned li").hover(function () {
		$(this).find(".topic_item_reply").removeClass("topic_item_reply_unhover");
		$(this).find(".topic_item_reply").addClass("topic_item_reply_hover");
	},function () {
		$(this).find(".topic_item_reply").addClass("topic_item_reply_unhover");
		$(this).find(".topic_item_reply").removeClass("topic_item_reply_hover");
	});
	
	//设置所参与话题主要内容位置
	for (var i=0;i<$("#personal_concerned li").length;i++) {
		if ($(".topic_item_reply_content").eq(i).text().length>257) {
			$(".topic_item_reply_content").eq(i).text($(".topic_item_reply_content").eq(i).text().substr(0,254)+"...");
		}
		var contentHeight = $(".topic_item_reply_content").eq(i).height();
		$(".topic_item_reply_content").eq(i).css("margin-top",(116-contentHeight)/2);
	}
});