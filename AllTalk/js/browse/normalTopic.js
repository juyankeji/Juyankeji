$(document).ready(function () {
	/**普通话题页相关**/
	
	//评论页滚动
	jQuery(".slideGroup .slideBox").slide({ 
		mainCell:"ul",
		scroll:4,
		vis:4,
		prevCell:".sPrev",
		nextCell:".sNext",
		effect:"leftLoop"
	});
	
	//textarea自动增高
	$(".normalTopic_comment_reply").on("input keyup keypress",".reply_input_text,.reply_content_input_text",function (){  
        if (this.scrollTop > 0)
        {
        	this.style.height = $(this).height()+19+"px";
        }
	});

//jQuery(".slideGroup").slide({titCell:".parHd li",mainCell:".parBd"});
	
	$("#reply_content").on("click","#reply_content_down_reply",function () {
//		creatNormaltopicComment();
		console.log($(this).parents("#reply_content").find(".reply_content_input").width());
		if ($(this).parents("#reply_content").find(".reply_content_input").width() == null) {
			creatCommentInput();
		} else{
			$(this).parents("#reply_content").find(".reply_content_input").remove();
		}
		
	});
	
	//添加评论回复区
	function creatCommentInput () {
		var d1 = $("<div></div>").addClass("reply_content_input").appendTo($("#reply_content"));
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
	
	//添加评论回复区
	function creatNormaltopicComment () {
		
	}
});