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
	
	var sql=[{
				'commentType':'support',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'11',
				'commentTime':'07/20 11:52',
				'likeNum':'11',
				'commentContent':'真理惟一可靠的标准就是永远自相符合。 —— 欧文',
				'commentNum':'11'
			 },
			 {
				'commentType':'oppose',
				'userPicURL':'../../../img/personal/strangerPic.png',
				'userName':'22',
				'commentTime':'07/20 11:52',
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
				'commentContent':'相信谎言的人必将在真理之前毁灭。 —— 赫尔巴特',
				'commentNum':'99'
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
				'commentContent':'爱情原如树叶一样，在人忽视里绿了，在忍耐里露出蓓蕾。 —— 何其芳',
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
				'commentContent':'爱情原如树叶一样，在人忽视里绿了，在忍耐里露出蓓蕾。 —— 何其芳',
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
	]
	
	//构建评论树评论
	function addComment (i,comment_heigth,comment_top,comment_type,commentType,userPicURL,userName,commentTime,likeNum,commentContent,commentNum) {
		$('<!--评论块——cd-timeline-block'+(i+1)+'-->').appendTo($("#cd-timeline"));
		var div1 = $('<div>').addClass('cd-timeline-block').appendTo($("#cd-timeline"));
		if (i==0) {
			div1.css("top",0);
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-picture').appendTo(div1);
			  div1_1.html('P');
		}
		else if (i==1) {
			div1.css("top","90px");
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-movie').appendTo(div1);
			  div1_1.html('N');
		}
		else if (commentType=="support") {
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-picture').appendTo(div1);
			  div1_1.html('P');
		}
		else if (commentType=="oppose") {
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-movie').appendTo(div1);
			  div1_1.html('N');
		}
		var toTop1 = comment_top[i-2]+comment_heigth[i-2]+20;
		var toTop2 = comment_top[i-1]+90;
		toTop1>toTop2?div1.css("top",toTop1):div1.css("top",toTop2);
//		console.log(comment_type[i]+","+comment_type[i-1]);
		if (comment_type[i] == comment_type[i-1]) {
			switch (comment_type[i]){
				case "support":
					break;
				case "oppose":
					break;
				default:
					break;
			}
			div1.css("top",comment_top[i-1]+comment_heigth[i-1]+20);
		}
//		console.log(toTop1+","+toTop2+","+div1.css("top")+'\n');
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
		    
		if (commentType == "oppose") {
			$(".cd-timeline-block").eq(i).addClass("even-cd-timeline-block");
		}
	}
	
	$(function (count) {
		var comment_heigth = {};
		var comment_top = {};
		var comment_type={};
		parseInt(comment_top);
		for (var i=0;i<sql.length;i++) {
			comment_type[i]=sql[i].commentType;
			addComment(i,
					   comment_heigth,
					   comment_top,
					   comment_type,
					   sql[i].commentType,
					   sql[i].userPicURL,
					   sql[i].userName,
					   sql[i].commentTime,
					   sql[i].likeNum,
					   sql[i].commentContent,
					   sql[i].commentNum
			);
			comment_heigth[i] = $(".cd-timeline-block").eq(i).height();
			comment_top[i] = $(".cd-timeline-block").eq(i).css("top");
			comment_top[i] = parseInt(comment_top[i].substring(0,comment_top[i].length-2));
			$("#cd-timeline").css("height",comment_top[i]+comment_heigth[i]+90);
			$(".line").css("height",comment_top[i]+comment_heigth[i]+90);
			commentBtnEffect();
		 }
		
	});
	
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
				console.log("1");
			} else{
				likeNum++;
				$(this).find("div").html(likeNum);
				$(this).attr("isChecked","false");
				console.log("2");
			}
		});
	});
	
	//加载回复页面的每条评论
	$(function () {
		var thisLoadArea = "";
		var i = 0;
		$(".comment_footer1").click(function () {
			thisLoadArea = $(this).parents(".cd-timeline-block").find("#comment_reply");
			for (i;i<comment_reply.length;i++) {
				addReplyComment(thisLoadArea,
								comment_reply[i].commentType,
								comment_reply[i].replyCommentType,
								comment_reply[i].avatarPicURL,
								comment_reply[i].userName,
								comment_reply[i].replyName,
								comment_reply[i].replyCommentContent,
								comment_reply[i].likeNum,
								comment_reply[i].replyTime,
								comment_reply[i].floor
				);
			}
			addReplyInput();
			var top = $(this).parents(".cd-timeline-block").css("top");
			top = parseInt(top.substring(top));
			var height =$(this).parents(".cd-timeline-block").height();
			console.log(top+" "+height+","+typeof(height)+" "+$("#cd-timeline").height()+","+typeof($("#cd-timeline").height()));
			if (height >= $("#cd-timeline").height()) {
				alert("1");
			}
		});
		//收回评论页的效果
		$(".comment_reply").on("click",".fallback",function () {
			$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_1").removeClass("mark1_2");
			$(this).parent().css("display","none");
			$(this).parent().find(".comment_reply_item").remove();	
			i=0;//可不需要
		});
	});
	
	//评论按钮效果
	function commentBtnEffect () {
		$(".comment_footer").on("click",".comment_footer1",function () {
			$(".comment_reply").css("display","none");
			$(".comment_footer").removeClass("mark1_1 mark1_2");
			$(this).parent().removeClass("mark1_2").addClass("mark1_1");
			$(this).parents(".cd-timeline-block").find(".comment_reply").css("display","inherit");
			$(this).parents(".cd-timeline-block").find(".comment_reply").find(".comment_reply_input").css("display","none");
			$(this).parents(".cd-timeline-block").find(".fallback").css("visibility","visible");
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
			checkBoxSelect();
			$(".isay_text_area_mark").remove();
			//回复评论按钮在有无文字情况下的变化
			$(".isay_text_area").on("input",".target1",function () {
		        console.log($(this).val());
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
				if ($(this).parents("#comment_reply").find(".comment_reply_item").length == 0) {
					$(this).parents("#comment_reply").css("display","none");
					$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_1");
				}
				$(this).parents(".cd-timeline-block").find(".fallback").css("visibility","visible");
			});
		});
	}
	//举报按钮出现与隐藏
//	$(".cd-timeline-content").hover(function () {
//		$(this).find(".comment_footer3 span").css("visibility","visible");
//	},
//	function () {
//		$(this).find(".comment_footer3 span").css("visibility","hidden");
//	});

	//单个评论框弹出与收回以及设置默认回复字段
	function addReplyInput () {
	$(".comment_reply_item").on("click",".isay_operate_reply",function () {
		var thisCommentReplay = $(this).parents(".comment_reply_item");
		$(".isay_text_area_mark").remove();
		addCommentInput(thisCommentReplay);
		var reply_text = $(this).parents(".comment_reply_item").find(".reply_name").html();
		$(this).parents(".comment_reply_item").find(".target1").attr("placeholder","回复："+reply_text);
		
		$(this).parents(".cd-timeline-block").find(".comment_footer").removeClass("mark1_2").addClass("mark1_1");
		$(this).parents(".cd-timeline-block").find(".comment_reply_input").css("display","none");
		//回复评论按钮在有无文字情况下的变化
		$(".isay_text_area").on("input",".target1",function () {
	        console.log($(this).val());
	        if ($(this).val() == "") {
	        	$(this).parent().find(".comment_btn").removeClass("comment_btn_enable");
//	      		$(this).parent().find(".comment_btn").attr("disabled","disabled");
	        } else{
	        	$(this).parent().find(".comment_btn").addClass("comment_btn_enable");
//	      		$(this).parent().find(".comment_btn").attr("disabled","");
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
		$(this).parent().parent().remove();
	});
	}
	//添加评论框
	function addCommentInput (thisCommentReplay) {
		var f1 = $('<form>').addClass('isay_text_area isay_text_area_mark').appendTo(thisCommentReplay);
		f1.attr({"action":"","method":"post"});
		 var f1_1 = $('<textarea></textarea>').addClass('target1').appendTo(f1);
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
		  var f1_2_6 = $("<input />").addClass("comment_reply_cancel").appendTo(f1_2);
		  f1_2_6.attr({"type":"button","value":"取消"});
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
	
	//测试数据
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