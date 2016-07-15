$(document).ready(function () {
	
	//标签尾部形状添加
	var supportlabel = $(".label_support_label").find("li");
	var opposelabel = $(".label_oppose_label").find("li");
	for (var i = 0;i < supportlabel.length;i++) {
		var thisLi = $(".label_support_label li").eq(i);
		switch (thisLi.css("height")){
			case "28px":
				thisLi.addClass("s1");
				break;
			case "46px":
				thisLi.addClass("s2");
				break;
			case "64px":
				thisLi.addClass("s3");
				break;
			case "82px":
				thisLi.addClass("s4");
				break;
			case "100px":
				thisLi.addClass("s5");
				break;
			default:				
				break;
		}
	}
	for (var i = 0;i < opposelabel.length;i++) {
		var thisLi = $(".label_oppose_label li").eq(i);
		switch (thisLi.css("height")){
			case "28px":
				thisLi.addClass("o1");
				break;
			case "46px":
				thisLi.addClass("o2");
				break;
			case "64px":
				thisLi.addClass("o3");
				break;
			case "82px":
				thisLi.addClass("o4");
				break;
			case "100px":
				thisLi.addClass("o5");
				break;
			default:				
				break;
		}
	}
	
	var sql=[{'count':'11'},
			 {'count':'22'},
			 {'count':'33'},
			 {'count':'44'},
			 {'count':'55'},
			 {'count':'66'},
			 {'count':'77'},
			 {'count':'88'},
			 {'count':'99'},
			 {'count':'00'}];
			
	
	
//	$(function (count) {
//		var z_index = 99999;
//		var comment_heigth = {};
//		var comment_top = {};
//		parseInt(comment_top);
//		for (var i=0;i<sql.length;i++) {
//			if (i==0 || i==1 && i%2==0) {
//				var div1 = $('<div>').addClass('cd-timeline-block').appendTo($("#cd-timeline"));
//				div1.css("top",0);
//				 var div1_1 = $('<div>').addClass('cd-timeline-img cd-picture').appendTo(div1);
//				  div1_1.html('P');
//				 var div1_2 = $('<div>').addClass('cd-timeline-content').appendTo(div1);
//				  var div1_2_1 = $('<h2>').appendTo(div1_2);
//				  div1_2_1.html('html5时间表 '+sql[i].count);
//				  var div1_2_2 = $('<p>').appendTo(div1_2);
//				  div1_2_2.html('jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。');
//				  var div1_2_3 = $('<a>').addClass('cd-read-more').appendTo(div1_2);
//				  div1_2_3.attr("href","#");
//				  div1_2_3.html('阅读更多');
//			} 
//			else if (i==0 || i==1 && i%2==1) {
//				var div1 = $('<div>').addClass('cd-timeline-block').appendTo($("#cd-timeline"));
//				div1.css("top","140px");
//				 var div1_1 = $('<div>').addClass('cd-timeline-img cd-movie').appendTo(div1);
//				  div1_1.html('N');
//				 var div1_2 = $('<div>').addClass('cd-timeline-content').appendTo(div1);
//				  var div1_2_1 = $('<h2>').appendTo(div1_2);
//				  div1_2_1.html('html5时间表 '+sql[i].count);
//				  var div1_2_2 = $('<p>').appendTo(div1_2);
//				  div1_2_2.html('jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。');
//				  var div1_2_3 = $('<a>').addClass('cd-read-more').appendTo(div1_2);
//				  div1_2_3.attr("href","#");
//				  div1_2_3.html('阅读更多');
//			}
//			else if (i%2==0) {
//				var div1 = $('<div>').addClass('cd-timeline-block').appendTo($("#cd-timeline"));
//				div1.css("top",comment_top[i-2]+comment_heigth[i-2]+20);
//				 var div1_1 = $('<div>').addClass('cd-timeline-img cd-picture').appendTo(div1);
//				  div1_1.html('P');
//				 var div1_2 = $('<div>').addClass('cd-timeline-content').appendTo(div1);
//				  var div1_2_1 = $('<h2>').appendTo(div1_2);
//				  div1_2_1.html('html5时间表 '+sql[i].count);
//				  var div1_2_2 = $('<p>').appendTo(div1_2);
//				  div1_2_2.html('jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。');
//				  var div1_2_3 = $('<a>').addClass('cd-read-more').appendTo(div1_2);
//				  div1_2_3.attr("href","#");
//				  div1_2_3.html('阅读更多');
//			} else if (i%2==1){
//				var div1 = $('<div>').addClass('cd-timeline-block').appendTo($("#cd-timeline"));
//				div1.css("top",comment_top[i-2]+comment_heigth[i-2]+20);
//				 var div1_1 = $('<div>').addClass('cd-timeline-img cd-movie').appendTo(div1);
//				  div1_1.html('N');
//				 var div1_2 = $('<div>').addClass('cd-timeline-content').appendTo(div1);
//				  var div1_2_1 = $('<h2>').appendTo(div1_2);
//				  div1_2_1.html('html5时间表 '+sql[i].count);
//				  var div1_2_2 = $('<p>').appendTo(div1_2);
//				  div1_2_2.html('jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。');
//				  var div1_2_3 = $('<a>').addClass('cd-read-more').appendTo(div1_2);
//				  div1_2_3.attr("href","#");
//				  div1_2_3.html('阅读更多');
//			}
//			$(".cd-timeline-block").eq(i).css("z-index",z_index);
//			z_index--;
//			comment_heigth[i] = $(".cd-timeline-block").eq(i).height();
//			comment_top[i] = $(".cd-timeline-block").eq(i).css("top");
//			comment_top[i] = parseInt(comment_top[i].substring(0,comment_top[i].length-2));
//			$("#cd-timeline").css("height",comment_top[i]+comment_heigth[i]+90);
//			$(".line").css("height",comment_top[i]+comment_heigth[i]+90)
//		 }
//		
//	});
	
	//鼠标滚动出现评论项目
	$(function(){
		var $timeline_block = $('.cd-timeline-block');
		//hide timeline blocks which are outside the viewport
		$timeline_block.each(function(){
			if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
		});
		//on scolling, show/animate timeline blocks when enter the viewport
		$(window).on('scroll', function(){
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.85 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	});
	
	//textarea自动增高
	$(".isay_text_area").on("input keyup keypress",".target1",function MaxMe() {  
        if (this.scrollTop > 0)
        {
        	this.style.height = $(this).height()+19+"px";
        	
        }
	});
	
	
	
	/*******单个评论相关js---begin*******/
	//回复评论按钮
	$(".isay_text_area").on("input",".target1",function () {
        console.log($(this).val());
        if ($(this).val() == "") {
        	$(this).parent().find(".comment_btn").removeClass("comment_btn_enable");
//      	$(this).parent().find(".comment_btn").attr("disabled","disabled");
        } else{
        	$(this).parent().find(".comment_btn").addClass("comment_btn_enable");
//      	$(this).parent().find(".comment_btn").attr("disabled","");
        }
	});
	
	//回复页弹出
	$(".comment_footer").on("click",".comment_footer1",function () {
		$(this).parent().removeClass("mark2").addClass("mark1");
		$(this).parents(".cd-timeline-block").find(".comment_reply").css("visibility","visible");
		$(this).parents(".cd-timeline-block").find(".comment_reply").find(".comment_reply_input").css("display","none");
	}).on("click",".comment_footer2",function () {
		$(this).parent().removeClass("mark1").addClass("mark2");
		$(this).parents(".cd-timeline-block").find(".comment_reply").css("visibility","visible");
		$(this).parents(".cd-timeline-block").find(".comment_reply").find(".comment_reply_input").css("display","inherit");
	});
	
	$(".comment_reply_input").on("click",".comment_btn2",function () {
		$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark2").addClass("mark1");
		$(this).parents(".cd-timeline-block").find(".comment_reply_input").css("display","none");
	});
	$(".comment_reply").on("click",".fallback",function () {
		$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1").removeClass("mark2");
		$(this).parent().css("visibility","hidden");
	});
	//举报按钮出现与隐藏
//	$(".cd-timeline-content").hover(function () {
//		$(this).find(".comment_footer3 span").css("visibility","visible");
//	},
//	function () {
//		$(this).find(".comment_footer3 span").css("visibility","hidden");
//	});

	//单个评论框弹出与收回以及设置默认回复字段
//	$(".comment_reply_item").on("click",".isay_operate_reply",function () {
//		if ($(this).parents(".comment_reply_item").find(".isay_text_area").css("display") == "none") {
//			$(this).parents(".comment_reply_item").find(".isay_text_area").css("display","inherit");
//			var reply_text = $(this).parents(".comment_reply_item").find(".reply_name").html();
//			$(this).parents(".comment_reply_item").find(".target1").attr("placeholder","回复："+reply_text);
//		} else{
//			$(this).parents(".comment_reply_item").find(".isay_text_area").css("display","none");
//		}
//	});
	$(".isay_operate_reply").click(function () {
		$(this)
		$(".isay_text_area").remove();
		addCommentInput();
		var reply_text = $(this).parents(".comment_reply_item").find(".reply_name").html();
		$(this).parents(".comment_reply_item").find(".target1").attr("placeholder","回复："+reply_text);
	});
	
	//添加评论框
	function addCommentInput () {
		var f1 = $('<form>').addClass('isay_text_area isay_text_area_mark').appendTo($(".comment_reply_item"));
		f1.attr({"action":"","method":"post"});
		 var f1_1 = $('<textarea></textarea>').addClass('target1').appendTo(f1);
		 f1_1.attr("id","target1");
		 var f1_2 = $('<div></div>').addClass('isay_text_operate').appendTo(f1);
		  var f1_2_1 = $('<div></div>').addClass('isay_text_operate_emotion').appendTo(f1_2);
		  var f1_2_2 = $('<div></div>').addClass('isay_text_operate_picture').appendTo(f1_2);
		  var f1_2_3 = $('<div></div>').appendTo(f1_2);
		  f1_2_3.attr("id","text_support");
		  f1_2_3.html('<input type="checkbox" name="" id="checkbox_support" class="checkbox" value="support" /><label for="checkbox_support"></label>&nbsp;正方');
		  var f1_2_4 = $('<div></div>').appendTo(f1_2);
		  f1_2_4.attr("id","text_oppose");
		  f1_2_4.html('<input type="checkbox" name="" id="checkbox_oppose" class="checkbox" value="oppose" /><label for="checkbox_oppose"></label>&nbsp;反方');
		  var f1_2_5 = $("<input />").addClass("comment_btn").appendTo(f1_2);
		  f1_2_5.attr({"type":"submit","id":"comment_btn","value":"评论"});
		checkBoxSelect();
	}
	
	function checkBoxSelect () {
		//正方勾选
		$(".isay_text_operate").on("mouseover","#text_support",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_support_hover checkbox_oppose_hover");
			$(this).find("input[type=checkbox]").addClass("checkbox_support_hover");
		}).on("mouseout","#text_support",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_support_hover");
		}).on("click","#text_support",function () {
			$(this).parent().find("input[type=checkbox]").removeClass("checkbox_support_check checkbox_oppose_check");
			$(this).find("input[type=checkbox]").addClass("checkbox_support_check");
		});
		//反方勾选
		$(".isay_text_operate").on("mouseover","#text_oppose",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_support_hover checkbox_oppose_hover");
			$(this).find("input[type=checkbox]").addClass("checkbox_oppose_hover");
		}).on("mouseout","#text_oppose",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_oppose_hover");
		}).on("click","#text_oppose",function () {
			$(this).parent().find("input[type=checkbox]").removeClass("checkbox_support_check checkbox_oppose_check");
			$(this).find("input[type=checkbox]").addClass("checkbox_oppose_check");
		});
	}
	
	//添加评论
//	function () {
//		
//	}
	
});