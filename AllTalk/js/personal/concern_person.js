$(document).ready(function () {
//	$(".concern_person_item_content").on("mousemove",".concern_Btn",function () {
//		$(".concern_cancel_Btn").css("visibility","visible");
//		$(".concern_cancel_Btn").animate({right:'0',opacity:1},500);
//	}).on("mouseout",".concern_cancel_Btn",function () {
//		$(".concern_cancel_Btn").animate({right:'-56px',opacity:0},500);
//		$(".concern_cancel_Btn").css("visibility","hidden");
//	});
	
	$(".concern_person_item").hover(function () {
		$(this).find(".concern_Btn").css("visibility","visible");
	},function () {
		if ($(this).find(".concern_Btn").css("right") != "0px") {
			$(this).find(".concern_Btn").css("visibility","hidden");
		}else{
			$(this).find(".concern_Btn").animate({right:'-75px'},200,function () {
				$(this).css("visibility","hidden");
			});
		}
	});
	
	$(".concern_person_item").on("click",".concern_Btn_click_area",function () {
		
		if ($(this).parent().css("right") != "0") {
			$(this).parent().animate({right:'0'},200);
		}
		if ($(this).parent().css("right") == "0px") {
			$(this).parent().animate({right:'-75px'},200);
		}
	});
	$("#concern_cancel_Btn,.delete_item").click(function(){
		swal({
			title: "确定取消关注此人?",
//			text: "点击确定将不再关注此人!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: '确定',
			cancelButtonText: "取消",
			closeOnConfirm: false,
			confirmButtonText: "完成",
		},
		function(isConfirm){
			swal("已取消关注", "", "success");
			$(this).parents(".concern_person_item").remove();
			
		});
    });
		
//	});
//	document.querySelector('ul.examples li.warning.confirm button').onclick = function(){
//		swal({
//			title: "Are you sure?",
//			text: "You will not be able to recover this imaginary file!",
//			type: "warning",
//			showCancelButton: true,
//			confirmButtonColor: '#DD6B55',
//			confirmButtonText: 'Yes, delete it!',
//			closeOnConfirm: false
//		},
//		function(){
//			swal("Deleted!", "Your imaginary file has been deleted!", "success");
//		});
//	};
});