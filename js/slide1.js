$(function(){
	var imgItems = $('.slider li').length;
  var imgPos = 1;
  for(i = 1; i <= imgItems; i++){
  	$('.pagination').append('<li><span>●</span></li>');
  }
  
	$('.slider li').hide();
  $('.slider li:first').show();
  $('.pagination li:first').css({'color': '#000'});
  
  $('.pagination li').click(pagination);
  $('.left').click(prevSlider);
  $('.right').click(nextSlider);
  
  
  function pagination(){
 		var paginationPos = $(this).index() + 1;
    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();
    $('.pagination li').css({'color': '#ddd'});
    $('.pagination li:nth-child('+ paginationPos +')').css({'color': '#000'});
    imgPos = paginationPos;
  }
  
  function nextSlider(){
  	if(imgPos >= imgItems){
    	imgPos = 1;
    }else{imgPos++;}
  	$('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
    $('.pagination li').css({'color': '#ddd'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#000'});
  }
  function prevSlider(){
  	if(imgPos <= 1){
    	imgPos = imgItems;
    }else{imgPos--;}
  	$('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
    $('.pagination li').css({'color': '#ddd'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#000'});
  }
  setInterval(function(){
  	nextSlider();
  },4000);
  
  //
  
  
});