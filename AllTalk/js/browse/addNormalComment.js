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
		//动态生成评论区评论
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
			   $("<input />").addClass("title_report_btn").attr("type","button").val("举报").appendTo(d1_1_2_2);
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
});
