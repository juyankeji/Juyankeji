


/**/
//ajax载入页面
function ajaxLoad (bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute) {
	$(bindElement).on(action,triggerElement,function () {
		$("body,html").attr("class","");
		$("body,html").attr("style","");
		$(loadElement).load(pageRoute,function () {
			$("<link>")
    			.attr({ rel: "stylesheet",
        				type: "text/css",
        				href: cssRoute
    			})
   				.appendTo("head");
   		jQuery.getScript(jsRoute)
 		.done(function() {
//			alert("success!");
 		})
		.fail(function() {
 			alert("load personal.js fail!");
		});
   		
// 			$("#loginBox").css('visibility','hidden');
		});
	});

}

//用js设置样式，css()方法
//function setCss (element,att,value) {
////	var len = arguments.length;
//	var q = "height";
//	var w = 500;
//	element.css({
//		"height":w,
////		"height":500,
//	});
//	alert(element.height());
//	var str = "";
//	for (var i=0;i<att.length;i++) {
//		str+='"' + att[i] + '"' + ':' +value[i]+',\n';	
//	}
//	element.css({ str });
//	console.log(str);
//}
//获取fullPage的ID
    function getSection (index,type) {
    	var section_x;
    	switch (type){
    		case 1:
    			section_x = "#section"+index;
    			break;
    		case 2:
    			section_x = "#section_"+index;
    			break;
    		default:
    			break;
    	}
		return section_x;
    }
    
    //类型位置(社会民生、生活休闲、娱乐游戏)
    function typePosition (index) {
    	var section_num = getSection(index,2);
    	var section_x = $(section_num);
    	var width = section_x.width();
    	var height = width;
    	var spanName = "#sectionType_span" + index;
    	var spanHeight = $(".sectionType_span").height();
    	$(".sectionType").css({
    		"width" : width/1.4,
    		"height" : height/1.4,
    		"margin-left" : (width-width/1.4)/2,
    		"margin-top" : (width-width/1.4)/2,
    	});
//  	console.log(section_num+","+width +","+height+","+spanHeight);
    	var spanName = "#sectionType_span" + index;
//  	$(".sectionType_span").css('top',height/2.8-spanHeight/2);
    	$(spanName).css("top",height/2.8-spanHeight/2);
    	$(spanName).css({'visibility':'visible','opacity':1});
    }
    
    //自适应窗口大小
    function itemCircle (index) {
    	var section_num = getSection(index,2);
    	var section_1 = $(section_num);
    	var height = section_1.width();
    	section_1.removeClass();
    	section_1.css({
    		"height" : height,
    		"margin-left" : -height/2,
    		"margin-top" : -height/2,
    	});
    	var section_img = section_1.find('img');
    	section_img.css({
    		'width' : height,
    		'height': height,
    	});
    	var section_img_in = section_1.find('.section_img_in');
    	section_1.fadeIn(500);
    }

   //话题标签定位 
  	function itemPosition (index) {
    	var section = $(".section");
    	var section_num = getSection(index,2);
    	var section_1 = $(section_num);
    	var r = section_1.width()/2;
    	var left = section.width()/2;
    	var top = section.height()/2;
    	var itemsX = new Array(6);
    	for (var i=0;i<itemsX.length;i++) {
    		itemsX[i] = "#items" + index + "_" + (i+1);
    	}
		var items1Left = section.width()/2 - r/1.4;
		var items1Top = section.height()/2 - r/1.4;
		var items1Length = $(itemsX[0]).width();
		var items1Height = $(itemsX[0]).height();
		$(itemsX[0]).css('top',items1Top-30);
		$(itemsX[0]).animate({left:items1Left-items1Length-30,opacity:'1'},300,function () {
			var items2Left = section.width()/2 - r;
			var items2Top = section.height()/2;
			var items2Length = $(itemsX[1]).width();
			var items2Height = $(itemsX[1]).height();
			$(itemsX[1]).css('top',items2Top-items2Height/2);
			$(itemsX[1]).animate({left:items2Left-items2Length-30,opacity:'1'},300,function () {
				var items3Left = section.width()/2 - r/1.4;
				var items3Top = section.height()/2 + r/1.4;
				var items3Length = $(itemsX[2]).width();
				var items3Height = $(itemsX[2]).height();
				$(itemsX[2]).css('top',items3Top+30);
				$(itemsX[2]).animate({left:items3Left-items3Length-30,opacity:'1'},300,function () {
					var items4Left = section.width()/2 - r/1.4 ;
					var items4Top = section.height()/2 - r/1.4;
					var items4Length = $(itemsX[3]).width();
					$(itemsX[3]).css('top',items4Top-30);
					$(itemsX[3]).animate({right:items4Left-items4Length-30,opacity:'1'},300,function () {
						var items5Left = section.width()/2 - r;
						var items5Top = section.height()/2;
						var items5Length = $(itemsX[4]).width();
						var items5Height = $(itemsX[4]).height();
						$(itemsX[4]).css('top',items5Top-items5Height/2);
						$(itemsX[4]).animate({right:items5Left-items5Length-30,opacity:'1'},300,function () {
							var items6Left = section.width()/2 - r/1.4;
							var items6Top = section.height()/2 + r/1.4;
							var items6Length = $(itemsX[5]).width();
							var items6Height = $(itemsX[5]).height();
							$(itemsX[5]).css('top',items6Top+30);
							$(itemsX[5]).animate({right:items6Left-items6Length-30,opacity:'1'},300);
						});
						
					});
					
				});
				
			});
			
		});
		
    }
   
	//构建item内的元素
	function addTopicItem (itemAreaID,ID,tagName,title,time,editor,browseNum,support,oppose,imgSrc,colorType,itemCategory,itemType) {		
		if (itemType == "1") {
			var div1 = $('<div>').addClass('topic_item topic_item_display').appendTo($(itemAreaID));
			if (itemCategory == "Y") {
				var tagA = $('<a></a>').attr('href','/?r=post/vote&id='+ID).appendTo(div1);
			} else{
				var tagA = $('<a></a>').attr('href','/?r=post/view&id='+ID).appendTo(div1);
			}
			
			 //加入话题内容区域
			 var div1_1 = $('<div>').addClass('topic_item_content').appendTo(tagA);
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
			    if (itemCategory=="Y") {
					$(div1_1_2_3_2).html('<img src="../img/browse/topic_vote.png"/>' + support + '/'+oppose);
				} else{
					$(div1_1_2_3_2).html('<img src="../img/browse/topic_vote.png"/>' + support);
				}
			 //加入话题图片区域
			 var div1_2 = $('<div>').addClass('topic_item_img').appendTo(tagA);
			  var div1_2_1 = $('<div></div>').addClass('triangle').appendTo(div1_2);
			  var div1_2_2 = $('<img />').addClass('topic_img lazy').attr({'alt':title,'width':'230','height':'201','data-original':imgSrc}).appendTo(div1_2);
			  
		}else{
			var div1 = $('<div>').addClass('topic_item topic_item_display').appendTo($(itemAreaID));
			if (itemCategory == "Y") {
				var tagA = $('<a></a>').attr('href','/?r=post/vote&id='+ID).appendTo(div1);
			} else{
				var tagA = $('<a></a>').attr('href','/?r=post/view&id='+ID).appendTo(div1);
			}
			 //加入话题图片区域
			 var div1_2 = $('<div>').addClass('topic_item_img').appendTo(tagA);
			  var div1_2_1 = $('<div></div>').addClass('triangle').appendTo(div1_2);
			  var div1_2_2 = $('<img />').addClass('topic_img lazy').attr({'alt':title,'width':'230','height':'201','data-original':imgSrc}).appendTo(div1_2);
			 //加入话题内容区域
			 var div1_1 = $('<div>').addClass('topic_item_content').appendTo(tagA);
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
			    if (itemCategory=="Y") {
					$(div1_1_2_3_2).html('<img src="../img/browse/topic_vote.png"/>' + support + '/'+oppose);
				} else{
					$(div1_1_2_3_2).html('<img src="../img/browse/topic_vote.png"/>' + support);
				}
		}
	}
	
	//构建正反方评论树的评论
	function addComment (i,commentType,userPicURL,userName,userPageURL,commentTime,likeNum,commentContent,commentNum) {
		$('<!--评论块——cd-timeline-block'+(i+1)+'-->').appendTo($("#cd-timeline"));
		if (commentType=="Y") {
			var div1 = $('<div>').addClass('cd-timeline-block').appendTo($(".cd-timeline-support"));
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-picture').appendTo(div1);
			  div1_1.html('P');
		}
		else if (commentType=="N") {
			var div1 = $('<div>').addClass('cd-timeline-block even-cd-timeline-block').appendTo($(".cd-timeline-oppose"));
			 var div1_1 = $('<div>').addClass('cd-timeline-img cd-movie').appendTo(div1);
			  div1_1.html('N');
		}
		 var div1_2 = $('<div>').addClass('cd-timeline-content').appendTo(div1);
		  var div1_2_1 = $('<div></div>').addClass("comment_header").appendTo(div1_2);
		   var div1_2_1_1 = $('<div></div>').addClass("pikachusPic").appendTo(div1_2_1);
		    var div1_2_1_1_1 = $('<a></a>').appendTo(div1_2_1_1);
		    div1_2_1_1_1.attr("href",userPageURL);
		    div1_2_1_1_1.html('<img src="'+userPicURL+'" />');
		   var div1_2_1_2 = $('<div></div>').addClass("pikachusName").appendTo(div1_2_1);
		    var div1_2_1_2_1 = $('<div></div>').addClass("pikachu_name").appendTo(div1_2_1_2);
		     var div1_2_1_2_1_1 = $('<a></a>').appendTo(div1_2_1_2_1);
		     div1_2_1_2_1_1.attr("href",userPageURL);
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
		  
		if (commentType=="Y") {
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
		 var div1_3 = $('<div></div>').addClass('comment_reply bounce-down').appendTo(div1);
		 div1_3.attr("id","comment_reply");
		  var div1_3_1 = $('<div></div>').addClass("comment_reply_input").appendTo(div1_3);
		  var div1_3_1_1 = $('<div></div>').addClass("isay_text_area area_display").appendTo(div1_3_1);
		   var div1_3_1_1_1 = $('<textarea></textarea>').addClass("target1").appendTo(div1_3_1_1);
		   div1_3_1_1_1.attr({'id':'target1','placeholder':''})
		   var div1_3_1_1_2 = $('<div></div>').addClass("isay_text_operate").appendTo(div1_3_1_1);
		    var div1_3_1_1_2_1 = $('<div></div>').addClass("isay_text_operate_emotion").appendTo(div1_3_1_1_2);
		    var div1_3_1_1_2_2 = $('<div></div>').addClass("isay_text_operate_picture").appendTo(div1_3_1_1_2);
		    var div1_3_1_1_2_3 = $('<div></div>').addClass("text_support").appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_3.html('<input type="checkbox" name="" id="checkbox_support" class="checkbox" value="support" /><label></label>&nbsp;正方');
		    var div1_3_1_1_2_4 = $('<div></div>').addClass("text_oppose").appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_4.html('<input type="checkbox" name="" id="checkbox_oppose" class="checkbox" value="oppose" /><label></label>&nbsp;反方');
		    var div1_3_1_1_2_5 = $('<input />').addClass("comment_btn").appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_5.attr({'type':'button','id':'comment_btn','value':'评论'});
		    var div1_3_1_1_2_6 = $('<input />').addClass("comment_btn2").appendTo(div1_3_1_1_2);
		    div1_3_1_1_2_6.attr({'type':'button','value':'取消'});
		    var div1_3_2 = $('<div></div>').addClass("fallback").appendTo(div1_3);
		    div1_3_2.html("收起");
	}
	
//图片替换函数
function changeImg (elementLoc,imgSrc) {
	$(this).find(elementLoc).attr(imgSrc);
}

function getTopic () {  
         $.ajax({  
             url: '',  
             type: 'post',  
             dataType: 'json',  
             timeout: 1000,  
             cache: false,  
             beforeSend: LoadFunction, //加载执行方法    
             error: erryFunction,  //错误执行方法    
             success: succFunction //成功执行方法    
         })  
         function LoadFunction() {  
//           $("#list").html('加载中...');  
         }  
         function erryFunction() {  
             alert("error");  
         }  
         function succFunction(sql) {    
             sql = eval(sql); //数组
         }  
     }

