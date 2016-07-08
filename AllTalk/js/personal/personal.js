$(document).ready(function() {
	
	//头像设置鼠标移入样式
	$("#personalInf_pic_edit").hover(function () {
		$(this).find("#uploadImg_cover").animate({opacity: 0.5},100);
		$(this).find("#uploadImg_top").animate({opacity: 1},100);
	},function () {
		$(this).find("#uploadImg_cover").animate({opacity: 0},100);
		$(this).find("#uploadImg_top").animate({opacity: 0},100);
	});
	
	//设置个人信息页移入移出
	$("#personalPage").on("click",".editBtn",function () {
		$(".editArea").css("visibility","visible");
		$(".personalInf").css("visibility","hidden");
	}).on("click","#edit_cancel",function () {
		$(".editArea").css("visibility","hidden");
		$(".personalInf").css("visibility","visible");
	});
	
	//index按钮变色
	$("#personalIndex_1").addClass("personalIndex_1");
	$(".personalIndex_tag").click(function () {
		$(".personalIndex_tag").removeClass("personalIndex_1");
		$(".personalIndex_tag").removeClass("personalIndex_tag_selected");
		$(this).addClass("personalIndex_tag_selected");
	});
	
	$("#content").css('display','none');
	//载入关注话题
	$("#personalContent").load("concern.html #personal_concern",function () {
			$("<link>")
    			.attr({ rel: "stylesheet",
        				type: "text/css",
        				href: "../../css/personal/concern.css"
    			})
   				.appendTo("head");
   		jQuery.getScript("../../js/personal/concern.js")
 		.done(function() {
//			alert("success!");
 		})
		.fail(function() {
 			alert("load personal.js fail!");
		});
	});
	//关注的话题与参与的话题的ajax载入
	$(function () {
		var bindElement,action,triggerElement1,triggerElement2,loadElement,pageRoute1,pageRoute2,cssRoute,jsRoute;
		bindElement = "#personalPage";
		action = "click";
		triggerElement1 = "#personalIndex_1";
		triggerElement2 = "#personalIndex_2";
		loadElement = "#personalContent";
		pageRoute1 = "concern.html #personal_concern";
		pageRoute2 = "concerned.html #personal_concerned";
		cssRoute = "../../css/personal/concern.css";
		jsRoute = "../../js/personal/concern.js";
		ajaxLoad(bindElement,action,triggerElement1,loadElement,pageRoute1,cssRoute,jsRoute);
		ajaxLoad(bindElement,action,triggerElement2,loadElement,pageRoute2,cssRoute,jsRoute);
	});
	
	//关注的人和粉丝的ajax载入
	$(function () {
		var bindElement,action,triggerElement1,triggerElement2,loadElement,pageRoute1,pageRoute2,cssRoute,jsRoute;
		bindElement = "#personalPage";
		action = "click";
		triggerElement1 = "#concern_num";
		triggerElement2 = "#concerned_num";
		loadElement = "#personalContent";
		pageRoute1 = "concern_person.html #concern_person";
		pageRoute2 = "concerned_person.html #concerned_person";
		cssRoute = "../../css/personal/concern_person.css";
		jsRoute = "../../js/personal/concern_person.js";
		ajaxLoad(bindElement,action,triggerElement1,loadElement,pageRoute1,cssRoute,jsRoute);
		ajaxLoad(bindElement,action,triggerElement2,loadElement,pageRoute2,cssRoute,jsRoute);
	});
	
	/********他人主页相关效果-begin*********/
	//关注按钮变化
	$(".stranger_concern_Btn").click(function () {
		$(".stranger_concern_Btn").css("display","none");
		$(".stranger_concerned_Btn").css("display","inline-block");
	});
	
	$(".stranger_concerned_Btn").click(function () {
		$(".stranger_concerned_Btn").css("display","none");
		$(".stranger_concern_Btn").css("display","inline-block");
	});
	
	$(".stranger_concerned_Btn").hover(function () {
		$(".stranger_concerned_Btn").addClass("stranger_concerned_Btn_cover");
		$(".stranger_concerned_Btn").html("×取消关注");
	},
	function () {
		$(".stranger_concerned_Btn").removeClass("stranger_concerned_Btn_cover");
		$(".stranger_concerned_Btn").html("√已关注");
	});
	
	
	/********他人主页相关效果-end*********/
});

//上传图片
	function imageUpload() {
		$("#uploadImg_bottom").trigger("click");
	}