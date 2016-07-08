$(document).ready(function () {
	var supportlabel = $(".label_support_label").find("li");
	var opposelabel = $(".label_oppose_label").find("li");
	for (var i = 0;i < supportlabel.length;i++) {
		var thisLi = $(".label_support_label li").eq(i);
		switch (thisLi.css("height")){
			case "28px":
				thisLi.addClass("s1");
				break;
			case "46px":
				thisLi.addClass("s2");
				break;
			case "64px":
				thisLi.addClass("s3");
				break;
			case "82px":
				thisLi.addClass("s4");
				break;
			case "100px":
				thisLi.addClass("s5");
				break;
			default:				
				break;
		}
	}
	for (var i = 0;i < opposelabel.length;i++) {
		var thisLi = $(".label_oppose_label li").eq(i);
		switch (thisLi.css("height")){
			case "28px":
				thisLi.addClass("o1");
				break;
			case "46px":
				thisLi.addClass("o2");
				break;
			case "64px":
				thisLi.addClass("o3");
				break;
			case "82px":
				thisLi.addClass("o4");
				break;
			case "100px":
				thisLi.addClass("o5");
				break;
			default:				
				break;
		}
	}
});