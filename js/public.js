

window.onload = function(){
	//收藏按钮效果
	var coll = false;
	$(".collect").click(function(){
		if(!coll){
			$(this).find("img").attr("src","../../img/yishoucang@2x.png");
		}else{
			$(this).find("img").attr("src","../../img/weishouc@2x.png")
		}
		coll =! coll
	})
	//抽奖号码有无状态（num_list为0展示为空的状态）
	var num_list = $("#number_list").children().length;
	if(num_list == 0){
		$("#number_list").css("display","none");
		$(".number_null").css("display","block");
		$(".pull_down").css("display","none");
	}else{
		$("#number_list").css("display","block");
		$(".number_null").css("display","none");
		$(".pull_down").css("display","block");
		$("#number_list").css("height","1.4rem");
	}
	
	//抽奖号码下拉按钮
	var n = false;
	$(".pull_down").click(function(){
		if (!n) {
			$("#number_list").css("height","auto");
			$(".text_list").css("height","7rem");
			$(".text_list").removeClass("text-overflow3");
			$(this).find("img").attr("src","../../img/shangjiantou@2x.png");
		} else{
			$("#number_list").css("height","1.5rem");
			$(".text_list").css("height","1.8rem");
			$(".text_list").addClass("text-overflow3");
			$(this).find("img").attr("src","../../img/xiajiantou@2x.png");
		}
		n =!n
	})
	//抽奖商品开始与未开始banner底部状态（0 = 未开始；1 = 以开始）
	var tim = 1;
	if(tim == 0){
		$(".act_banner_null").css("display","block");
		$(".avt_banner_footer").css("display","none");
	}else{
		$(".avt_banner_footer").css("display","block");
		$(".act_banner_null").css("display","none");
	}
	
	
	
	//开奖倒计时
	var now =new Date();
    var end =new Date(2018,4,23,00,00,00);//结束的时间：年，月，日，分，秒（月的索引是0~11）
    /*两个时间相减,得到的是毫秒ms,变成秒*/
    var result=Math.floor(end-now)/1000; 
    
    var interval=setInterval(sub,1000); //定时器 调度对象
    /*封装减1秒的函数*/
    function sub(){
        if (result>1) {
           result = result - 1; 
           var second = Math.floor(result % 60);     	
           var minite = Math.floor((result / 60) % 60); 
           var hour = Math.floor(result / 3600); 
         	
           	$("#remainTime").html( timb(hour) + ":" + timb(minite) + ":" + timb(second));
        } else{
            $("#remainTime").html( 00 + ":" + 00 + ":" + 00);
        }
    };
    function timb(i){
    	if(i < 10){
    		i = "0" + i;
    	}
		return i;
    }
    
	
	//点赞&收藏
	var di = false;
	var ci = false;
	$(".dianzan").click(function(){
		var num = Number($(this).find("i").text())
		if(!di){
			$(this).find("img").attr("src","../../img/dz2_icon@2x.png");
			num += 1;
		}else{
			$(this).find("img").attr("src","../../img/dz_icon@2x.png");
			num -= 1;
		}
		di =! di
		$(this).find("i").text(num)
	})
	$(".shoucang").click(function(){
		var num = Number($(this).find("i").text())
		if(!ci){
			$(this).find("img").attr("src","../../img/chouc2_icon@2x.png");
			num += 1
		}else{
			$(this).find("img").attr("src","../../img/chouc_icon@2x.png")
			num -= 1
		}
		ci =! ci
		$(this).find("i").text(num)
	})
	
	//相关爆款
	var f_num = $(".faddish_box").children().length;
	$(".faddish_box").css("width",f_num * 5.6 + "rem");
	
	//返回按钮
	$("#return").click(function(){
		window.history.back(-1); 
	})
	
	//密码显示隐藏
	var ey = false;
	$(".eyes").click(function(){
		if (!ey) {
			$(this).find("img").attr("src","../../img/login/zhengyan.png");
			$(this).prev("input").attr("type","text")
		} else{
			$(this).find("img").attr("src","../../img/login/biyan.png");
			$(this).prev("input").attr("type","password")
		}
		ey =! ey
	})
	
}	
