$(document).ready(function () {
	$("#form").validate({
	rules:{
		username:"required"
		
	},
	messages:{
		username:"请输入用户名!"
	}
});
});