$(document).ready(function () {
	//热搜词添加
	var inputValue;
	$(".input").on("keyup","#search_input",function () {
		inputValue = $("#search_input").val();
	}).on("mouseover",".input__label-content",function () {
		var hotWord = $(this).html();
		$("#search_input").val(hotWord);
	}).on("mouseout",".input__label-content",function () {
//		var hotWord = $(this).html();
		$("#search_input").val(inputValue);
	});
	
	//搜索结果展示
	var sql=[{'colorType':'o','tagName':'标签1','title':'1你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'文化','title':'2你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签3','title':'3你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签4','title':'你愿意承受雾霾等代价在南方集中供暖吗？','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'文化','title':'5你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签6','title':'6你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签10','title':'10你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签11','title':'11你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签12','title':'12你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签13','title':'13你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签14','title':'14你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签15','title':'15你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签16','title':'16你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签17','title':'17你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签11','title':'11你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签12','title':'12你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签13','title':'13你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签14','title':'14你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签15','title':'15你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签16','title':'16你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签17','title':'17你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../../img/homepage/society/shms2.jpg'},
	]
	var itemType;
	var ctx;
	
	//设置标签颜色的函数
	
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
//	$(setColor());
	
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
		$(this).find(".topic_tag img").attr("src","../../img/browse/topic_tag2.png");
		$(this).find(".topic_browse img").attr("src","../../img/browse/topic_browse2.png");
		$(this).find(".topic_vote img").attr("src","../../img/browse/topic_vote2.png");
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
		$(this).find(".triangle1").attr("src","../../img/browse/triangle.png");
		$(this).find(".topic_tag img").attr("src","../../img/browse/topic_tag.png");
		$(this).find(".topic_browse img").attr("src","../../img/browse/topic_browse.png");
		$(this).find(".topic_vote img").attr("src","../../img/browse/topic_vote.png");
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
	
//	var i=0;
//	$("#search_button").click(function () {
//		itemType = "1";
//		for (i;i<sql.length;i++) {
//				addTopicItem("#search_content_items",
//							 sql[i].tagName,
//							 sql[i].title,
//							 sql[i].time,
//							 sql[i].editor,
//							 sql[i].browseNum,
//							 sql[i].support,
//							 sql[i].oppose,
//							 sql[i].imgSrc,
//							 sql[i].colorType,
//							 itemType);
//				setColor();
////				ctx = $(".triangle")[i].getContext("2d");
//				if (itemType == "1") {
//					itemType = "2";
//				} else{
//					itemType = "1";
//				}
//				
//				if (i%4 == 0) {
//					$("#search_content_items").css("height","+=406");
//				}
//				
//			$(".topic_item").animate({opacity:'1'},1000);
//			}
//			
//	});
	
});
