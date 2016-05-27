$(document).ready(function() {
//	alert($(".sectionType_span").width());
    $(function() {
        $("#content").fullpage({
	      	loopTop : false,
	      	loopBottom: true,
	      	navigation : true,
	      	slidesNavPosition: 'bottom',
//    		sectionsColor : ['red', 'red', 'red', 'red'],
      		anchors: ['1', '2', '3', '4'],
//    		afterLoad:function (index) {clearItemPosition();},
      		onLeave:function (index,nextIndex,direction){
      			bgLoad(index);
      			if (direction == 'down') {
      				
      				itemCircle(index);
      				itemPosition(index);
      				typePosition(index);
//    				$(".items_1").removeClass();
      			}
      		}
      		
        });
    });
    
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
    	var spanHeight = $(".sectionType_span").height();
    	$(".sectionType").removeClass();
    	$(".sectionType").css('width',width/1.4);
    	$(".sectionType").css('height',height/1.4);
    	$(".sectionType").css('margin-left',(width-width/1.4)/2);
    	$(".sectionType").css('margin-top',(width-width/1.4)/2);
    	$(".sectionType_span").css('top',height/2.8-spanHeight/2);
    }
    
    //自适应窗口大小
    function itemCircle (index) {
    	var section_num = getSection(index,2);
    	var section_1 = $(section_num);
    	var height = section_1.width();
    	section_1.removeClass();
    	section_1.css('height',height);
    	section_1.css('margin-left',-height/2);
    	section_1.css('margin-top',-height/2);
    	var section_img = section_1.find('img');
    	section_img.css('width',height);
    	section_img.css('height',height);
    	var section_img_in = section_1.find('.section_img_in');
    }
    
    //清除items的定位
//  function clearItemPosition () {
//  	var itemNum = ".items_";
//  	for(var i=1;i<7;i++){
//  		var itemNum1 = itemNum + i;
//  		alert(itemNum1);
//  		$(itemNum).css('left','');
//  		$(itemNum).css('top','');
//  	}
//  }

   //话题标签定位 
   function itemPosition (index) {
    	var section = $(".section");
    	var section_num = getSection(index,2);
    	var section_1 = $(section_num);
    	var r = section_1.width()/2;
    	var left = section.width()/2;
    	var top = section.height()/2;
		
		var items1Left = section.width()/2 - r/1.4;
		var items1Top = section.height()/2 - r/1.4;
		var items1Length = $(".items_1").width();
		var items1Height = $(".items_1").height();
		$(".items_1").css('left',items1Left-items1Length-30);
		$(".items_1").css('top',items1Top-30);
		var items2Left = section.width()/2 - r;
		var items2Top = section.height()/2;
		var items2Length = $(".items_2").width();
		var items2Height = $(".items_2").height();
		$(".items_2").css('left',items2Left-items2Length-30);
		$(".items_2").css('top',items2Top-items2Height/2);
		var items3Left = section.width()/2 - r/1.4;
		var items3Top = section.height()/2 + r/1.4;
		var items3Length = $(".items_3").width();
		var items3Height = $(".items_3").height();
		$(".items_3").css('left',items3Left-items3Length-30);
		$(".items_3").css('top',items3Top+30);
		var items4Left = section.width()/2 + r/1.4;
		var items4Top = section.height()/2 - r/1.4;
		$(".items_4").css('left',items4Left+30);
		$(".items_4").css('top',items4Top-30);
		var items5Left = section.width()/2 + r;
		var items5Top = section.height()/2;
		var items5Height = $(".items_5").height();
		$(".items_5").css('left',items5Left+30);
		$(".items_5").css('top',items5Top-items5Height/2);
		var items6Left = section.width()/2 + r/1.4;
		var items6Top = section.height()/2 + r/1.4;
		$(".items_6").css('left',items6Left+30);
		$(".items_6").css('top',items6Top+30);
//		alert(items1Length);
    }
   
// $(window).resize(
//  function () {
//		itemCircle();
//		itemPosition();
//  });

    
    /*
**************图片预加载插件******************
///参数设置：
scaling     是否等比例自动缩放
width       图片最大高
height      图片最大宽
loadpic     加载中的图片路径
*/
jQuery.fn.LoadImage=function(scaling,width,height,loadpic){
    if(loadpic==null)loadpic="load3.gif";
	return this.each(function(){
		var t=$(this);
		var src=$(this).attr("src")
		var img=new Image();
		//alert("Loading...")
		img.src=src;
		//自动缩放图片
		var autoScaling=function(){
			if(scaling){
			
				if(img.width>0 && img.height>0){ 
			        if(img.width/img.height>=width/height){ 
			            if(img.width>width){ 
			                t.width(width); 
			                t.height((img.height*width)/img.width); 
			            }else{ 
			                t.width(img.width); 
			                t.height(img.height); 
			            } 
			        } 
			        else{ 
			            if(img.height>height){ 
			                t.height(height); 
			                t.width((img.width*height)/img.height); 
			            }else{ 
			                t.width(img.width); 
			                t.height(img.height); 
			            } 
			        } 
			    } 
			}	
		}
		//处理ff下会自动读取缓存图片
		if(img.complete){
		    //alert("getToCache!");
			autoScaling();
		    return;
		}
		$(this).attr("src","");
		var loading=$("<img alt=\"加载中...\" title=\"图片加载中...\" src=\""+loadpic+"\" />");
		
		t.hide();
		t.after(loading);
		$(img).load(function(){
			autoScaling();
			loading.remove();
			t.attr("src",this.src);
			t.show();
			//alert("finally!")
		});
		
	});
}
    
//**************图片预加载插件******************

	//背景预加载
	function bgLoad (index) {
		var section_num = getSection(index+1,1);
		section_num_lasChar = section_num.charAt(section_num.length-1);
		var bgType1;
		switch (section_num_lasChar)
    	{
    		case '2':
    			bgType1 = "society/shms";
    			break;
    		case '3':
    			bgType1 = "lifestyle/shxx";
    			break;
    		case '4':
    			bgType1 = "game/ylyx";
    			break;
    		default:
    			break;
    	}
    	var urladd = "url(img/homepage/" + bgType1 + "1.jpg)";
//  		$(section).addClass(bgImage);
    	$(section_num).css('background',urladd);
    	$(section_num).css('background-size','100%');
//		alert(section_num);
	}

    //获取当前元素ID并截取字符串最后一位
    function getLastChar (section,bgImg) {
    	bgImg = bgImg.attr('id');
    	section = "." + section.attr('id');
    	var bgType = section.charAt(section.length-1);
    	
    	var lastChar = bgImg.charAt(bgImg.length-1);
    	var bgType1;
    	switch (bgType)
    	{
    		case '2':
    			bgType1 = "society/shms";
    			break;
    		case '3':
    			bgType1 = "lifestyle/shxx";
    			break;
    		case '4':
    			bgType1 = "game/ylyx";
    			break;
    		default:
    			break;
    	}
    	var urladd = "url(img/homepage/" + bgType1 + lastChar + ".jpg)";
//  		$(section).addClass(bgImage);
    	$(section).css('background',urladd);
    	$(section).css('background-size','100%');
//  	alert(lastChar);
    }
    
    //改变背景
    $("#items_1,#items_2,#items_3,#items_4,#items_5,#items_6").hover(
    	
    	function (section1,bgImg1) {
    		bgImg1 = $(this);
    		section1 = $(this).parent().parent();
    		getLastChar(section1,bgImg1);
    	},
		function () {
//			$(".section2").removeClass(bgImage);
		}
    );
    
    
    
    
    
});