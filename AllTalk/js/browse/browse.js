$(document).ready(function () {
	$(".topic_item").animate({opacity:'1'});
	//设置标签颜色的函数
	var itemType;
	var ctx;
	function setColor () {
		var colorType;
		var type;
		for (var i = 0;i < $(".topic_item_content").length;i++) {
			colorType = $(".topic_item_content").eq(i).attr("colorType");
			itemType = $(".topic_item_content").eq(i).attr("itemType");
			type = colorType + itemType;
			if (i%2 == 1) {
				$(".triangle").eq(i).css("bottom",'0');
			}
			//调用绘制图片遮盖函数
			ctx = $(".triangle")[i].getContext("2d");
			triangle(ctx,itemType,"#fff");
			//添加标签边框颜色
			switch (type){
				case "o1":
					$(".topic_item_content").eq(i).addClass("colorType_o_1");
					break;
				case "o2":
					$(".topic_item_content").eq(i).addClass("colorType_o_2");
					break;
				case "b1":
					$(".topic_item_content").eq(i).addClass("colorType_b_1");
					break;
				case "b2":
					$(".topic_item_content").eq(i).addClass("colorType_b_2");
					break;
				case "g1":
					$(".topic_item_content").eq(i).addClass("colorType_g_1");
					break;
				case "g2":
					$(".topic_item_content").eq(i).addClass("colorType_g_2");
					break;
				default:
					break;
			}
		}
	};
	//调用设置标签
	$(setColor());
	
	//单个item鼠标移入事件
	$(document).on("mousemove",".topic_item",function () {
		itemType = $(this).find(".topic_item_content").attr("itemType");
		if (itemType == "1") {
			var q = $(this).find(".topic_item_content").css("border-top-color");
			$(this).find(".triangle").css("margin-top","-1px");
		}else{
			var q = $(this).find(".topic_item_content").css("border-bottom-color");
			$(this).find(".triangle").css("margin-bottom","-1px");
		}
		ctx = $(this).find(".triangle")[0].getContext("2d");
		triangle(ctx,itemType,"#ff6666");
		$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote,.topic_tag").attr("style","color:#ffffff");
		$(this).find(".topic_tag img").attr("src","../img/browse/topic_tag2.png");
		$(this).find(".topic_browse img").attr("src","../img/browse/topic_browse2.png");
		$(this).find(".topic_vote img").attr("src","../img/browse/topic_vote2.png");
		$(this).find(".topic_tag").css("border-bottom-color","#FFFFFF");
		switch (q){
			case "rgb(255, 192, 102)":
				$(this).addClass("topic_item_hover1");
				break;
			case "rgb(153, 153, 238)":
				$(this).addClass("topic_item_hover2");
				break;
			case "rgb(136, 204, 204)":
				$(this).addClass("topic_item_hover3");
				break;
			default:
				break;
		}
		triangle(ctx,itemType,q);
	})
	//鼠标移出恢复
	.on("mouseout",".topic_item",function () {
		$(this).removeClass("topic_item_hover1");
		$(this).removeClass("topic_item_hover2");
		$(this).removeClass("topic_item_hover3");
		ctx = $(this).find(".triangle")[0].getContext("2d");
		triangle(ctx,itemType,"#ffffff");
		$(this).find(".topic_title,.topic_time,.topic_browse,.topic_vote,.topic_tag").attr("style","");
		$(this).find(".triangle1").attr("src","../img/browse/triangle.png");
		$(this).find(".topic_tag img").attr("src","../img/browse/topic_tag.png");
		$(this).find(".topic_browse img").attr("src","../img/browse/topic_browse.png");
		$(this).find(".topic_vote img").attr("src","../img/browse/topic_vote.png");
	});
	
	//绘制图片遮盖
	function triangle (ctx,itemType,color) {
	   ctx.fillStyle = color;//填充的颜色
	   if (itemType == "1") {
		   ctx.beginPath();
		   ctx.moveTo(0,0);
		   ctx.lineTo(230,0);
		   ctx.lineTo(230,14);
		   ctx.lineTo(129,14);
		   ctx.lineTo(115,0);
		   ctx.lineTo(101,14);
		   ctx.lineTo(0,14);
		   ctx.closePath();
		   ctx.fill();//填充颜色
	   } else{
		   ctx.beginPath();
		   ctx.moveTo(0,0);
		   ctx.lineTo(101,0);
		   ctx.lineTo(115,14);
		   ctx.lineTo(129,0);
		   ctx.lineTo(230,0);
		   ctx.lineTo(230,14);
		   ctx.lineTo(0,14);
		   ctx.closePath();
		   ctx.fill();//填充颜色
	   }
	}
	//构建item内的元素
	function addTopicItem (tagName,title,time,editor,browseNum,support,oppose,imgSrc,colorType,itemType) {
		if (itemType == "1") {
			var div1 = $('<div>').addClass('topic_item').appendTo($('#topic_area'));
			 //加入话题内容区域
			 var div1_1 = $('<div>').addClass('topic_item_content').appendTo(div1);
			 $(div1_1).attr({'colorType':colorType,'itemType':itemType});
			  //加入话题标签区域
			  var div1_1_1 = $('<div>').addClass('topic_tag').appendTo(div1_1);
			   var div1_1_1_1 = $('<span></span>').appendTo(div1_1_1);
			   $(div1_1_1_1).html('<img src="../img/browse/topic_tag.png"/>'+tagName);
			  //加入话题文字区域
			  var div1_1_2 = $('<div>').addClass('topic_item_text').appendTo(div1_1);
			   var div1_1_2_1 = $('<p></p>').addClass('topic_title').appendTo(div1_1_2);
			   $(div1_1_2_1).html(title);
			   var div1_1_2_2 = $('<span></span>').addClass('topic_time').appendTo(div1_1_2);
			   $(div1_1_2_2).html(time+"&nbsp;&nbsp;&nbsp;"+editor);
			   var div1_1_2_3 = $('<div></div>').addClass('topic_item_num').appendTo(div1_1_2);
			    var div1_1_2_3_1 = $('<span></span>').addClass('topic_browse').appendTo(div1_1_2_3);
			    $(div1_1_2_3_1).html('<img src="../img/browse/topic_tag.png"/>'+browseNum);
			    var div1_1_2_3_2 = $('<span></span>').addClass('topic_vote').appendTo(div1_1_2_3);
			    $(div1_1_2_3_2).html('<img src="../img/browse/topic_vote.png"/>' + support + '/'+oppose);
			 //加入话题图片区域
			 var div1_2 = $('<div>').addClass('topic_item_img').appendTo(div1);
			  var div1_2_1 = $('<canvas></canvas>').addClass('triangle').attr({'width':'230','height':'14'}).appendTo(div1_2);
			  var div1_2_2 = $('<img />').addClass('topic_img').attr('src',imgSrc).appendTo(div1_2);
		}else{
			var div1 = $('<div>').addClass('topic_item').appendTo($('#topic_area'));
			 //加入话题图片区域
			 var div1_2 = $('<div>').addClass('topic_item_img').appendTo(div1);
			  var div1_2_1 = $('<canvas></canvas>').addClass('triangle').attr({'width':'230','height':'14'}).appendTo(div1_2);
			  var div1_2_2 = $('<img />').addClass('topic_img').attr('src',imgSrc).appendTo(div1_2);
			 //加入话题内容区域
			 var div1_1 = $('<div>').addClass('topic_item_content').appendTo(div1);
			 $(div1_1).attr({'colorType':colorType,'itemType':itemType});
			  //加入话题标签区域
			  var div1_1_1 = $('<div>').addClass('topic_tag').appendTo(div1_1);
			   var div1_1_1_1 = $('<span></span>').appendTo(div1_1_1);
			   $(div1_1_1_1).html('<img src="../img/browse/topic_tag.png"/>'+tagName);
			  //加入话题文字区域
			  var div1_1_2 = $('<div>').addClass('topic_item_text').appendTo(div1_1);
			   var div1_1_2_1 = $('<p></p>').addClass('topic_title').appendTo(div1_1_2);
			   $(div1_1_2_1).html(title);
			   var div1_1_2_2 = $('<span></span>').addClass('topic_time').appendTo(div1_1_2);
			   $(div1_1_2_2).html(time+"&nbsp;&nbsp;&nbsp;Alex"+editor);
			   var div1_1_2_3 = $('<div></div>').addClass('topic_item_num').appendTo(div1_1_2);
			    var div1_1_2_3_1 = $('<span></span>').addClass('topic_browse').appendTo(div1_1_2_3);
			    $(div1_1_2_3_1).html('<img src="../img/browse/topic_tag.png"/>'+browseNum);
			    var div1_1_2_3_2 = $('<span></span>').addClass('topic_vote').appendTo(div1_1_2_3);
			    $(div1_1_2_3_2).html('<img src="../img/browse/topic_vote.png"/>'+support+'/'+oppose);
			 
			 
		}
		
	}
	var sql=[{'colorType':'o','tagName':'标签1','title':'1你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签2','title':'2你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签3','title':'3你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签4','title':'你愿意承受雾霾等代价在南方集中供暖吗？','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签5','title':'5你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签6','title':'6你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签7','title':'7你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签8','title':'8你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签9','title':'9你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签10','title':'10你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签11','title':'11你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签12','title':'12你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签13','title':'13你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签14','title':'14你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签15','title':'15你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签16','title':'16你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签17','title':'17你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签1','title':'1你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签2','title':'2你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签3','title':'3你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签4','title':'你愿意承受雾霾等代价在南方集中供暖吗？','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签5','title':'5你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签6','title':'6你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签7','title':'7你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签8','title':'8你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签9','title':'9你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签10','title':'10你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签11','title':'11你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签12','title':'12你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签13','title':'13你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签14','title':'14你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签15','title':'15你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签16','title':'16你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签17','title':'17你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签11','title':'11你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签12','title':'12你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签13','title':'13你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签14','title':'14你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签15','title':'15你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签16','title':'16你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签17','title':'17你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
	]
	//鼠标滚动自动加载item
	var i=0;
	var topicLength = $(".topic_item").length;
	$(window).scroll(function () {
		var scrollBottom = $(document).height() - $(window).height()-30;
		itemType = "1";
		if ($(window).scrollTop() >= scrollBottom && topicLength<20) {
			for (var j=0;j<4;j++) {
				if (i<sql.length) {
					addTopicItem(sql[i].tagName,
								 sql[i].title,
								 sql[i].time,
								 sql[i].editor,
								 sql[i].browseNum,
								 sql[i].support,
								 sql[i].oppose,
								 sql[i].imgSrc,
								 sql[i].colorType,
								 itemType);
					setColor();
					ctx = $(".triangle")[i].getContext("2d");
					i++;
					topicLength++;
				}
				if (itemType == "1") {
					itemType = "2";
				} else{
					itemType = "1";
				}
			}
			$(".topic_item").animate({opacity:'1'},1000);
		}
		//加载更多按钮和footer区域
		if ($(window).scrollTop() >= scrollBottom+30) {
			$(".loadMore").css("visibility","visible");
			$(".footer").css("visibility","visible");
		}
		//数据加载完成
		if (i>=sql.length) {
		$(".loadMore").html("没有更多了");
		$(".footer").css("visibility","visible");
		}
		//回到顶部按钮出现与隐藏
		if ($(window).scrollTop() >= $(window).height()*0.4) {
			$(".upToTop").css("visibility","visible");
		}else if ($(window).scrollTop() < $(window).height()*0.4) {
			$(".upToTop").css("visibility","hidden");
		}
	});
	
	//加载更多
	$(".loadMore").click(function  () {
		for (var j=0;j<4;j++) {
				if (i<sql.length) {
					addTopicItem(sql[i].tagName,
								 sql[i].title,
								 sql[i].time,
								 sql[i].editor,
								 sql[i].browseNum,
								 sql[i].support,
								 sql[i].oppose,
								 sql[i].imgSrc,
								 sql[i].colorType,
								 itemType);
					setColor();
					ctx = $(".triangle")[i].getContext("2d");
					topicLength++;
					i++;
				}
				if (itemType == "1") {
					itemType = "2";
				} else{
					itemType = "1"
				}
			}
			$(".topic_item").animate({opacity:'1'},1000);
			topicLength= topicLength-20;
			$(".loadMore").css("visibility","hidden");
			$(".footer").css("visibility","hidden");
	});
});