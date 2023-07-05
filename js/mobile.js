$(function(){
		
	//$(".cross").hide();
	$(".hamburger").click(function(){
	$(".menu").animate({marginLeft:"100%"},400);
	$(".hamburger").hide();
	$(".cross").show();
		});
		
		
	/*메뉴*/
	
	$(".menu>ul>.menu_s>a").click(function(){
	if($(this).next().is(":visible"))
	{
	$(this).next().stop().slideUp(500);
	$(".btn").attr("src","imgex/arrow-down.png");
	}else{
	
	$(".sub").stop().slideUp(500);
	$(".btn").attr("src","imgex/arrow-down.png");
	$(this).next().stop().slideDown(500);
	$(this).find("img").attr("src","imgex/arrow-up.png");
	};
		});
		
		$(".cross").click(function(){
		$(".menu").animate({marginLeft:"0px"},300);
		$(".cross").hide();
		$(".hamburger").show();
		});
		
				$(".sub>li>a").click(function(){
			if($(this).next().is(":visible"))
			{
				$(this).next().stop().slideUp(500);
				$(".btn").attr("src","imgex/arrow-down.png");
			}else{
				
				$(".subsub>li>a").next().stop().slideDown(500);
				$(".btn").attr("src","imgex/arrow-down.png");
				$(this).next().stop().slideDown(500);
				$(this).find("img").attr("src", "imgex/arrow-up.png");
			};
		});
	
		
		$(".cross").click(function(){
		$(".menu").animate({marginLeft:"0px"},300);
		$(".cross").hide();
		$(".hamburger").show();
		});
		
			});
	
	