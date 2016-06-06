$(document).ready(function(){
  $(function () {
	var $el = $('.dialog');
//	$el.hDialog(); //默认调用
	$el.hDialog({
		width : 642,
		height : 420,
		boxBg : '#ccc',
		modalHide: false
 		});
	});
	
//	$(".submitBtn").click(function () {
//		$("#errInfo_area2").html("账号密码错误！");
//	});
	
	
	
	$("#register_form_area").validate({
		rules:{
			registerUsername:{
				required:true,
			},
			registerPassword:{
				required:true,
			},
			registerPassword2:{
				required:true,
			},
			nickName:{
				required:true
			}
		},
		messages:{
			registerUsername:"请输入用户名！",
			registerPassword:{
				required: "请输入密码!",
        minlength: "密码长度不能小于6位！"
			},
			registerPassword2:{
				required: "请输入密码!",
        minlength: "密码长度不能小于6位！",
        equalTo: "两次密码输入不一致"
			},
		},
		errorPlacement:function(error,element){
			if(element.is("input"))
				error.appendTo(".errInfo_area");
			else
				return 0;
			
		}
	});
	
	$("#register_button").click(function () {
		$("#loginBox").animate({height:'450px'});
		$("#line").animate({height:'160px'});
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
	 */