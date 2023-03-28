$(document).ready(function(){

	
	$("#save").click(function(){
		if($("#username").val()==""){
			$("#username").css("border","1px solid red");
			$("#username").focus();
			return false;
		}
		else{
			$("#username").css("border","1px solid green");
		}
		if($("#email_id").val()==""){
			$("#email_id").css("border","1px solid red");
			$("#email_id").focus();
			return false;
		}
		else{
			$("#email_id").css("border","1px solid green");
		}
		if($("#contact_no").val()==""){
			$("#contact_no").css("border","1px solid red");
			$("#contact_no").focus();
			return false;
		}
		else{
			$("#contact_no").css("border","1px solid green");
		}
		if($("#password").val()==""){
			$("#password").css("border","1px solid red");
			$("#password").focus();
			return false;
		}
		else{
			$("#password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/register.php",
			dataType:"json",
		
			data:$("#loginForm").serialize(),
			success:function(res){
				if(res.status=="Done"){
					window.location="login.html";
				}
			}

		})
	})
})
	