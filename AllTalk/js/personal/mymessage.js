$(document).ready(function () {
	//设定新消息数目
	
	
	//清除新消息数量设置
	$(function removeCheckedNum () {
		for (var i=0;i<$(".message_num").length;i++) {
			if ($(".message_num").eq(i).html() == "") {
				$(".message_num").eq(i).removeClass("message_num_padding");
			}
		}
		
	});
	
	//点击导航项目效果
	$(".index_message").click(function () {
		$("#myMessage_content").html("");
		$(".index_message").removeClass("index_message_checked");
		$(this).addClass("index_message_checked");
		$(this).find(".message_num").html("");
		$(this).find(".message_num").removeClass("message_num_padding");
		switch ($(this).attr("buttonIndex")){
			case "1":
				for (var i=0;i<reply_item.length;i++) {
					addMessageReplyItem(
						reply_item[i].personalURL,
						reply_item[i].imgURL,
						reply_item[i].name,
						reply_item[i].time,
						reply_item[i].replyContent,
						reply_item[i].replyFor,
						reply_item[i].topicURL,
						reply_item[i].topicTitle
					);
				}
				break;
			case "2":
				for (var i=0;i<aite_item.length;i++) {
					addMessageAiteItem(
						aite_item[i].aiteType,
						aite_item[i].personalURL,
						aite_item[i].imgURL,
						aite_item[i].name,
						aite_item[i].time,
						aite_item[i].aiteName,
						aite_item[i].replyContent,
						aite_item[i].replyFor,
						aite_item[i].topicURL,
						aite_item[i].topicTitle
					);
				}
				break;
			case "3":
				for (var i=0;i<like_item.length;i++) {
					addMessageLikeItem(
						like_item[i].personalURL,
						like_item[i].imgURL,
						like_item[i].name,
						like_item[i].time,
						like_item[i].replyFor
					);
				}
				break;
			case "4":
				for (var i=0;i<fans_item.length;i++) {
					addMessageFansItem(
						fans_item[i].personalURL,
						fans_item[i].imgURL,
						fans_item[i].name,
						fans_item[i].fansNum,
						fans_item[i].concernNum,
						fans_item[i].personalIntro
					);
				}
				break;
			case "5":
				for (var i=0;i<notice_item.length;i++) {
					addMessageNoticeItem(
						notice_item[i].linkURL,
						notice_item[i].noticeTitle,
						notice_item[i].time,
						notice_item[i].noticeContent
					);
				}
				break;
			case "6":
				for (var i=0;i<letter_item.length;i++) {
					addMessageLetterItem(
						letter_item[i].personalURL,
						letter_item[i].imgURL,
						letter_item[i].name,
						letter_item[i].time,
						letter_item[i].replyContent,
						letter_item[i].replyNum
					);
				}
				enterLetter(letter_item);
				break;
			case "7":
				break;
			case "8":
				break;
			default:
				break;
		}
	});
	
	var reply_item=[
		{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		},{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		},{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		},{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		},{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		}
	];
	//添加回复我的条目
	function addMessageReplyItem (personalURL,imgURL,name,time,replyContent,replyFor,topicURL,topicTitle) {
		var d1 = $('<div></div>').addClass('myMessage_reply  clearfloat').appendTo($("#myMessage_content"));
		 var d1_1 = $('<div></div>').addClass('myMessage_reply_pic').appendTo(d1);
		  var d1_1_1 = $('<a></a>').appendTo(d1_1);
		  d1_1_1.attr("href",personalURL).html('<img src="'+imgURL+'"/>');
		 var d1_2 = $('<div></div>').addClass('myMessage_reply_content').appendTo(d1);
		  var d1_2_1 = $('<div></div>').addClass('myMessage_reply_name').appendTo(d1_2);
		   var d1_2_1_1 = $('<a></a>').appendTo(d1_2_1);
		   d1_2_1_1.attr("href",personalURL);
		    var d1_2_1_1_1 = $('<span></span>').addClass("msg_reply_name").appendTo(d1_2_1_1);
		    d1_2_1_1_1.html(name);
		   var d1_2_1_2 = $('<span></span>').addClass("msg_reply_time").appendTo(d1_2_1);
		    d1_2_1_2.html(time);
		  var d1_2_2 = $('<div></div>').addClass('msg_reply_content').appendTo(d1_2);
		  d1_2_2.html(replyContent);
		  var d1_2_3 = $('<div></div>').addClass('msg_reply_for').appendTo(d1_2);
		  d1_2_3.html("<span>回复我的评论：</span>"+replyFor);
		  var d1_2_4 = $('<div></div>').addClass('myMessage_reply_title').appendTo(d1_2);
		   var d1_2_4_1 = $('<a></a>').appendTo(d1_2_4);
		   d1_2_4_1.attr("href",topicURL);
		    var d1_2_4_1_1 = $('<span></span>').addClass("msg_reply_topicname").appendTo(d1_2_4_1);
		    d1_2_4_1_1.html(topicTitle);
		    var d1_2_4_1_2 = $('<input />').appendTo(d1_2_4_1);
		    d1_2_4_1_2.attr({'type':'button','id':'myMessage_reply_btn','value':'回复'});
	}
	
	var aite_item=[
		{
			'aiteType':'type2',
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'aiteName':'昵称1',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		},{
			'aiteType':'type1',
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'aiteName':'昵称1',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		},{
			'aiteType':'type2',
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'aiteName':'昵称1',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
			'topicURL':'#message_content_area',
			'topicTitle':'“呃，是这样的，我是一个知乎管理员，我把它给禁言了。”',
		}
	];
	//添加@我的条目
	function addMessageAiteItem (aiteType,personalURL,imgURL,name,time,aiteName,replyContent,replyFor,topicURL,topicTitle) {
		var d1 = $('<div></div>').addClass('myMessage_aite  clearfloat').appendTo($("#myMessage_content"));
		 var d1_1 = $('<div></div>').addClass('myMessage_aite_pic').appendTo(d1);
		  var d1_1_1 = $('<a></a>').appendTo(d1_1);
		  d1_1_1.attr("href",personalURL).html('<img src="'+imgURL+'"/>');
		 var d1_2 = $('<div></div>').addClass('myMessage_aite_content').appendTo(d1);
		  var d1_2_1 = $('<div></div>').addClass('myMessage_aite_name').appendTo(d1_2);
		   var d1_2_1_1 = $('<a></a>').appendTo(d1_2_1);
		   d1_2_1_1.attr("href",personalURL);
		    var d1_2_1_1_1 = $('<span></span>').addClass("msg_aite_name").appendTo(d1_2_1_1);
		    d1_2_1_1_1.html(name);
		   var d1_2_1_2 = $('<span></span>').addClass("msg_aite_time").appendTo(d1_2_1);
		    d1_2_1_2.html(time);
		  var d1_2_2 = $('<div></div>').addClass('msg_aite_content').appendTo(d1_2);
		  d1_2_2.html("<span>@"+aiteName+"</span>"+replyContent);
		  if(aiteType == "type1"){
			  var d1_2_3 = $('<div></div>').addClass('msg_aite_for').appendTo(d1_2);
			  d1_2_3.html("<span>回复我的评论：</span>"+replyFor);
		  }
		  var d1_2_4 = $('<div></div>').addClass('myMessage_aite_title').appendTo(d1_2);
		   var d1_2_4_1 = $('<a></a>').appendTo(d1_2_4);
		   d1_2_4_1.attr("href",topicURL);
		    var d1_2_4_1_1 = $('<span></span>').addClass("msg_aite_topicname").appendTo(d1_2_4_1);
		    if (aiteType == "type2") {
		    	d1_2_4_1_1.addClass("msg_aite_topicname_type2");
		    }
		    d1_2_4_1_1.html(topicTitle);
		    var d1_2_4_1_2 = $('<input />').appendTo(d1_2_4_1);
		    d1_2_4_1_2.attr({'type':'button','id':'myMessage_aite_btn','value':'回复'});
	}
	
	var like_item=[
		{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyFor':'国王没办法，又听臣子说民间有很多奇人异士，就下了个诏令：谁能把公主救回来，赏赐黄金万两。民众蠢蠢欲动，丧生数千而止。又有大臣进谏，说金钱不是万能的。',
		}
	];
	//添加赞我的条目
	function addMessageLikeItem (personalURL,imgURL,name,time,replyFor) {
		var d1 = $('<div></div>').addClass('myMessage_like  clearfloat').appendTo($("#myMessage_content"));
		 var d1_1 = $('<div></div>').addClass('myMessage_like_pic').appendTo(d1);
		  var d1_1_1 = $('<a></a>').appendTo(d1_1);
		  d1_1_1.attr("href",personalURL).html('<img src="'+imgURL+'"/>');
		 var d1_2 = $('<div></div>').addClass('myMessage_like_content').appendTo(d1);
		  var d1_2_1 = $('<div></div>').addClass('myMessage_like_name').appendTo(d1_2);
		   var d1_2_1_1 = $('<a></a>').appendTo(d1_2_1);
		   d1_2_1_1.attr("href",personalURL);
		    var d1_2_1_1_1 = $('<span></span>').addClass("msg_like_name").appendTo(d1_2_1_1);
		    d1_2_1_1_1.html(name);
		   var d1_2_1_2 = $('<span></span>').addClass("msg_like_time").appendTo(d1_2_1);
		    d1_2_1_2.html(time);
		  var d1_2_2 = $('<div></div>').addClass('msg_like_content').appendTo(d1_2);
		  d1_2_2.html("攒了我的评论");
		  var d1_2_4 = $('<div></div>').addClass('myMessage_like_title').appendTo(d1_2);
		   var d1_2_4_1 = $('<div></div>').addClass('msg_like_for').appendTo(d1_2_4);
		   d1_2_4_1.html(replyFor);
		    var d1_2_4_2 = $('<input />').appendTo(d1_2_4);
		    d1_2_4_2.attr({'type':'button','id':'myMessage_like_btn','value':'回复'});
	}
	
	var fans_item=[
		{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'fansNum':'123',
			'concernNum':'456',
			'personalIntro':'当这个消息传来的时候，国王显得十分的焦躁。',
		}
	];
	//添加新粉丝的条目
	function addMessageFansItem (personalURL,imgURL,name,fansNum,concernNum,personalIntro) {
		var d1 = $('<div></div>').addClass('myMessage_fans  clearfloat').appendTo($("#myMessage_content"));
		 var d1_1 = $('<div></div>').addClass('myMessage_fans_pic').appendTo(d1);
		  var d1_1_1 = $('<a></a>').appendTo(d1_1);
		  d1_1_1.attr("href",personalURL).html('<img src="'+imgURL+'"/>');
		 var d1_2 = $('<div></div>').addClass('myMessage_fans_content').appendTo(d1);
		  var d1_2_1 = $('<div></div>').addClass('myMessage_fans_name').appendTo(d1_2);
		   var d1_2_1_1 = $('<a></a>').appendTo(d1_2_1);
		   d1_2_1_1.attr("href",personalURL);
		    var d1_2_1_1_1 = $('<span></span>').addClass("msg_fans_name").appendTo(d1_2_1_1);
		    d1_2_1_1_1.html(name);
		   var d1_2_1_2 = $('<div></div>').addClass("msg_fans_num").appendTo(d1_2_1);
		   d1_2_1_2.html("粉丝:<span>"+fansNum+"</span>关注:<span>"+concernNum+"</span>");
		   var d1_2_2 = $('<input />').appendTo(d1_2);
		   d1_2_2.attr({'type':'button','id':'myMessage_fans_btn','value':'回复'});
		   var d1_2_3 = $('<div></div>').addClass('msg_fans_content').appendTo(d1_2);
		   d1_2_3.html(personalIntro);
	}
	
	var notice_item=[
		{
			'linkURL':'#message_content_area',
			'noticeTitle':'通知-样式',
			'time':'07-22 14:35',
			'noticeContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。虽然公主死了也无碍，但还存在着另外一件令他十分困扰的事情：当初为了王室金库的安全，避免歹徒通过劫持自己，然后将金库的钱劫走，国王给王国的金库设置指纹锁时是用的公主的手指，而不是自己的手指，眼下，随着公主的被劫走，国家的资金已经快周转不开了。国王召集亲近大臣密谋，最后下令：去把公主救回来，实在不行，把手剁回来也行。',
		}
	];
	//添加通知的条目
	function addMessageNoticeItem (linkURL,noticeTitle,time,noticeContent) {
		var d1 = $('<div></div>').addClass('myMessage_notice  clearfloat').appendTo($("#myMessage_content"));
		 var d1_1 = $('<div></div>').addClass('myMessage_notice_content').appendTo(d1);
		 var d1_1_1 = $('<div></div>').addClass('myMessage_notice_title').appendTo(d1_1);
		  var d1_1_1_1 = $('<a></a>').appendTo(d1_1_1);
		  d1_1_1_1.attr("href",linkURL);
		   var d1_1_1_1_1 = $('<span></span>').addClass('msg_notice_title').appendTo(d1_1_1_1);
		   d1_1_1_1_1.html(noticeTitle);
		  var d1_1_1_2 = $('<span></span>').addClass('msg_notice_time').appendTo(d1_1_1);
		  d1_1_1_2.html(time);
		  var d1_1_2 = $('<div></div>').addClass('msg_notice_content').appendTo(d1_1);
		  d1_1_2.html(noticeContent);
	}
	
	var letter_item=[
		{
			'personalURL':'#message_content_area',
			'imgURL':'../../img/personal/strangerPic.png',
			'name':'回复我的-样式',
			'time':'07-22 14:35',
			'replyContent':'公主被恶龙抓走了。当这个消息传来的时候，国王显得十分的焦躁。',
			'replyNum':'10',
		}
	];
	//添加私信的条目
	function addMessageLetterItem (personalURL,imgURL,name,time,replyContent,replyNum) {
		var d1 = $('<div></div>').addClass('myMessage_letter  clearfloat').appendTo($("#myMessage_content"));
		 var d1_1 = $('<div></div>').addClass('myMessage_letter_pic').appendTo(d1);
		  var d1_1_1 = $('<a></a>').appendTo(d1_1);
		  d1_1_1.attr("href",personalURL).html('<img src="'+imgURL+'"/>');
		 var d1_2 = $('<div></div>').addClass('myMessage_letter_content').appendTo(d1);
		  var d1_2_1 = $('<div></div>').addClass('myMessage_letter_name').appendTo(d1_2);
		   var d1_2_1_1 = $('<a></a>').appendTo(d1_2_1);
		   d1_2_1_1.attr("href",personalURL);
		    var d1_2_1_1_1 = $('<span></span>').addClass("msg_letter_name").appendTo(d1_2_1_1);
		    d1_2_1_1_1.html(name);
		   var d1_2_1_2 = $('<span></span>').addClass("msg_letter_time").appendTo(d1_2_1);
		   d1_2_1_2.html(time);
		   var d1_2_2 = $('<div></div>').addClass('myMessage_letter_text').appendTo(d1_2);
		    var d1_2_2_1 = $('<span></span>').addClass('msg_letter_text').appendTo(d1_2_2);
		    d1_2_2_1.html(replyContent);
		    var d1_2_2_2 = $('<input />').addClass('myMessage_letter_btn').appendTo(d1_2_2);
		   d1_2_2_2.attr({'type':'button','id':'myMessage_letter_btn','value':replyNum});
	}
	
	//生成私信聊天页面
	function createDialogue () {
		var d1 = $("<div></div>").addClass("myMessage_dialogue").appendTo($("#myMessage_content"));
		 var d1_1 = $("<div></div>").addClass("dialogue_target_area").appendTo(d1);
		  var d1_1_1 = $("<div></div>").addClass("dialogue_back_btn").html("<").appendTo(d1_1);
		  var d1_1_2 = $("<div></div>").addClass("dialogue_target_name").html("123111").appendTo(d1_1);
		 var d1_2 = $("<div></div>").addClass("dialogue_content_area").attr("id","dialogue_content_area").appendTo(d1);
		 var d1_3 = $("<div></div>").addClass("dialogue_operate_area").appendTo(d1);
		  var d1_3_1 = $("<form></form>").appendTo(d1_3);
		  d1_3_1.attr({'action':'','method':'post'});
		   var d1_3_1_1 = $("<textarea></textarea>").addClass("dialogue_operate_input").attr("id","dialogue_operate_input").appendTo(d1_3_1);
		   var d1_3_1_2 = $("<div></div>").addClass("dialogue_operate_insert").appendTo(d1_3_1);
		   $("<img />").attr("src","../../img/topic/emo.png").appendTo(d1_3_1_2);
		   $("<img />").attr("src","../../img/topic/pic.png").appendTo(d1_3_1_2);
		   $("<input />").attr({'type':'button','id':'sendReply','value':'发送'}).appendTo(d1_3_1_2);
	};
	
	//私信聊天界面聊天条目
	function createDialogueItem (replyText) {
		var thisDate = new Date();
		var nowTime = "";
		var nowMonth = thisDate.getMonth()+1;
		var nowDate = thisDate.getDate();
		var nowHours = thisDate.getHours();
		var nowMinutes = thisDate.getMinutes();
		var nowSeconds = thisDate.getSeconds();
		if (nowMonth<10) {
			nowTime += "0" + nowMonth + "-";
		}else{
			nowTime += nowMonth + "-";
		}
		if (nowDate<10) {
			nowTime += "0" + nowDate + " ";
		}else{
			nowTime += nowDate + " ";
		}
		if (nowHours<10) {
			nowTime += "0" + nowHours + ":";
		}else{
			nowTime += nowHours + ":";
		}
		if (nowMinutes<10) {
			nowTime += "0" + nowMinutes + ":";
		}else{
			nowTime += nowMinutes + ":";
		}
		if (nowSeconds<10) {
			nowTime += "0" + nowSeconds;
		}else{
			nowTime += nowSeconds;
		}
   		
		var d1 = $("<div></div>").addClass("dialogue_content_item clearfloat").appendTo($("#dialogue_content_area"));
		 var d1_1 = $("<div></div>").addClass("dialogue_content_item_time").appendTo(d1);
		 d1_1.html(nowTime);
		 var d1_2 = $("<a></a>").appendTo(d1);
		 d1_2.attr("href","#message_content_area");
		  var d1_2_1 = $("<img />").addClass("dialogue_content_pic mydialogue_reply").attr("src","../../img/personal/strangerPic.png").appendTo(d1_2);
		 var d1_3 = $("<div></div>").addClass("dialogue_content_item_text mydialogue_reply").appendTo(d1);
		 d1_3.html(replyText);
	}
	
	
	
	//进入及退出私信界面
	function enterLetter (letter_item) {
		//点击进入私信聊天界面
		$("#myMessage_content").on("click","#myMessage_letter_btn",function () {
			$("#myMessage_content").html("");
			createDialogue();			
			$(".myMessage_dialogue").css("display","inherit");
			$(".myMessage_dialogue").animate({'marginLeft':'0'},1000);
		});
		//返回
		$("#myMessage_content").on("click",".dialogue_back_btn",function () {
			$(".myMessage_dialogue").animate({'marginLeft':'788px'},1000,function () {
				$(".myMessage_dialogue").css("display","none");
			});
			
			for (var i=0;i<letter_item.length;i++) {
					addMessageLetterItem(
						letter_item[i].personalURL,
						letter_item[i].imgURL,
						letter_item[i].name,
						letter_item[i].time,
						letter_item[i].replyContent,
						letter_item[i].replyNum
					);
				}
//				enterLetter(letter_item);
		});
		//点击发送按钮显示
		$("#myMessage_content").on("click","#sendReply",function () {
			var replyText = $("#dialogue_operate_input").val();
			if (replyText != "") {
				$("#dialogue_operate_input").val("");
				createDialogueItem(replyText);
			}
		});
	}
});