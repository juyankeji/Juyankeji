$(document).ready(function () {
	//移入删除按钮动作
	$(".delete_item").hover(function () {
		$(this).addClass("delete_item_hover");
	},function () {
		$(this).removeClass("delete_item_hover");
	}).click(function () {
		$(this).parent().remove();
	});
	
});