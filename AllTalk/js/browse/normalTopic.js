$(document).ready(function () {
	
	var commentTest = [{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称1',
		'commentTime':'07/28 17:48',
		'commentContent':'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		'commentNum':'123'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称2',
		'commentTime':'07/28 17:48',
		'commentContent':'bbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
		'commentNum':'123'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称3',
		'commentTime':'07/28 17:48',
		'commentContent':'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
		'commentNum':'123'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称4',
		'commentTime':'07/28 17:48',
		'commentContent':'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
		'commentNum':'123'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称5',
		'commentTime':'07/28 17:48',
		'commentContent':'e',
		'commentNum':'123'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称6',
		'commentTime':'07/28 17:48',
		'commentContent':'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
		'commentNum':'123'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称7',
		'commentTime':'07/28 17:48',
		'commentContent':'gggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
		'commentNum':'123'
	}]
	
	for (var i=0;i<commentTest.length;i++) {
		creatNormaltopicComment (
			commentTest[i].personalURL,
			commentTest[i].personalPic,
			commentTest[i].personalName,
			commentTest[i].commentTime,
			commentTest[i].commentContent,
			commentTest[i].commentNum
		);
	}
	
	//载入晾衣架的评论的函数
	function creatNormaltopicComment (personalURL,personalPic,personalName,commentTime,commentContent,commentNum) {
		var d1 = $("<div></div>").appendTo($(".multiple-items"));
		 var d2 = $("<div></div>").addClass("normalTopic_comment_top").appendTo(d1);
		 var d3 = $("<div></div>").addClass("normalTopic_comment_main").appendTo(d1);
		 //晾衣架评论页头像信息区
		 var d1_1 = $("<div></div>").addClass("normalTopic_comment_title clearfloat").appendTo(d3);
		  var d1_1_1 = $("<div></div>").addClass("title_pic").appendTo(d1_1);
		   var d1_1_1_1 = $("<a></a>").attr("href",personalURL).appendTo(d1_1_1);
		   $("<img />").attr("src",personalPic).appendTo(d1_1_1_1);
		  var d1_1_2 = $("<div></div>").addClass("title_name_area").appendTo(d1_1);
		   var d1_1_2_1 = $("<a></a>").addClass("title_name").attr("href",personalURL).html(personalName).appendTo(d1_1_2);
		   var d1_1_2_2 = $("<div></div>").addClass("title_report").appendTo(d1_1_2);
		   $("<input />").addClass("title_report_btn").attr("type","button").val("举报");
		   var d1_1_2_3 = $("<div></div>").addClass("title_time").html(commentTime).appendTo(d1_1_2);
		 //晾衣架评论页内容
		 var d1_2 = $("<div></div>").addClass("normalTopic_comment_content").appendTo(d3);
		 d1_2.html(commentContent);
		 //晾衣架评论页操作按钮
		 var d1_3 = $("<div></div>").addClass("normalTopic_comment_btn").appendTo(d3);
		  var d1_3_1 = $("<div></div>").addClass("btn_collection").appendTo(d1_3);
		   $("<span></span>").addClass("btn_collection_checked").appendTo(d1_3_1);
		  $("<div></div>").attr("id","btn_line").appendTo(d1_3);
		  var d1_3_2 = $("<div></div>").addClass("btn_comment clearfloat").appendTo(d1_3);
		   $("<span></span>").addClass("btn_comment_num").html(commentNum).appendTo(d1_3_2);
		  $("<div></div>").attr("id","btn_line").appendTo(d1_3);
		  var d1_3_3 = $("<div></div>").addClass("btn_like").appendTo(d1_3);
		   $("<span></span>").addClass("btn_like_checked").appendTo(d1_3_3);
		   
	}
	
	/******普通话题页相关******/

	//点击标签效果
	$(".normalTopic_label_area").on("click",".normalTopic_label_item",function () {
		var q = parseInt($(this).find(".normalTopic_label_item_like").html());
		if ($(this).attr("class") == "normalTopic_label_item") {
			$(this).addClass("normalTopic_label_item_checked");
			$(this).find(".normalTopic_label_item_like").addClass("normalTopic_label_item_like_checked");
			$(this).find(".normalTopic_label_item_like").html(q+1);
		} else{
			$(this).removeClass("normalTopic_label_item_checked");
			$(this).find(".normalTopic_label_item_like").removeClass("normalTopic_label_item_like_checked");
			$(this).find(".normalTopic_label_item_like").html(q-1);
		}
	});
	
	//评论页滚动
	$('.multiple-items').slick({
		  dots: true,
		  infinite: false,
		  slidesToShow: 4,
		  slidesToScroll: 4
	});
	var slideIndex = 1;
	$('.normalTopic_comment_publish').on('click', function  () {
//		if ($("#comment_disply").css("display") == "none") {
//			$("#comment_disply").css("display","block");
//		} else{
//			$("#comment_disply").css("display","none");
//		}
		$("#comment_disply").slideToggle(1000);
//		$("#comment_disply").fadeToggle(1000);
	});
	
	
	//鼠标点击评论操作区域事件
	$(".normalTopic_comment_btn").on("click",".btn_collection_checked,.btn_like_checked,.btn_comment_num",function () {
		if ($(this).attr("class") == "btn_collection_checked") {
			$(this).addClass("btn_collection_checked_blue");
		} else{
			$(this).removeClass("btn_collection_checked_blue");
		}
		if ($(this).attr("class") == "btn_like_checked") {
			$(this).addClass("btn_like_checked_blue");
		} else{
			$(this).removeClass("btn_like_checked_blue");
		}
		if ($(this).attr("class") == "btn_comment_num") {
			$(this).addClass("btn_comment_num_blue");
		} else{
			$(this).removeClass("btn_comment_num_blue");
		}
	});
	
	
	//textarea自动增高
	$(".normalTopic_comment_reply").on("input keyup keypress",".reply_input_text,.reply_content_input_text",function (){  
        if (this.scrollTop > 0)
        {
        	this.style.height = $(this).height()+19+"px";
        }
	});
	
	//晾衣架上的评论按钮事件
	$(".normalTopic_comment_btn").on("click",".btn_comment_num",function () {
		var thisReply = $(this).parents(".normalTopic_comment_btn").parent();		
		if (thisReply.find(".normalTopic_comment_reply").length>0 && thisReply.find(".normalTopic_comment_reply").css("display") == "block") {
			thisReply.find(".normalTopic_comment_reply").css("display","none");
		} 
		else if (thisReply.find(".normalTopic_comment_reply").length>0 && thisReply.find(".normalTopic_comment_reply").css("display") == "none") {
			thisReply.find(".normalTopic_comment_reply").css("display","block");
		}else{
			creatReplyInput (thisReply);			
			var thisReplyContent = $(this).parents(".normalTopic_comment_btn").parent().find(".normalTopic_comment_reply");
			for (var i=0;i<reply_item.length;i++) {
				creatReplyItem (
					thisReplyContent,
					reply_item[i].personalURL,
					reply_item[i].personalPic,
					reply_item[i].personalName,
					reply_item[i].replyContent,
					reply_item[i].replyTime
				);
			}
		}
	});

	//单条评论中的回复框按钮事件
	$(".reply_content").on("click",".reply_content_down_reply",function () {
        var thisComment = $(this).parents(".reply_content");
		if ($(this).parents(".reply_content").find(".reply_content_input").width() == null) {
			creatCommentInput(thisComment);
		} else{
			$(this).parents(".reply_content").find(".reply_content_input").remove();
		}
		
	});
	
	//举报按钮
	$(".title_name_area").on("click",".title_report",function () {
		var titleReport = $(this).find(".title_report_btn");
		if (titleReport.css("display") == "none") {
			titleReport.css("display","inline-block");
		} else{
			titleReport.css("display","none");
		}
//		$(this).find("#title_report").css("display","inline-block");
	}).on("click",".title_report_btn",function () {
		window.open("../../../view/user/mymessage.html");
	});
	
	//添加评论回复区
	function creatCommentInput (thisComment) {
		var d1 = $("<div></div>").addClass("reply_content_input").appendTo(thisComment);
		 var d1_1 = $("<textarea></textarea>").addClass("reply_content_input_text").attr("name","reply").appendTo(d1);
		 var d1_2 = $("<div></div>").addClass("reply_content_input_operate").appendTo(d1);
		  var d1_2_1 = $("<img />").attr("src","../../../img/topic/emo.png").appendTo(d1_2);;
		  var d1_2_2 = $("<img />").attr("src","../../../img/topic/pic.png").appendTo(d1_2);;
		  var d1_2_3 = $("<input />").attr({
		  	'type':'button',
		  	'id':'reply_content_input_submit',
		  	'value':'评论'
		  }).appendTo(d1_2);;
	}
	
	var reply_item = [{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称1',
		'replyContent':'是打开就发货速度积分换声卡上的地方合适的会计法刷卡缴费和可是对方设定沙发上地方水电费水电费方式是否水电费是',
		'replyTime':'7月29日 15:31'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称2',
		'replyContent':'是打开就发货速度积分换声卡上的地方合适的会计法刷卡缴费和可是对方设定沙发上地方水电费水电费方式是否水电费是',
		'replyTime':'7月29日 15:31'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称2.5',
		'replyContent':'是打开就发货速度积分换声卡上的地方合适的会计法刷卡缴费和可是对方设定沙发上地方水电费水电费方式是否水电费是',
		'replyTime':'7月29日 15:31'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称3',
		'replyContent':'是打开就发货速度积分换声卡上的地方合适的会计法刷卡缴费和可是对方设定沙发上地方水电费水电费方式是否水电费是',
		'replyTime':'7月29日 15:31'
	},{
		'personalURL':'#reply_content',
		'personalPic':'../../../img/personal/strangerPic.png',
		'personalName':'昵称4',
		'replyContent':'是打开就发货速度积分换声卡上的地方合适的会计法刷卡缴费和可是对方设定沙发上地方水电费水电费方式是否水电费是',
		'replyTime':'7月29日 15:31'
	}]
	
	//添加评论区
	function creatReplyInput (thisReply) {
		//评论页头部信息
		var d1 = $("<div></div>").addClass("normalTopic_comment_reply").appendTo(thisReply);
		 var d1_1 = $("<div></div>").addClass("reply_input").appendTo(d1);
		  var d1_1_1 = $("<textarea></textarea>").addClass("reply_input_text").attr("name","reply").appendTo(d1_1);
		  var d1_1_2 = $("<div></div>").addClass("reply_input_operate").appendTo(d1_1);
		  $("<img />").attr("src","../../../img/topic/emo.png").appendTo(d1_1_2);
		  $("<img />").attr("src","../../../img/topic/pic.png").appendTo(d1_1_2);
		  $("<input />").attr({'type':'button','id':'reply_input_submit','value':'评论'}).appendTo(d1_1_2);
	}
	function creatReplyItem (thisReplyContent,personalURL,personalPic,personalName,replyContent,replyTime) {
		//评论页内容区域
		 var d1_2 = $("<div></div>").addClass("reply_content").attr("id","reply_content").appendTo(thisReplyContent);
		  //评论主体部分
		  var d1_2_1 = $("<div></div>").addClass("reply_content_up").appendTo(d1_2);
		   var d1_2_1_1 = $("<a></a>").addClass("reply_content_up_pic").attr("href",personalURL).appendTo(d1_2_1);
		   $("<img />").attr("src",personalPic);
		   var d1_2_1_2 = $("<span></span>").addClass("reply_content_up_content").appendTo(d1_2_1);
		   d1_2_1_2.html('<a href='+personalURL+'>'+personalName+':</a>'+replyContent);
		  //评论操作部分
		  var d1_2_2 = $("<div></div>").addClass("reply_content_down").appendTo(d1_2);
		   var d1_2_2_1 = $("<span></span>").addClass("reply_content_down_time").appendTo(d1_2_2);
		   d1_2_2_1.html(replyTime);
		   var d1_2_2_2 = $("<span></span>").addClass("reply_content_down_operate").appendTo(d1_2_2);
		   	$("<span></span>").addClass("reply_content_down_report").html("举报").appendTo(d1_2_2_2);
		   	$("<span></span>").addClass("reply_content_down_reply").html("回复").appendTo(d1_2_2_2);
		   	var d1_2_2_2_1 = $("<span></span>").addClass("reply_content_down_like").appendTo(d1_2_2_2);
		   	 $("<img />").attr("src","../../../img/browse/normalTopic/icon_like_small.png").appendTo(d1_2_2_2_1);
    	//单条评论中的回复框按钮事件
		$(".reply_content").on("click",".reply_content_down_reply",function () {
	        var thisComment = $(this).parents(".reply_content");
	        $(this).parents(".reply_content").parent().find(".reply_content_input").not($(this).parents(".reply_content").find(".reply_content_input")).remove();
			if ($(this).parents(".reply_content").find(".reply_content_input").length <= 0) {
				creatCommentInput(thisComment);
			} else{
				$(this).parents(".reply_content").find(".reply_content_input").remove();
			}
			
		});
		//textarea自动增高
		$(".normalTopic_comment_reply").on("input keyup keypress",".reply_input_text,.reply_content_input_text",function (){  
	        if (this.scrollTop > 0)
	        {
	        	console.log(this.scrollTop);
	        	this.style.height = $(this).height()+19+"px";
	        }
		});
	}
	
	
	
});