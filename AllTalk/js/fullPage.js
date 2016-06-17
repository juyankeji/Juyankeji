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
      			bgLoad(index);
      			if (index != 1) {
      				itemCircle(index-1);
      				typePosition(index-1);
      				itemPosition(index-1);
      			}
      			
//    				setTimeout(typePosition(index-1),3000);
      		},
//    		onLeave:function (index,nextIndex,direction){
//    			test1(nextIndex);
////    			alert(index+" "+nextIndex);
//    			bgLoad(index);
//    			if (direction == 'down') {
//    				
//    				itemCircle(index);
//    				itemPosition(index);
//    				typePosition(index);
////    				$(".items_1").removeClass();
//    			}
//    		}
      		
        });
    });
    }

    
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
    $(".items_1,.items_2,.items_3,.items_4,.items_5,.items_6").hover(
    	
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