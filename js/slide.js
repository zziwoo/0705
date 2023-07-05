
	
			$(function(){
$(".nav>.dropdown>a").mouseenter(function(){
$(".fulldrop").stop().slideUp(500);
$(this).next().stop().slideDown(500);
});

$(".container>.nav>.dropdown").mouseleave(function(){
$(".fulldrop", this).stop().slideUp(500);
});
			
			  
	          });