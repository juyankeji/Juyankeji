$(document).ready(function () {
	//判断是否删除
	$(".delete_item").click(function isDeleteItem (){
		var thisElement = $(this).parents(".topic_item");
		var itemIndex = $(this).parents(".topic_item").attr("data-index");
		swal({
			title: "确定取消关注此话题?",
//			text: "点击确定将不再关注此人!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: '确定',
			cancelButtonText: "取消",
			closeOnConfirm: false,
			confirmButtonText: "完成",
		},
		function(isConfirm){
			if (isConfirm) {
				thisElement.remove();//移除已关注条目
				console.log(itemIndex);//返回所选条目索引号
				swal("已取消关注", "", "success");
			}
		});
    });
	//移入删除按钮动作
	$(".delete_item").hover(function () {
		$(this).addClass("delete_item_hover");
	},function () {
		$(this).removeClass("delete_item_hover");
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