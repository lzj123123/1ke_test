$(function(){
	var glide = $(".hslider").glide({
					
	});
	$(".hrow1 .main .view").glide({
					
	});
	$("#jptj").glide({
					
	});
				
				
	$("#roll .prev").click(function(){
		$("#roll ul").animate({'margin-left':"-=233"},function(){
			$("#roll li:first").appendTo($('#roll ul'));//尾部插入
				$('#roll ul').css('margin-left',0);
		});
	})
				
	$("#roll .next").click(function(){
		$('#roll li:last').prependTo('#roll ul');//开头插入
		$('#roll ul').css('margin-left',-233);
		$("#roll ul").stop().animate({'margin-left':"+=233"});
	})
				
				
})