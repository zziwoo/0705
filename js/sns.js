$(function(){
 var mySlider=$("#slide_banner").bxSlider({
 mode:"horizontal",
 speed:500,
 pager:false,
 moveSlides:1,
 slideWidth:90,
 minSlides:4,
 maxSlides:4,
 slideMargin:10,
 auto:true,
 autoHover:true,
 controls:false
 });
 $("#prevBtn").on("click", function(){
 mySlider.goToPrevSlide();
 return false;
 });
  $("#nextBtn").on("click", function(){
 mySlider.goToNextSlide();
 return false;
 });
});	
 