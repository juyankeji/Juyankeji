$(document).ready(function () {
	var isClick = false;
	//二级菜单
	$(".itemsBtn").on("mouseover",".type_item",function  () {
		var thisSrc = $(this).find("img").attr("name");
		thisSrc = "../img/browse/" + thisSrc + "2.png";
		$(this).find(".type_item_img3,.type_item_img1").attr("src",thisSrc);
		$(this).css("color","#F05656");
	}).on("mouseout",".type_item",function  () {
		if ($(this).attr("state") == "0") {
			var thisSrc = $(this).find("img").attr("name");
			thisSrc = "../img/browse/" + thisSrc + ".png";
			$(this).find(".type_item_img3,.type_item_img1").attr("src",thisSrc);
			$(this).css("color","#666666");
		}
	});
	
	//三级菜单-动画
	$(document).on("click",".type_item",function  () {
		var thisName = $(this).find("img").attr("name");
		$(".itemsBtn li").css("color","#666666");
		var allName;
		for (var i = 0;i<$(".type_item").length;i++) {
			allName = $(".type_item").eq(i).find("img").attr("name");
			allName = "../img/browse/" + allName + ".png";
			$(".type_item").find(".type_item_img3,.type_item_img1").eq(i).attr("src",allName);
			$(".type_item").eq(i).attr("state","0");
		}
		allName = "../img/browse/" + thisName + "2.png";
		$(this).find(".type_item_img3,.type_item_img1").attr("src",allName);
		$(this).css("color","#F05656");
		$(this).attr("state","1");
		switch (thisName){
			case "type_select_all":
				$(".header_third").stop().animate({
					opacity:0,
					width:'0',
				},800);
				$(".header_third_content1,.header_third_content2,.header_third_content3").css("visibility","hidden");
				break;
			case "shsh":
				$(".header_third").stop().animate({
					opacity:1,
					width:'100%'
				},1000);
				$(".header_third_content1").css("visibility","visible");
				$(".header_third_content2,.header_third_content3").stop().animate({left:'-14.5px',opacity:0},500);
				$(".header_third_content1").animate({left:'-14.5px',opacity:1},500);
				$(".header_third_content2,.header_third_content3").css("visibility","hidden");
				break;
			case "shxx":
				$(".header_third").stop().animate({
					opacity:1,
					width:'100%'
				},1000);
				$(".header_third_content2").css("visibility","visible");
				$(".header_third_content1,.header_third_content3").stop().animate({left:'145.5px',opacity:0},500);
				$(".header_third_content2").animate({opacity:1,left:'145.5px'},500);
				$(".header_third_content1,.header_third_content3").css("visibility","hidden");
				break;
			case "ylyd":
				$(".header_third").stop().animate({
					opacity:1,
					width:'100%'
				},1000);
				$(".header_third_content3").css("visibility","visible");
				$(".header_third_content1,.header_third_content2").stop().animate({left:'306.5px',opacity:0},500);
				$(".header_third_content3").animate({opacity:1,left:'306.5px'},500);
				$(".header_third_content1,.header_third_content2").css("visibility","hidden");
				break;
			default:
				break;
		}
	});
	//三级菜单功能
	$(".header_third_index li").click(function () {
		$(".header_third_index li").css("color","#999999");
		$(this).css("color","#F05656");
		var q = $(this).html();
		var tagName = $(".topic_tag span").html().substring($(".topic_tag span").html().length-2,$(".topic_tag span").html().length);
		console.log(tagName);
	});
	
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
	
	var sql=[{'colorType':'o','tagName':'标签1','title':'1你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'文化','title':'2你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'标签3','title':'3你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签4','title':'你愿意承受雾霾等代价在南方集中供暖吗？','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'文化','title':'5你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签6','title':'6你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'标签7','title':'7你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'文化','title':'8你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签9','title':'9你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'b','tagName':'文化','title':'10你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'o','tagName':'标签11','title':'11你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
			 {'colorType':'g','tagName':'文化','title':'12你愿意','time':'2016.06.22','editor':'Alex','browseNum':'3154','support':'3154','oppose':'3154','imgSrc':'../img/homepage/society/shms2.jpg'},
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
			$("#topic_area").css("height","+=406")
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
		$(".loadMore").click(function () {
			return false;
		});
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