$(document).ready(function () {
	//标签位置设定
	$(function setTagPos () {
		var tagsNum = $(".normalTopic_label_area").find("ul li").length;
		for (var i=0;i<tagsNum;i++) {
//			console.log($(".normalTopic_label_area").find("ul li").eq(i).width());
		}
//		console.log(tagsNum);
	});
	
	//发布成功提示
	$("#comment_input_submit").click(function () {
		swal({
		  title: '发布成功',
		  type: 'success',
		  padding: 0,
		  timer: 1500
		});
	});

	/******普通话题页相关******/

	
	
	//评论页滚动
	$('.multiple-items').slick({
		  dots: true,
		  infinite: false,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  draggable:false
	});
	var slideIndex = 1;
	//左侧评论按钮点击后输入框效果
	$('.normalTopic_comment_publish').on('click', function  () {
//		if ($("#comment_disply").css("display") == "none") {
//			$("#comment_disply").css("display","block");
//		} else{
//			$("#comment_disply").css("display","none");
//		}
		$("#comment_disply").slideToggle(1000);
//		$("#comment_disply").fadeToggle(1000);
	});
	/*****右侧分页操作区效果*****/
	var comment_page_num_index = 1;
	$(".slick-dots li").eq(0).find("button").addClass("comment_page_num_button_active");
	//分页页码按钮颜色变化
	$(".normalTopic_comment_pole").on("click",".slick-prev",function () {
		if (comment_page_num_index>1) {
			comment_page_num_index--;
		}
		setPageNum(comment_page_num_index);
	});
	$(".normalTopic_comment_pole").on("click",".slick-next",function () {
		if (comment_page_num_index<$(".slick-dots li").length) {
			comment_page_num_index++;
		}
		setPageNum(comment_page_num_index);
	});
	$(".normalTopic_comment_pole").on("click",".comment_page_num_button",function () {
		comment_page_num_index = $(this).attr("index");
		setPageNum(comment_page_num_index);
	});
	//绑定上一页按钮功能
	$(".normalTopic_comment_prev").click(function () {
		$(".slick-prev").trigger("click");
	});
	//绑定下一页按钮功能
	$(".normalTopic_comment_next").click(function () {
		$(".slick-next").trigger("click");
	});
	//绑定尾页按钮功能
	$(".normalTopic_comment_bottom").click(function () {
		$(".comment_page_num_button").eq($(".slick-dots li").length-1).trigger("click");
	});
	//绑定跳转按钮功能
	$(".turnTo_comment_page_btn").click(function () {
		var pageNum = $("#turnTo_comment_page").val();
		$(".comment_page_num_button").eq(pageNum-1).trigger("click");
	});
	//页码按钮效果
	function setPageNum (index) {
		$(".comment_page_num_button").removeClass("comment_page_num_button_active");
		for (var i=0;i<$(".slick-dots li").length;i++) {
			if ($(".slick-dots li").eq(i).find("button").attr("index") == index) {
				$(".slick-dots li").eq(i).find("button").addClass("comment_page_num_button_active");
			}
		}
	}
	
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
	$(".normalTopic_comment_main").on("click",".btn_comment_num",function () {
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
				//单条评论中的回复框按钮事件
				$(".reply_content_down_reply").click(function () {
			        var thisComment = $(this).parents(".reply_content");
			        console.log(thisComment.find(".reply_content_input").length);
					if (thisComment.find(".reply_content_input").length == 0) {
						$(this).parents(".normalTopic_comment_reply").find(".reply_content_input").remove();
						creatCommentInput(thisComment);
						console.log("1");
					} else{
						thisComment.find(".reply_content_input").remove();
						console.log("2");
					}
				});
//		$(".reply_content").on("click",".reply_content_down_reply",function () {
//			console.log("1");
//	        var thisComment = $(this).parents(".reply_content");
//			if (thisComment.find(".reply_content_input").length == 0) {
//				$(this).parents(".normalTopic_comment_reply").find(".reply_content_input").remove();
//				creatCommentInput(thisComment);
//			} else{
//				thisComment.find(".reply_content_input").remove();
//			}
//			
//		});
			
		}
	});

//	//单条评论中的回复框按钮事件
//	$(".reply_content").on("click",".reply_content_down_reply",function () {
//      var thisComment = $(this).parents(".reply_content");
//		if (thisComment.find(".reply_content_input").length == 0) {
//			$(this).parents(".normalTopic_comment_reply").find(".reply_content_input").remove();
//			creatCommentInput(thisComment);
//		} else{
//			thisComment.find(".reply_content_input").remove();
//		}
//		
//	});
	
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