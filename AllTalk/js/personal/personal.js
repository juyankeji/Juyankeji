$(document).ready(function() {
	$("#personalIndex_1").addClass("personalIndex_1");
	$(".personalIndex_tag").click(function () {
		$(".personalIndex_tag").removeClass("personalIndex_1");
		$(".personalIndex_tag").removeClass("personalIndex_tag_selected");
		$(this).addClass("personalIndex_tag_selected");
	});
	
	$("#content").css('display','none');
	
	$(function () {
		var bindElement,action,triggerElement1,triggerElement2,loadElement,pageRoute1,pageRoute2,cssRoute,jsRoute;
		bindElement = "#personalPage";
		action = "click";
		triggerElement1 = "#personalIndex_1";
		triggerElement2 = "#personalIndex_2";
		loadElement = "#personalContent";
		pageRoute1 = "view/user/concern.html #personal_concern";
		pageRoute2 = "view/user/concerned.html #personal_concerned";
		cssRoute = "css/personal/concern.css";
		jsRoute = "js/personal/concern.js";
		ajaxLoad(bindElement,action,triggerElement1,loadElement,pageRoute1,cssRoute,jsRoute);
		ajaxLoad(bindElement,action,triggerElement2,loadElement,pageRoute2,cssRoute,jsRoute);
	});
	
});