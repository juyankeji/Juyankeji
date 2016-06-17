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
//  	var section_x = "#section_"+index;
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
    	$(spanName).animate({top:height/2.8-spanHeight/2},2000);
    }
    
    //自适应窗口大小
    function itemCircle (index) {
    	var section_num = getSection(index,2);
    	var section_1 = $(section_num);
    	var height = section_1.width();
//  	var a = ["height","margin-left","margin-top"];
//  	var b = [height,-height/2,-height/2];
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
    	section_1.fadeIn(2000);
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
		$(itemsX[0]).animate({left:items1Left-items1Length-30,opacity:'1'},1500);
		$(itemsX[0]).css('top',items1Top-30);
		var items2Left = section.width()/2 - r;
		var items2Top = section.height()/2;
		var items2Length = $(itemsX[1]).width();
		var items2Height = $(itemsX[1]).height();
		$(itemsX[1]).animate({left:items2Left-items2Length-30,opacity:'1'},1500);
		$(itemsX[1]).css('top',items2Top-items2Height/2);
		var items3Left = section.width()/2 - r/1.4;
		var items3Top = section.height()/2 + r/1.4;
		var items3Length = $(itemsX[2]).width();
		var items3Height = $(itemsX[2]).height();
		$(itemsX[2]).animate({left:items3Left-items3Length-30,opacity:'1'},1500);
		$(itemsX[2]).css('top',items3Top+30);
		var items4Left = section.width()/2 - r/1.4 ;
		var items4Top = section.height()/2 - r/1.4;
		var items4Length = $(itemsX[3]).width();
		$(itemsX[3]).animate({right:items4Left-items4Length-30,opacity:'1'},1500);
		$(itemsX[3]).css('top',items4Top-30);
		var items5Left = section.width()/2 - r;
		var items5Top = section.height()/2;
		var items5Length = $(itemsX[4]).width();
		var items5Height = $(itemsX[4]).height();
		$(itemsX[4]).animate({right:items5Left-items5Length-30,opacity:'1'},1500);
		$(itemsX[4]).css('top',items5Top-items5Height/2);
		var items6Left = section.width()/2 - r/1.4;
		var items6Top = section.height()/2 + r/1.4;
		var items6Length = $(itemsX[5]).width();
		var items6Height = $(itemsX[5]).height();
		$(itemsX[5]).animate({right:items6Left-items6Length-30,opacity:'1'},1500);
		$(itemsX[5]).css('top',items6Top+30);
//		alert(items1Length);
    }
   
