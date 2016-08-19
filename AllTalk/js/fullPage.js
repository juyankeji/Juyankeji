$(document).ready(function() {
//	alert($(".sectionType_span").width());
//  alert($("#content").css('display'));
    if ($("#content").css('display') !='none') {
    	
    	$(function() {
        $("#content").fullpage({
	      	loopTop : false,
	      	loopBottom: true,
//	      	navigation : true,
	      	slidesNavPosition: 'bottom',
	      	slidesNavigation: 'true',
	      	navigationColor:'#ffffff',
//	      	scrollOverflow: false,
//    		sectionsColor : ['red', 'red', 'red', 'red'],
      		anchors: ['1', '2', '3', '4'],
      		afterLoad:function (index) {
//    			bgLoad(index);
      			if (index != 1) {
      				itemCircle(index-1);
      				typePosition(index-1);
      				itemPosition(index-1);
      			}
      		},
      		onLeave:function (index){
      			if (index != 1) {
      				typePosition(index-1);
      				$(".section_intro_area li").addClass("item_intro_disply");
      				$(".section_intro_area").addClass("item_intro_disply");
      			}
      		}
      		
        });
    });
    }

	//背景预加载
//	function bgLoad (index) {
//		var section_num = getSection(index+1,1);
//		section_num_lasChar = section_num.charAt(section_num.length-1);
//		var bgType1;
//		switch (section_num_lasChar)
//  	{
//  		case '2':
//  			bgType1 = "society/shms";
//  			break;
//  		case '3':
//  			bgType1 = "lifestyle/shxx";
//  			break;
//  		case '4':
//  			bgType1 = "game/ylyx";
//  			break;
//  		default:
//  			break;
//  	}
//  	var urladd = "url(img/homepage/" + bgType1 + "1.jpg)";
//  	$(section_num).css('background',urladd);
//  	$(section_num).css('background-size','100%');
//	}

    //获取当前元素ID并截取字符串最后一位并设置背景
    function getLastChar (section,bgImg) {
    	bgImg = bgImg.attr('id');//获取选择的条目
    	var lastChar = bgImg.charAt(bgImg.length-1);
    	var bgType1 = ".background_img_" + lastChar;
		for (var i=0;i<section.find(".backgroundSet li").length;i++) {
			section.find(".backgroundSet li").eq(i).css("z-index","-30");
			if (section.find(".backgroundSet li").eq(i).attr("class").indexOf("background_img_display")<0) {
				var lastImg = section.find(".backgroundSet li").eq(i);
				section.find(".backgroundSet li").eq(i).css("z-index","-20");
			}
		}
		section.find(bgType1).removeClass("background_img_display");
		section.find(bgType1).css("z-index","-10");
		section.find(bgType1).animate({"opacity":1},300,function() {
			if (section.find(bgType1).attr("class") != lastImg.attr("class")) {
				lastImg.css("opacity",0);
				lastImg.addClass("background_img_display");
			}
		});
    }
    
    //更换导读内容
    function changeIntroContent (section,bgImg) {
    	bgImg = bgImg.attr('id');//获取选择的条目
    	var lastChar = bgImg.charAt(bgImg.length-1);
    	var itemIntro = ".item_intro_" + lastChar;
    	$(".section_intro_area li").animate({"opacity":0},50).addClass("item_intro_disply");
    	$(itemIntro).removeClass("item_intro_disply").animate({"opacity":1},500);
    }
    
    //改变背景的触发事件
    $(".items_1,.items_2,.items_3,.items_4,.items_5,.items_6").click(
    	function (section1,bgImg1) {
    		bgImg1 = $(this);
    		section1 = $(this).parent().parent();
    		getLastChar(section1,bgImg1);
    		section1.find(".sectionType_span").animate({"top":0,"opacity":0},500,function () {
    			section1.find(".sectionType_span").css("visibility","hidden");
    			section1.find(".section_intro_area").removeClass("item_intro_disply");
    			changeIntroContent (section1,bgImg1);
    		});
    		
    });
    
});