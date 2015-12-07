  	var n = 0;
    $(function(){
        count=$(".cont a").length;//显示区域的内容长度
        $(".item a").click(function(){
            $(this).addClass("seld").siblings().removeClass("seld");    
            var _index=$(this).index();//分屏的数字索引
            $(".cont>a").eq(_index).fadeIn(300).siblings().fadeOut(300);
        });
        t = setInterval("showAuto()",2000);//执行定义好的函数
        $(".box").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()",2000);});/*当鼠标划向图片时终止定时器，离开时再调用定时器*/
    })
    function showAuto()
    {
        n = n >=(count - 1)?0: ++n;
        $(".item a").eq(n).trigger('click');
    } 
	//我的淘爱心 
	$(function(){
		$("#wdtax").hover(function(){
			$("#wdtax_mune").toggle();
			$("#wdtax").addClass("navigation_hover");
		},
			function(){
			$("#wdtax_mune").toggle();
			$("#wdtax").removeClass("navigation_hover");
		});
	})
	//收藏夹
	$(function(){
		$("#favorites").hover(function(){
			$("#favorites_mune").toggle();
			$("#favorites").addClass("navigation_hover");
		},
			function(){
			$("#favorites_mune").toggle();
			$("#favorites").removeClass("navigation_hover");
		});
	})
	//卖家中心
	$(function(){
		$("#seller").hover(function(){
			$("#seller_mune").toggle();
			$("#seller").addClass("navigation_hover");
		},
			function(){
			$("#seller_mune").toggle();
			$("#seller").removeClass("navigation_hover");
		});
	})
	//联系客服
	$(function(){
		$("#service").hover(function(){
			$("#service_mune").toggle();
			$("#service").addClass("navigation_hover");
		},
			function(){
			$("#service_mune").toggle();
			$("#service").removeClass("navigation_hover");
		});
	})
	//我的账户
	$(function(){
		$("#account").hover(function(){
			$("#account_mune").toggle();
			$("#account").addClass("navigation_hover");
		},
			function(){
			$("#account_mune").toggle();
			$("#account").removeClass("navigation_hover");
		});
	})
	

// 注册之间的切换
$(document).ready(function() {  
	$("#reg_student").click(function(){
		$("#reg_student2").show();
		$("#reg_other2").hide();

	});
	$("#reg_other").click(function(){
		$("#reg_other2").show();
		$("#reg_student2").hide();
	});
})

 //学生注册核查
  function checkRegForm(){  
  	
    if(document.regForm.user.value==""){
      alert("请输入用户名！");
      document.regForm.user.focus();
      return false;
    }
    if(document.regForm.pass1.value==""){
      alert("请输入密码！");
      document.regForm.pass1.focus();
      return false;
    }
    if(document.regForm.pass2.value==""){
    	alert("请输入确认密码！");
    	document.regForm.pass2.focus();
    	return false;
    }
    if((document.regForm.pass1.value)!=(document.regForm.pass2.value)){
    	alert("两次输入的密码不一样，请重新输入！");
    	document.regForm.pass2.focus();
    	return false;
    }
  }

    function checkRegForm2(){ //其他用户注册
    	

    if(document.regForm2.user.value==""){
      alert("请输入用户名！");
      document.regForm2.user.focus();
      return false;
    }
    if(document.regForm2.pass1.value==""){
      alert("请输入密码！");
      document.regForm2.pass1.focus();
      return false;
    }
    if(document.regForm2.pass2.value==""){
      alert("请输入确认密码！");
      document.regForm2.pass2.focus();
      return false;
    }
    if((document.regForm2.pass1.value)!=document.regForm2.pass2.value){
    	alert("两次输入的密码不一样，请重新输入！");
    	document.regForm2.pass2.focus();
    	return false;
    }
    // if(document.regForm2.doc.value==""){
    //   alert("请输入证件号！");
    //   document.regForm2.doc.focus();
    //   return false;
    // }
    var contact=document.regForm2.contact;
	if(contact.value==""){
      alert("请输入联系方式！");
      contact.focus();
      return false;
    }
    if((contact.value)>='0'&&(contact.value)<='9'){
    	return true;
    }else{
    	alert("联系方式输入有误，请重新输入！");
    	contact.focus();
    	return false;
    }
  };

	/*登录*/
  function checkForm(){
    if(document.loginForm.user.value==""){
      alert("请输入用户名！");
      document.loginForm.user.focus();
      return false;
    }
    if(document.loginForm.pwd.value==""){
      alert("请输入密码！");
      document.loginForm.pwd.focus();
      return false;
    }
  };