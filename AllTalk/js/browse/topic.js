$(document).ready(function () {
	$(function () {
	//标签尾部形状添加
		var supportlabel = $(".label_support_label").find("li");
		var opposelabel = $(".label_oppose_label").find("li");
		//正方标签尾部形状
		for (var i = 0;i < supportlabel.length;i++) {
			var thisLi = $(".label_support_label li").eq(i);
			var thisLiHeight = thisLi.height();
			thisLi.find(".tagTail_support").css({
				'border-bottom-width':thisLiHeight/2,
				'border-top-width':thisLiHeight/2,
				'border-style': 'solid'
			});
		}
		//反方标签尾部形状
		for (var i = 0;i < opposelabel.length;i++) {
			var thisLi = $(".label_oppose_label li").eq(i);
			var thisLiHeight = thisLi.height();
			thisLi.find(".tagTail_oppose").css({
				'border-bottom-width':thisLiHeight/2,
				'border-top-width':thisLiHeight/2,
				'border-style': 'solid'
			});
		}
	});
	
	var isChecked = false;
	//评论按钮上方对正反方的支持数
	$(".comment_support_num,.comment_oppose_num").click(function () {
		if (!isChecked) {
			var sn = parseInt($(this).find("p").text())+1;
			$(this).find("p").text(sn);
			console.log(sn);
			isChecked = true;
		}
		
	});
	
	//点击正反方评论框按钮效果（向评论树添加评论）
	$(".comment_support_btn").click(function () {
		
		$("#timeline_input_support").removeClass("timeline_input_disply");
		$("#timeline_input_oppose").removeClass("timeline_input_disply");
		$("#timeline_input_oppose").addClass("timeline_input_visibility");
		$("#timeline_input_support").removeClass("timeline_input_visibility");
	});
	$(".comment_oppose_btn").click(function () {
		$("#timeline_input_oppose").removeClass("timeline_input_disply");
		$("#timeline_input_support").removeClass("timeline_input_disply");
		$("#timeline_input_support").addClass("timeline_input_visibility");
		$("#timeline_input_oppose").removeClass("timeline_input_visibility");
	});
	
	//关闭评论输入框按钮
	$(".close_input").click(function () {
		$("#timeline_input_support").removeClass("timeline_input_visibility");
		$("#timeline_input_oppose").removeClass("timeline_input_visibility");
		$("#timeline_input_oppose").addClass("timeline_input_disply");
		$("#timeline_input_support").addClass("timeline_input_disply");
	});
	
	//评论测试数据
	var sql=[{
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'11',
				'commentTime':'2016/07/24 14:52:12',
				'likeNum':'11',
				'commentContent':'真理惟一可靠的标准就是永远自相符合。 —— 欧文',
				'commentNum':'11'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'22',
				'commentTime':'2016/07/23 14:52:12',
				'likeNum':'22',
				'commentContent':'土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基',
				'commentNum':'22'
			 },
			 {
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'33',
				'commentTime':'07/20 11:52',
				'likeNum':'33',
				'commentContent':'我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。 —— 蒙田',
				'commentNum':'33'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'44',
				'commentTime':'07/20 11:52',
				'likeNum':'44',
				'commentContent':'时间是一切财富中最宝贵的财富。 —— 德奥弗拉斯多',
				'commentNum':'44'
			 },
			 {
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'55',
				'commentTime':'07/20 11:52',
				'likeNum':'55',
				'commentContent':'世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。 —— 斯里兰卡',
				'commentNum':'55'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'66',
				'commentTime':'07/20 11:52',
				'likeNum':'66',
				'commentContent':'过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。 —— 巴尔扎克',
				'commentNum':'66'
			 },
			 {
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'77',
				'commentTime':'07/20 11:52',
				'likeNum':'77',
				'commentContent':'这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。 —— 歌德',
				'commentNum':'77'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'88',
				'commentTime':'07/20 11:52',
				'likeNum':'88',
				'commentContent':'生活有度，人生添寿。 —— 书摘',
				'commentNum':'88'
			 },
			 {
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'99',
				'commentTime':'07/20 11:52',
				'likeNum':'99',
				'commentContent':'土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基',
				'commentNum':'99'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'00',
				'commentTime':'07/20 11:52',
				'likeNum':'00',
				'commentContent':'土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基',
				'commentNum':'00'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'00',
				'commentTime':'07/20 11:52',
				'likeNum':'00',
				'commentContent':'爱情原如树叶一样，在人忽视里绿了，在忍耐里露出蓓蕾。 —— 何其芳',
				'commentNum':'00'
			 },
			 {
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'00',
				'commentTime':'07/20 11:52',
				'likeNum':'00',
				'commentContent':'土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基',
				'commentNum':'00'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'00',
				'commentTime':'07/20 11:52',
				'likeNum':'00',
				'commentContent':'爱情原如树叶一样，在人忽视里绿了，在忍耐里露出蓓蕾。 —— 何其芳',
				'commentNum':'00'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'00',
				'commentTime':'07/20 11:52',
				'likeNum':'00',
				'commentContent':'土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基',
				'commentNum':'00'
			 },			 
	]
	
	//构建评论树评论
	function addComment (i,commentType,userPicURL,userName,commentTime,likeNum,commentContent,commentNum) {
		$('<!--评论块——cd-timeline-block'+(i+1)+'-->').appendTo($("#cd-timeline"));
		if (commentType=="support") {
			var div1 = $('<div>').addClass('cd-timeline-block').appendTo($(".cd-timeline-support"));
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-picture').appendTo(div1);
			  div1_1.html('P');
		}
		else if (commentType=="oppose") {
			var div1 = $('<div>').addClass('cd-timeline-block even-cd-timeline-block').appendTo($(".cd-timeline-oppose"));
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-movie').appendTo(div1);
			  div1_1.html('N');
		}
		 var div1_2 = $('<div>').addClass('cd-timeline-content').appendTo(div1);
		  var div1_2_1 = $('<div></div>').addClass("comment_header").appendTo(div1_2);
		   var div1_2_1_1 = $('<div></div>').addClass("pikachusPic").appendTo(div1_2_1);
		    var div1_2_1_1_1 = $('<a></a>').appendTo(div1_2_1_1);
		    div1_2_1_1_1.attr("href","../../../view/user/personal.html");
		    div1_2_1_1_1.html('<img src="'+userPicURL+'" />');
		   var div1_2_1_2 = $('<div></div>').addClass("pikachusName").appendTo(div1_2_1);
		    var div1_2_1_2_1 = $('<div></div>').addClass("pikachu_name").appendTo(div1_2_1_2);
		     var div1_2_1_2_1_1 = $('<a></a>').appendTo(div1_2_1_2_1);
		     div1_2_1_2_1_1.attr("href","../../../view/user/personal.html");
		     div1_2_1_2_1_1.html(userName);
		    var div1_2_1_2_2 = $('<div></div>').addClass("pikachu_time").appendTo(div1_2_1_2);
		    div1_2_1_2_2.html(commentTime);
		   var div1_2_1_3 = $('<div></div>').addClass("like_area").appendTo(div1_2_1);
		    var div1_2_1_3_1 = $('<div></div>').addClass("like").appendTo(div1_2_1_3);
		    div1_2_1_3_1.attr("isChecked","false");
		     var div1_2_1_3_1_1 = $('<div></div>').appendTo(div1_2_1_3_1);
		     div1_2_1_3_1_1.html(likeNum);
		    var div1_2_1_3_2 = $('<div></div>').addClass("unlike").appendTo(div1_2_1_3);
		    div1_2_1_3_2.attr("isChecked","false");
		  
		  var div1_2_2 = $('<div></div>').addClass("comment_content").appendTo(div1_2);
		  div1_2_2.html(commentContent);
		  
		if (commentType=="support") {
			var div1_2_3 = $('<div></div>').addClass("comment_footer mark colorRed").appendTo(div1_2);
		} else{
			var div1_2_3 = $('<div></div>').addClass("comment_footer mark colorBlue").appendTo(div1_2);
		}
		   var div1_2_3_1 = $('<div></div>').addClass("comment_footer1").appendTo(div1_2_3);
		    var div1_2_3_1_1 = $('<span></span>').appendTo(div1_2_3_1);
		    div1_2_3_1_1.html(commentNum+"条评论");
		   var div1_2_3_2 = $('<div></div>').addClass("comment_footer2").appendTo(div1_2_3);
		    var div1_2_3_2_1 = $('<span></span>').appendTo(div1_2_3_2);
		    div1_2_3_2_1.html("回复");
		   var div1_2_3_3 = $('<div></div>').addClass("comment_footer3").appendTo(div1_2_3);
		    var div1_2_3_3_1 = $('<span></span>').appendTo(div1_2_3_3);
		    div1_2_3_3_1.html("举报");
		 var div1_3 = $('<div></div>').addClass('comment_reply bounce-in').appendTo(div1);
		 div1_3.attr("id","comment_reply");
		  var div1_3_1 = $('<div></div>').addClass("comment_reply_input").appendTo(div1_3);
		  var div1_3_1_1 = $('<div></div>').addClass("isay_text_area area_display").appendTo(div1_3_1);
		   var div1_3_1_1_1 = $('<textarea></textarea>').addClass("target1").appendTo(div1_3_1_1);
		   div1_3_1_1_1.attr({'id':'target1','placeholder':''})
		   var div1_3_1_1_2 = $('<div></div>').addClass("isay_text_operate").appendTo(div1_3_1_1);
		    var div1_3_1_1_2_1 = $('<div></div>').addClass("isay_text_operate_emotion").appendTo(div1_3_1_1_2);
		    var div1_3_1_1_2_2 = $('<div></div>').addClass("isay_text_operate_picture").appendTo(div1_3_1_1_2);
		    var div1_3_1_1_2_3 = $('<div></div>').appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_3.attr("id","text_support").html('<input type="checkbox" name="" id="checkbox_support" class="checkbox" value="support" /><label for="checkbox_support"></label>&nbsp;正方');
		    var div1_3_1_1_2_4 = $('<div></div>').appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_4.attr("id","text_oppose").html('<input type="checkbox" name="" id="checkbox_oppose" class="checkbox" value="oppose" /><label for="checkbox_oppose"></label>&nbsp;反方');
		    var div1_3_1_1_2_5 = $('<input />').addClass("comment_btn").appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_5.attr({'type':'button','id':'comment_btn','value':'评论'});
		    var div1_3_1_1_2_6 = $('<input />').addClass("comment_btn2").appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_6.attr({'type':'button','value':'取消'});
		    var div1_3_2 = $('<div></div>').addClass("fallback").appendTo(div1_3);
		    div1_3_2.html("收起");
	}
	
	commentBtnEffect();
	//向评论树添加正反评论
//	$(function (count) {
//		for (var i=0;i<sql.length;i++) {
//			addComment(i,
//					   sql[i].commentType,
//					   sql[i].userPicURL,
//					   sql[i].userName,
//					   sql[i].commentTime,
//					   sql[i].likeNum,
//					   sql[i].commentContent,
//					   sql[i].commentNum
//			);
//			commentBtnEffect();
//		}
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
	
	//设置评论条目排列布局
	$(function setCommentPosition () {
		var supportCommentNum = $(".cd-timeline-support").find(".cd-timeline-block");
		var opposeCommentNum = $(".cd-timeline-oppose").find(".cd-timeline-block");
		var supportDate = supportCommentNum.eq(1).find(".pikachu_time").text();
		var supportTimestamp = Date.parse(new Date(supportDate));
		var opposeDate = opposeCommentNum.eq(1).find(".pikachu_time").text();
		var opposeTimestamp = Date.parse(new Date(opposeDate));
		function getMarginTop (inputStr) {
//			console.log(i+" "+parseInt(inputStr.substring(0,inputStr.length-2)));
			inputStr = parseInt(inputStr.substring(0,inputStr.length-2));
			return inputStr;
		}
		var dateLenth;
		supportCommentNum.length>opposeCommentNum.length?dateLenth=supportCommentNum.length:dateLenth=opposeCommentNum.length;
		var oppoMarginTo = 0;
		var supMarginTo = 0;
//		console.log(dateLenth);
		if (supportTimestamp>opposeTimestamp) {
			opposeCommentNum.eq(1).css("margin-top","80px");
			supportCommentNum.eq(1).css("margin-top","0");
			for (var i=2;i<dateLenth;i++) {
//				console.log("1=>"+oppoMarginTo+","+getMarginTop(opposeCommentNum.eq(i-1).css("margin-top"))+","+opposeCommentNum.eq(i-2).height());
				oppoMarginTo = oppoMarginTo + getMarginTop(opposeCommentNum.eq(i-1).css("margin-top")) + opposeCommentNum.eq(i-2).height();
//				console.log("2=>"+supMarginTo+","+getMarginTop(supportCommentNum.eq(i-1).css("margin-top"))+","+supportCommentNum.eq(i-2).height());
				supMarginTo = supMarginTo + getMarginTop(supportCommentNum.eq(i-1).css("margin-top")) + supportCommentNum.eq(i-2).height();
				if (oppoMarginTo+60 > supMarginTo+supportCommentNum.eq(i-1).height()) {
					supportCommentNum.eq(i).css("margin-top",oppoMarginTo+80-(supMarginTo+supportCommentNum.eq(i-1).height()));
				}else{
					supportCommentNum.eq(i).css("margin-top","20px");
				}
				if (supMarginTo+supportCommentNum.eq(i-1).height()+getMarginTop(supportCommentNum.eq(i).css("margin-top"))+60 > oppoMarginTo+opposeCommentNum.eq(i-1).height()) {
					opposeCommentNum.eq(i).css("margin-top",supMarginTo+supportCommentNum.eq(i-1).height()+getMarginTop(supportCommentNum.eq(i).css("margin-top"))+80-(oppoMarginTo+opposeCommentNum.eq(i-1).height()));
				}else{
					opposeCommentNum.eq(i).css("margin-top","20px");
				}
			}
		}else {
			supportCommentNum.eq(1).css("margin-top","80px");
			opposeCommentNum.eq(1).css("margin-top","0");
			for (var i=2;i<dateLenth;i++) {
				oppoMarginTo = oppoMarginTo + getMarginTop(opposeCommentNum.eq(i-1).css("margin-top")) + opposeCommentNum.eq(i-2).height();
				supMarginTo = supMarginTo + getMarginTop(supportCommentNum.eq(i-1).css("margin-top")) + supportCommentNum.eq(i-2).height();
				if (oppoMarginTo+opposeCommentNum.eq(i-1).height()+getMarginTop(opposeCommentNum.eq(i).css("margin-top"))+60 > supMarginTo+supportCommentNum.eq(i-1).height()) {
					supportCommentNum.eq(i).css("margin-top",oppoMarginTo+opposeCommentNum.eq(i-1).height()+getMarginTop(opposeCommentNum.eq(i).css("margin-top"))+80-(supMarginTo+supportCommentNum.eq(i-1).height()));
				}else{
					supportCommentNum.eq(i).css("margin-top","20px");
				}
				if (supMarginTo+60 > oppoMarginTo+opposeCommentNum.eq(i-1).height()) {
					opposeCommentNum.eq(i).css("margin-top",supMarginTo+80-(oppoMarginTo+opposeCommentNum.eq(i-1).height()));
				}else{
					opposeCommentNum.eq(i).css("margin-top","20px");
				}
			}
		}
	});

	
	
	/*******单个评论相关js---begin*******/
	//点赞数
	$(function () {
		$(".like").click(function () {
			var isChecked = $(this).attr("isChecked");
			var likeNum = $(this).find("div").html();
			if (isChecked == "false") {
				likeNum++;
				$(this).find("div").html(likeNum);
				$(this).attr("isChecked","true");
			} else{
				likeNum--;
				$(this).find("div").html(likeNum);
				$(this).attr("isChecked","false");
			}
		});
		$(".unlike").click(function () {
			var isChecked = $(this).attr("isChecked");
			var likeNum = $(this).find("div").html();
			if (isChecked == "false") {
				likeNum--;
				$(this).find("div").html(likeNum);
				$(this).attr("isChecked","true");
			} else{
				likeNum++;
				$(this).find("div").html(likeNum);
				$(this).attr("isChecked","false");
			}
		});
	});
	
	//加载回复页面的每条评论
//	$(function () {
//		var thisLoadArea = "";
//		var i = 0;
//		$(".comment_footer1").click(function () {
//			thisLoadArea = $(this).parents(".cd-timeline-block").find("#comment_reply");
//			thisLoadArea.css("display","inherit");
//			for (i;i<comment_reply.length;i++) {
//				addReplyComment(thisLoadArea,
//								comment_reply[i].commentType,
//								comment_reply[i].replyCommentType,
//								comment_reply[i].avatarPicURL,
//								comment_reply[i].userName,
//								comment_reply[i].replyName,
//								comment_reply[i].replyCommentContent,
//								comment_reply[i].likeNum,
//								comment_reply[i].replyTime,
//								comment_reply[i].floor
//				);
//			}
////			addReplyInput();
//			var top = $(this).parents(".cd-timeline-block").css("top");
//			top = parseInt(top.substring(top));
//			var height =$(this).parents(".cd-timeline-block").height();
////			iFrameHeight();
//			//判断评论高度(测试)
//			if (height >= $("#cd-timeline").height()) {
////				alert("1");
//			}
//		});
//		//收回评论页的效果
//		$(".comment_reply").on("click",".fallback",function () {
//			$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_1").removeClass("mark1_2");
//			$(this).parent().css("display","none");
////			$(this).parent().find(".comment_reply_item").css("display","none");	
//		});
//	});
	
	//评论按钮效果
	function commentBtnEffect () {
//		var lastElement = $(".comment_reply");
		//评论按钮效果
		$(".comment_footer").on("click",".comment_footer1",function () {
			$(".comment_reply").css("display","none");
			$(".comment_footer").removeClass("mark1_1 mark1_2");
			$(this).parent().removeClass("mark1_2").addClass("mark1_1");
//			console.log($(this).parents(".cd-timeline-block").find("#comment_reply").css("display"));
			if ($(this).parents(".cd-timeline-block").find(".comment_reply").css("display") == "none") {
				$(this).parents(".cd-timeline-block").find(".comment_reply").css("display","inherit");
			} else{
				$(this).parents(".cd-timeline-block").find(".comment_reply").css("display","none");
			}
			
			$(this).parents(".cd-timeline-block").find(".comment_reply").find(".comment_reply_input").css("display","none");
			$(this).parents(".cd-timeline-block").find(".fallback").css("visibility","visible");
			$(".comment_footer1,.comment_footer2").find("span").removeClass("comment_footer1_checked_red comment_footer1_checked_blue comment_footer2_checked_red comment_footer2_checked_blue");
//			$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer1 span").removeClass("comment_footer1_checked_red comment_footer1_checked_blue");
//			$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer2 span").removeClass("comment_footer2_checked_red comment_footer2_checked_blue");
			if ($(this).parents(".cd-timeline-support").length>0) {
				$(this).find("span").addClass("comment_footer1_checked_red");
				$(this).next(".comment_footer2").find("span").removeClass("comment_footer2_checked_red");
			}else{
				$(this).find("span").addClass("comment_footer1_checked_blue");
				$(this).next(".comment_footer2").find("span").removeClass("comment_footer2_checked_blue");
			}
			
		})
		//回复按钮效果
		.on("click",".comment_footer2",function () {
			$(".comment_reply").css("display","none");
			$(".comment_footer").removeClass("mark1_1 mark1_2");
			$(this).parent().removeClass("mark1_1").addClass("mark1_2");
			$(this).parents(".cd-timeline-block").find(".comment_reply").css("display","inherit");
			$(this).parents(".cd-timeline-block").find(".comment_reply").find(".comment_reply_input").css("display","inherit");
			var reply_text = $(this).parents(".cd-timeline-block").find(".pikachu_name a").html();
			$("#target1").attr("placeholder","回复："+reply_text);
			$(".isay_text_area_mark").css("display","none");
			$(".comment_footer1,.comment_footer2").find("span").removeClass("comment_footer1_checked_red comment_footer1_checked_blue comment_footer2_checked_red comment_footer2_checked_blue");
			if ($(this).parents(".cd-timeline-support").length>0) {
				$(this).find("span").addClass("comment_footer2_checked_red");
				$(this).prev(".comment_footer1").find("span").removeClass("comment_footer1_checked_red");
			}else{
				$(this).find("span").addClass("comment_footer2_checked_blue");
				$(this).prev(".comment_footer1").find("span").removeClass("comment_footer1_checked_blue");
			}
			//回复评论按钮在有无文字情况下的变化
			$(".isay_text_area").on("input",".target1",function () {
		        if ($(this).val() == "") {
		        	$(this).parent().find(".comment_btn").removeClass("comment_btn_enable");
	//	      		$(this).parent().find(".comment_btn").attr("disabled","disabled");
		        } else{
		        	$(this).parent().find(".comment_btn").addClass("comment_btn_enable");
	//	      		$(this).parent().find(".comment_btn").attr("disabled","");
		        }
			});
			if ($(this).parents(".cd-timeline-block").find(".comment_reply_item").length == 0) {
				$(this).parents(".cd-timeline-block").find(".fallback").css("visibility","hidden");
			}
			//回复框取消按钮效果
			$(".comment_reply_input").on("click",".comment_btn2",function () {
				$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_2").addClass("mark1_1");
				$(this).parents(".cd-timeline-block").find(".comment_reply_input").css("display","none");
				if ($(this).parents(".cd-timeline-support").length>0) {
					$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer1 span").addClass("comment_footer1_checked_red");
					$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer2 span").removeClass("comment_footer2_checked_red");
				}else{
					$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer1 span").addClass("comment_footer1_checked_blue");
					$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer2 span").removeClass("comment_footer2_checked_blue");
				}
				if ($(this).parents("#comment_reply").find(".comment_reply_item").length == 0) {
					$(this).parents("#comment_reply").css("display","none");
					$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_1");
					$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer1 span").removeClass("comment_footer1_checked_red comment_footer1_checked_blue");
					$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer2 span").removeClass("comment_footer2_checked_red comment_footer2_checked_blue");
				}
				$(this).parents(".cd-timeline-block").find(".fallback").css("visibility","visible");
				
			});
		});
		//收回评论页的效果
		$(".comment_reply").on("click",".fallback",function () {
			$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_1").removeClass("mark1_2");
			$(this).parent().css("display","none");
			$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer1 span").removeClass("comment_footer1_checked_red comment_footer1_checked_blue");
			$(this).parents(".comment_reply").prev(".cd-timeline-content").find(".comment_footer2 span").removeClass("comment_footer2_checked_red comment_footer2_checked_blue");
//			$(this).parent().find(".comment_reply_item").css("display","none");	
		});
	}
	
	

	//单个评论框弹出与收回以及设置默认回复字段
	$(function addReplyInput () {
		$(".comment_reply_item").on("click",".isay_operate_reply",function () {
			var thisCommentReplay = $(this).parents(".comment_reply_item");
			$(".isay_text_area_mark").css("display","none");
	//		addCommentInput(thisCommentReplay);
			thisCommentReplay.find(".isay_text_area_mark").css("display","inherit");
			var reply_text = $(this).parents(".comment_reply_item").find(".reply_name").html();
			$(this).parents(".comment_reply_item").find(".target1").attr("placeholder","回复："+reply_text);
			
			$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_2").addClass("mark1_1");
			$(this).parents(".cd-timeline-block").find(".comment_reply_input").css("display","none");
			//回复评论按钮在有无文字情况下的变化
			$(".isay_text_area").on("input",".target1",function () {
		        if ($(this).val() == "") {
		        	$(this).parent().find(".comment_btn").removeClass("comment_btn_enable");
		        } else{
		        	$(this).parent().find(".comment_btn").addClass("comment_btn_enable");
		        }
			});
			//textarea自动增高
			$(".isay_text_area").on("input keyup keypress",".target1",function MaxMe() {  
		        if (this.scrollTop > 0)
		        {
		        	this.style.height = $(this).height()+19+"px";
		        	
		        }
			});
		}).on("click",".comment_reply_cancel",function () {
			$(this).parents(".isay_text_area").css("display","none");
		});
	});
	//添加评论框
//	function addCommentInput (thisCommentReplay) {
//		var f1 = $('<form>').addClass('isay_text_area isay_text_area_mark').appendTo(thisCommentReplay);
//		f1.attr({"action":"","method":"post"});
//		 var f1_1 = $('<textarea></textarea>').addClass('target1').appendTo(f1);
//		 var f1_2 = $('<div></div>').addClass('isay_text_operate').appendTo(f1);
//		  var f1_2_1 = $('<div></div>').addClass('isay_text_operate_emotion').appendTo(f1_2);
//		  var f1_2_2 = $('<div></div>').addClass('isay_text_operate_picture').appendTo(f1_2);
//		  var f1_2_3 = $('<div></div>').appendTo(f1_2);
//		  f1_2_3.attr("id","text_support");
//		  f1_2_3.html('<input type="checkbox" name="" id="checkbox_support" class="checkbox" value="support" /><label for="checkbox_support"></label>&nbsp;正方');
//		  var f1_2_4 = $('<div></div>').appendTo(f1_2);
//		  f1_2_4.attr("id","text_oppose");
//		  f1_2_4.html('<input type="checkbox" name="" id="checkbox_oppose" class="checkbox" value="oppose" /><label for="checkbox_oppose"></label>&nbsp;反方');
//		  var f1_2_5 = $("<input />").addClass("comment_btn").appendTo(f1_2);
//		  f1_2_5.attr({"type":"submit","id":"comment_btn","value":"评论"});
//		  var f1_2_6 = $("<input />").addClass("comment_reply_cancel").appendTo(f1_2);
//		  f1_2_6.attr({"type":"button","value":"取消"});
//		checkBoxSelect();
//	}
	
	$(function checkBoxSelect () {
		//正方勾选
		$(".isay_text_operate").on("mouseover",".text_support",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_oppose_hover");
			$(this).find("input[type=checkbox]").addClass("checkbox_support_hover");
		}).on("mouseout",".text_support",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_support_hover");
		}).on("click",".text_support",function () {
			$(this).parent().find("input[type=checkbox]").removeClass("checkbox_support_check checkbox_oppose_check");
			$(this).find("input[type=checkbox]").addClass("checkbox_support_check");
		});
		//反方勾选
		$(".isay_text_operate").on("mouseover",".text_oppose",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_support_hover");
			$(this).find("input[type=checkbox]").addClass("checkbox_oppose_hover");
		}).on("mouseout",".text_oppose",function () {
			$(this).find("input[type=checkbox]").removeClass("checkbox_oppose_hover");
		}).on("click",".text_oppose",function () {
			$(this).parent().find("input[type=checkbox]").removeClass("checkbox_support_check checkbox_oppose_check");
			$(this).find("input[type=checkbox]").addClass("checkbox_oppose_check");
		});
	});
	
	//textarea自动增高
	$(".isay_text_area").on("input keyup keypress",".target1",function MaxMe() {  
        if (this.scrollTop > 0)
        {
        	this.style.height = $(this).height()+19+"px";
        	
        }
	});
	
	
	
	
	
	
	//评论的回复测试数据
	var comment_reply=[{
						'commentType':'support',
						'replyCommentType':'oppose',
						'avatarPicURL':'../../../img/unlogin.png',
						'userName':'是的撒大大',
						'replyName':'123456',
						'replyCommentContent':'jjdjabdsakljasfdalskdfjaslfjalfasklfjaslkfjaslkfjaslkdjaslkdjaslkdjaslkdjaslkdjlhsdlhf',
						'likeNum':'23',
						'replyTime':'07/19 11:59',
						'floor':'1'
					   },
			 		   {
						'commentType':'oppose',
						'replyCommentType':'oppose',
						'avatarPicURL':'../../../img/unlogin.png',
						'userName':'123456',
						'replyName':'是的',
						'replyCommentContent':'jjdjabdsakljasfdalskdfjaslfjalfasklfjaslkfjaslkfjaslkdjaslkdjaslkdjaslkdjaslkdjlhsdlhf',
						'likeNum':'1',
						'replyTime':'07/19 11:59',
						'floor':'2'
					   },
			           {
						'commentType':'oppose',
						'replyCommentType':'support',
						'avatarPicURL':'../../../img/unlogin.png',
						'userName':'是的',
						'replyName':'是的撒大大',
						'replyCommentContent':'jjdjabdsakljasfdalskdfjaslfjalfasklfjaslkfjaslkfjaslkdjaslkdjaslkdjaslkdjaslkdjlhsdlhf',
						'likeNum':'2',
						'replyTime':'07/19 11:59',
						'floor':'3'
					   },
			           {
						'commentType':'support',
						'replyCommentType':'support',
						'avatarPicURL':'../../../img/unlogin.png',
						'userName':'是的撒大大',
						'replyName':'是的撒大大2',
						'replyCommentContent':'jjdjabdsakljasfdalskdfjaslfjalfasklfjaslkfjaslkfjaslkdjaslkdjaslkdjaslkdjaslkdjlhsdlhf',
						'likeNum':'55',
						'replyTime':'07/19 11:59',
						'floor':'4'
					   },
			           {
						'commentType':'support',
						'replyCommentType':'oppose',
						'avatarPicURL':'../../../img/unlogin.png',
						'userName':'是的撒大大',
						'replyName':'123456',
						'replyCommentContent':'jjdjabdsakljasfdalskdfjaslfjalfasklfjaslkfjaslkfjaslkdjaslkdjaslkdjaslkdjaslkdjlhsdlhf',
						'likeNum':'23',
						'replyTime':'07/19 11:59',
						'floor':'5'
					   }]
	//添加回复评论
	function addReplyComment (thisLoadArea,commentType,replyCommentType,avatarPicURL,userName,replyName,replyCommentContent,likeNum,replyTime,floor) {
		var div1 = $('<div></div>').addClass('comment_reply_item').appendTo(thisLoadArea);
		 var div1_1 = $('<div></div>').addClass('isay_area').appendTo(div1);
		if (commentType == "support") {
			div1.attr({"commentType":"support"});
			var div1_1_1 = $('<div></div>').addClass('isay_support_avatar').appendTo(div1_1);
			var div1_1_3 = $('<div></div>').addClass('isay_support_like').appendTo(div1_1);
		} else{
			div1.attr({"commentType":"oppose"});
			var div1_1_1 = $('<div></div>').addClass('isay_oppose_avatar').appendTo(div1_1);
			var div1_1_3 = $('<div></div>').addClass('isay_oppose_like').appendTo(div1_1);
		}
		   var div1_1_1_1 = $('<a></a>').appendTo(div1_1_1);
		   div1_1_1_1.attr("href","#cd-timeline").html('<img src="'+avatarPicURL+'"/>');
		  var div1_1_2 = $('<div></div>').addClass('isay_content').appendTo(div1_1);
		  var str = "";
		  if (commentType == "support") {
		  	str += '<a href="#cd-timeline" class="reply_name reply_name_s">'+userName+'</a>：回复';
		  } else{
		  	str += '<a href="#cd-timeline" class="reply_name reply_name_o">'+userName+'</a>：回复';
		  }
		  if (replyCommentType == "support") {
		  	str += '<a href="#cd-timeline" class="reply_name reply_name_s">'+replyName+'</a>：';
		  } else{
		  	str += '<a href="#cd-timeline" class="reply_name reply_name_o">'+replyName+'</a>：';
		  }
		  str = str + replyCommentContent;
		  div1_1_2.html(str);
		  div1_1_3.html(likeNum+"<br />赞");
		 var div1_2 = $('<div></div>').addClass('isay_time').appendTo(div1);
		 div1_2.html(replyTime);
		 var div1_3 = $('<div></div>').addClass('isay_operate_area').appendTo(div1);
		  var div1_3_1 = $('<div></div>').addClass('isay_operate isay_operate_reply').appendTo(div1_3);
		  div1_3_1.html("<span >回复</span>");
		  var div1_3_2 = $('<div></div>').addClass('isay_operate isay_operate_like').appendTo(div1_3);
		  div1_3_2.html("<span >赞</span>");
		  var div1_3_3 = $('<div></div>').addClass('isay_operate isay_operate_report').appendTo(div1_3);
		  div1_3_3.html("<span >举报</span>");
		 var div1_4 = $('<div></div>').addClass('isay_floor').appendTo(div1);
		 div1_4.html("#"+floor);
	}

});