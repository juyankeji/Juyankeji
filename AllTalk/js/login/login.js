$(document).ready(function(){
//	loginEffect();
	logIn();
	
//导航条登录按钮事件
function logIn () {
	$("#loginBox").load("/AllTalk/view/login/loginBox.html",function () {
//		$("<link>").attr({rel: "stylesheet",type: "text/css",href: "http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css"}).appendTo("body");
		$("<link>").attr({rel: "stylesheet",type: "text/css",href: "/AllTalk/css/login/animate.min.css"}).appendTo("body");
		$("<link>").attr({rel: "stylesheet",type: "text/css",href: "/AllTalk/css/login/common.css"}).appendTo("body");
		$("<link>").attr({rel: "stylesheet",type: "text/css",href: "/AllTalk/css/login/loginArea.css"}).appendTo("body");
		$.getScript("/AllTalk/js/login/jquery.hDialog.min.js").done(function () {console.log("1load success!");}).fail(function() {console.log("load!");});
		$.getScript("/AllTalk/js/login/icheck.js").done(function () {console.log("2load success!");}).fail(function() {console.log("load icheck.js fail!");});
		$.getScript("/AllTalk/js/login/jquery.validate.js",function () {
			loginEffect();
		}).done(function () {console.log("3load success!");}).fail(function() {console.log("load jquery.validate.js fail!");});
	});
}

function loginEffect () {
	$(".login_text").hDialog({
			'box' : '#loginBox',
			width : 500,
			height : 420,
			boxBg : '#f2f2f2',
			modalHide: false,
			closeBg : "#f2f2f2",
			effect: "fadeOut",
	 	});
	 	
	 	$(".register_text").hDialog({
			'box' : '#loginBox',
			width : 500,
			height : 480,
			boxBg : '#f2f2f2',
			modalHide: false,
			closeBg : "#f2f2f2",
			effect: "fadeOut",
	 	});
	 	$("#HCloseBtn").click(function () {
	 		$(".register_form_area,.login_form_area").removeClass("form_area_disply");
	 	});
	
	 	$("#login_text").click(function () {
	 		$(".register_form_area,.login_form_area").removeClass("form_area_disply");
	 		$(".login_form_area").addClass("form_area_disply");
	 	});
	 	$("#register_text").click(function () {
	 		$(".login_form_area,.register_form_area").removeClass("form_area_disply");
	 		$(".register_form_area").addClass("form_area_disply");
	 	});
	
	//登录验证
	$("#login_form_area").validate({
		rules:{
			loginUsername:{
				required:true,
				email:true,
			},
			loginPassword:{
				required:true,
			}
		},
		messages:{
			loginUsername:{
				required:"请输入邮箱！",
				email:"请确认邮箱格式！",
			},
			loginPassword:{
				required:"账号或密码错误！",
			}
		},
		errorPlacement:function (error,element) {
			if(element.is("#loginUsername"))
				error.appendTo("#p1_1");
			if(element.is("#loginPassword"))
				error.appendTo("#p1_2");
		}
	});
	
	//注册验证
	$("#register_form_area").validate({
		rules:{
			registerUsername:{
				required:true,
				email:true,
			},
			registerPassword:{
				required:true,
				minlength:6,
			},
			registerPassword2:{
				required:true,
				minlength:6,
				equalTo:"#registerPassword",
			},
			nickName:{
				required:true
			}
		},
		messages:{
			registerUsername:{
				required: '请输入用户名！',
				email: '请输入正确的邮箱！'
			},
			registerPassword:{
				required: "请输入密码！",
        minlength: "密码长度不能小于6位！"
			},
			registerPassword2:{
				required: "请输入密码!",
        minlength: "密码长度不能小于6位！",
        equalTo: "两次密码输入不一致"
			},
		},
		errorPlacement:function(error,element){
			if(element.is("#registerUsername"))
				error.appendTo("#p2_1");
			if(element.is("#registerPassword"))
				error.appendTo("#p2_2");
			if(element.is("#registerPassword2"))
				error.appendTo("#p2_3");
			else
				return 0;
			
		}
	});
	
	$("#register_button").click(function () {
		$("#loginBox").animate({height:'480px'});
		$("#line").animate({height:'140px'});
		$(".login_form_area").removeClass("form_area_disply");
		$(".register_form_area").addClass("form_area_disply");
		
	});
	
	$("#returnLogin").click(function () {
		$("#loginBox").animate({height:'420px'});
		$("#line").animate({height:'125px'});
		$(".login_form_area").addClass("form_area_disply");
		$(".register_form_area").removeClass("form_area_disply");
	});
	
	
    $('#loginBox').iCheck({
      checkboxClass: 'icheckbox_flat-red',
      radioClass: 'iradio_flat-red'
    });

	//登录输入框获得焦点效果
	$(".ipt").focus(function () {
		var iptType = $(this).attr("type");
		switch (iptType){
			case "text":
				$(this).siblings("img").attr("src","/AllTalk/img/login/user 02.png");
				$(this).attr("oninput","this.style.color='#666'");
				break;
			case "password":
				$(this).siblings("img").attr("src","/AllTalk/img/login/password 02.png");
				$(this).attr("oninput","this.style.color='#666'");
				break;
			default:
				break;
		}
	});
	//登录输入框失去焦点效果
	$(".ipt").blur(function () {
		var iptType = $(this).attr("type");
		switch (iptType){
			case "text":
				$(this).siblings("img").attr("src","/AllTalk/img/login/user 01.png");
				break;
			case "password":
				$(this).siblings("img").attr("src","/AllTalk/img/login/password 01.png");
				break;
			default:
				break;
		}
	});
	
	//图标鼠标移入效果
	$(".icon img").hover(function () {
		var iconName = $(this).attr("name");
		switch (iconName){
			case "qq":
				$(this).attr("src","/AllTalk/img/login/QQ 02.png");
				break;
			case "weixin":
				$(this).attr("src","/AllTalk/img/login/weixin 02.png");
				break;
			case "weibo":
				$(this).attr("src","/AllTalk/img/login/weibo 02.png");
				break;
			default:
				break;
		}},
		function (){
			var iconName = $(this).attr("name");
		switch (iconName){
			case "qq":
				$(this).attr("src","/AllTalk/img/login/QQ 01.png");
				break;
			case "weixin":
				$(this).attr("src","/AllTalk/img/login/weixin 01.png");
				break;
			case "weibo":
				$(this).attr("src","/AllTalk/img/login/weibo 01.png");
				break;
			default:
				break;
		}
	});

	//登录按钮获取值
	$("#loginBtn").click(
		function loginTest () {
			var userName = $("#loginUsername").val();
			var passWord = $("#loginPassword").val();
			var remember = $("#rememberId").is(":checked");//返回参数为boolean型
			console.log(userName+","+passWord+","+remember);
			console.log($("#loginUsername-error").html()+","+$("#loginPassword-error").html())
			if ($("#loginUsername-error").text()==""&&$("#loginPassword-error").text()=="") {
				$.tooltip('提交成功，2秒后自动关闭',2000,true);
				setTimeout(function(){ 
					$(".loginBox").hDialog('close',{box:'#loginBox'}); 
				},2000);
			}
	});
	
	//注册按钮获取值
	$("#registerBtn").click(
		function () {
			var userName = $("#registerUsername").val();
			var passWord = $("#registerPassword").val();
			var passWord2 = $("#registerPassword2").val();
			var verification = $("#verification").val();
			var remember = $("#readed").is(":checked");//返回参数为boolean型
			console.log(userName+","+passWord+","+passWord2+","+verification+","+remember);
	});
//	var state1=1;
	//注册框失去焦点后事件
	$("#register_form_area").find("input").blur(function (state) {
		state = 1;
		var userName = $("#registerUsername").val();
		var passWord = $("#registerPassword").val();
		var passWord2 = $("#registerPassword2").val();
		var verification = $("#verification").val();
		var remember = $("#readed").is(":checked");//返回参数为boolean型
		//判断邮箱是否可用
		console.log(!$("#registerUsername-error").length+","+($("#registerUsername").val()!=""))
		if (!$("#registerUsername-error").length&&$("#registerUsername").val()!="") {
			if (state == 0) {
				$("#p2_1").find("label.repeat").css("display","inherit");
				console.log("1");
			}
			else if (state == 1){
				$("#p2_1").find("label.available").css("display","inherit");
				console.log("2");
			}
		}
		else if (($("#registerUsername-error").length&&$("#registerUsername-error").css("display")=="none")) {
			if (state == 0) {
				$("#p2_1").find("label.repeat").css("display","inherit");
				console.log("3");
			}
			else if (state == 1){
				$("#p2_1").find("label.available").css("display","inherit");
				console.log("4");
			}
		}else{
			$("#p2_1").find("label.repeat").css("display","none");
			$("#p2_1").find("label.available").css("display","none");
			console.log("3");
		}
		console.log(userName+","+passWord+","+passWord2+","+verification+","+remember);
	});
	
	//关注按钮未登录提示框事件
	$(".login_tip").find("a").click(function () {
		$("#login_text").trigger("click");
	});
	
}
});
