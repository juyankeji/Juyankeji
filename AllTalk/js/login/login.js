$(document).ready(function(){
  $(function () {
//	var $el = $('.dialog');
//	$el.hDialog(); //默认调用
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
 		$(".register_form_area,.login_form_area").css("display","none");
 	});
});
	 	$("#login_text").click(function () {
	 		$(".register_form_area").removeClass("form_area_disply");
	 		$(".login_form_area").addClass("form_area_disply");
	 	});
	 	$("#register_text").click(function () {
	 		$(".login_form_area").removeClass("form_area_disply");
	 		$(".register_form_area").addClass("form_area_disply");
	 	});
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
		$(".login_form_area").css("display","none");
		$(".register_form_area").css("display","inherit");
		
	});
	
	$("#returnLogin").click(function () {
		$("#loginBox").animate({height:'420px'});
		$("#line").animate({height:'125px'});
		$(".login_form_area").css("display","inherit");
		$(".register_form_area").css("display","none");
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
			$(this).siblings("img").attr("src","img/login/user 02.png");
			$(this).attr("oninput","this.style.color='#666'");
			break;
		case "password":
			$(this).siblings("img").attr("src","img/login/password 02.png");
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
			$(this).siblings("img").attr("src","img/login/user 01.png");
			break;
		case "password":
			$(this).siblings("img").attr("src","img/login/password 01.png");
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
			$(this).attr("src","img/login/QQ 02.png");
			break;
		case "weixin":
			$(this).attr("src","img/login/weixin 02.png");
			break;
		case "weibo":
			$(this).attr("src","img/login/weibo 02.png");
			break;
		default:
			break;
	}},
	function (){
		var iconName = $(this).attr("name");
	switch (iconName){
		case "qq":
			$(this).attr("src","img/login/QQ 01.png");
			break;
		case "weixin":
			$(this).attr("src","img/login/weixin 01.png");
			break;
		case "weibo":
			$(this).attr("src","img/login/weibo 01.png");
			break;
		default:
			break;
	}
});

//登录测试
$("#loginBtn").click(
	function loginTest () {
		var userName = $("#loginUsername").val();
		var passWord = $("#loginPassword").val();
		var p1_1 = $("#p1_1").text();
		var p1_2 = $("#p1_2").text();
		if (p1_1 == "" && p1_2 == "" && userName!="" && passWord!="") {
			$.tooltip('登录成功，欢迎回来',1000,true);
		  setTimeout(function(){ 
		    $("#loginBtn").hDialog('close',{box:'#loginBox'});
		    $("#HOverlay").remove();
		    $(".icon_message").css("visibility","visible");
		    $(".personal_pic_unlogin").css("visibility","visible");
		    $(".personal_pic_unlogin").attr("src","img/personal/personalPicture.png")
		    $(".signUp").css("visibility","hidden");
		   	$("#username").css("visibility","visible");
		  },1000);
  
		}
});


/*
	 * 以下是单独的调用示例，你只需要自定义弹框的样式即可。
	 *          - $(element).hDialog(); //默认调用弹框；
	 *          - $(element).hDialog({box: '#demo'}); //自定义弹框容器ID/Class；
	 *          - $(element).hDialog({boxBg: '#eeeeee'}); //自定义弹框容器背景；
	 *          - $(element).hDialog({modalBg: '#eeeeee'}); //自定义遮罩背景颜色；
	 *          - $(element).hDialog({closeBg: '#eeeeee'}); //自定义关闭按钮背景颜色；
	 *          - $(element).hDialog({width: 500}); //自定义弹框宽度；
	 *          - $(element).hDialog({height: 400}); //自定义弹框高度；
	 *          - $(element).hDialog({position: 'top'}); //弹框位置(默认center：居中，top：顶部居中，left：顶部居左，bottom：底部居右)
	 *          - $(element).hDialog({effect: 'fadeOut'}); //弹框关闭效果(结合animate.css里的动画，默认：zoomOut)；
	 *          - $(element).hDialog({hideTime: 2000}); //弹框定时关闭(默认0:不自动关闭, 以毫秒为单位)
	 *          - $(element).hDialog({closeHide: false}); //是否隐藏关闭按钮(默认true：不隐藏，false：隐藏)
	 *          - $(element).hDialog({resetForm: false}); //false:不重置表单,反之重置；
	 *          - $(element).hDialog({modalHide: false}); //false:点击遮罩背景不关闭弹框,反之关闭；
	 *          - $(element).hDialog({isOverlay: false}); //是否显示遮罩背景(默认true：显示，false：不显示)
	 *          - $(element).hDialog({escHide: false}); //false:按ESC不关闭弹框,反之关闭；
	 *          - $(element).hDialog({autoShow: false}); //是否页面加载完成后自动弹出(默认false点击弹出，true：自动弹出)
	 *          - $(element).hDialog({types:2,iframeSrc:'http://css.doyoe.com/',iframeId:'iframeHBox',width:960,height:600}); //调用框架
	 * 
	 * 也可以整个覆盖（tips: 默认的无需写）：  
	 *          - $(element).hDialog({
	 *                box: '#demo',
	 *                boxBg: '#eeeeee',
	 *                modalBg: '#eeeeee',
	 *                closeBg: 'rgba(0,0,0,0.6)',
	 *                width: 500,
	 *                height: 400,
	 *                positions: 'top',
	 *                effect: 'fadeOut',
	 *                hideTime: 3000,
	 *                closeHide: false,
	 *                resetForm: false,
	 *                isOverlay: false,
	 *                modalHide: false,
	 *                escHide: false,
	 *                autoShow: false,
	 *                types: 1,
	 *                iframeSrc: '',
	 *                iframeId: 'iframeHBox',
	 *                beforeShow: function(){ alert('执行回调'); },
	 *                afterHide: function(){ alert('执行回调'); }
	 *            });
	 *
	 * 下面是简单的扩展方法（以后再慢慢补充吧）：
	 *          - $.tooltip('错误提示文字'); 或者  $.tooltip('正确提示文字',4000,true,callback);  //内置2种提示风格(参数1为提示文字，参数2为自动关闭时间，参数3：true为正确，false为错误，参数4: 回调函数)
	 *          - $.showLoading('正在加载...',90,30); 或者  $.hideLoading(); //显示/移除加载(参数1为说明文字，参数2为宽度，参数3为高度，默认宽高为140*48，可不填写)
	 *          - $.goTop(); //返回顶部,(参数1：和屏幕底部的距离，参数2：和屏幕右侧的距离； PS:自定义一定要加单位，比如px,em, 也可以是百分比哦)
	 *          - $.dialog('alert','提示','hello'); 或者 $.dialog('confirm','提示','确认么？',0,function(){ alert('ok'); });  //消息框,(参数1：消息框类型(alert/confirm)，参数2：消息框标题；参数3：消息框内容度；参数4：消息框自动关闭时间，以毫秒为单位(默认0：不自动关闭)；参数5: 回调函数)
	 *          - $.closeDialog(); 或者 $.closeDialog(function(){ alert('ok'); }); //关闭消息框,(参数1：回调函数)
//	 */