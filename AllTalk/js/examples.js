//ajax载入页面
function ajaxLoad (bindElement,action,triggerElement,loadElement,pageRoute,cssRoute,jsRoute) {
	$(bindElement).on(action,triggerElement,function () {
//		$("body").attr("class","");
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
