$(function(){

/*서치*/				
	 $(".search-switch").on('click',function(){
 $(".search-modal").fadeIn(400);
  });
  $(".search-close-switch").on("click",function(){
	 $(".search-modal").fadeOut(400,function(){
		 $("#search-input").val("");
	 });  
  });  
 });
 
 

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
	$(".btn").attr("src","img/arrow-down.png");
	}else{
	
	$(".sub").stop().slideUp(500);
	$(".btn").attr("src","img/arrow-down.png");
	$(this).next().stop().slideDown(500);
	$(this).find("img").attr("src","img/arrow-up.png");
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
				$(".btn").attr("src","img/arrow-down.png");
			}else{
				
				$(".subsub>li>a").next().stop().slideDown(500);
				$(".btn").attr("src","img/arrow-down.png");
				$(this).next().stop().slideDown(500);
				$(this).find("img").attr("src", "img/arrow-up.png");
			};
		});
	
		
		$(".cross").click(function(){
		$(".menu").animate({marginLeft:"0px"},300);
		$(".cross").hide();
		$(".hamburger").show();
		});
		
			});
			
	/*메인이미지*/		
			
			$(function(){
	 var $bnnNum=0;
	 
	 $(".prev").click(function(){
		 if($bnnNum<=0) return false;
		 $bnnNum--;
		 $book_w=$(".main_image").width();
		 $(".main_image ul").animate({left:-$book_w*$bnnNum},500,function(){
			 $("#book_roll img").attr("src", "img/state_out.png");
			 $("#book_roll img").eq($bnnNum).attr("src", "img/state_over.png");
		 });
		 	 });
	 
	$(".next").click(function(){
		if($bnnNum>=4) return false;
		$bnnNum++;
		$book_w=$("#main_image").width();
		$("#main_image ul").animate({left:-$book_w*$bnnNum},500,function(){
			$("#book_roll img").attr("src", "img/state_out.png");
			$("#book_roll img").eq($bnnNum).attr("src", "img/state_over.png");
		});
	});
	
	 $("#book_roll li a").click(function(){
		var strName=($(this).parent().attr("id"));
		slideTarget(strName.substr(3,1));
		return false;
		
	});
	function slideTarget(n){
		var pos = Number(n)* - 100+"%";
	$("#main_image ul").animate({left:pos},500,
	function(){
		$("#book_roll img").attr("src", "img/state_out.png");
		$("#book_roll img").eq(n).attr("src", "img/state_over.png");
		
	});
	}; 
		var btnNum=0;
	setInterval(function(){
		btnNum++;
		if(btnNum>=4) btnNum=0;
		$("#book_roll li a").eq(btnNum).trigger("click")
		},3000);
});
  
  //best more 
  
  $(function(){  		
 size_li = $('#bestseller_box li').size();
 var win=$(window).width();
 if(win < 720 && win >= 640){
    x=3;
    $('#bestseller_box li:lt('+x+')').show();
 
  $('.more_btn').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('#bestseller_box li:lt('+x+')').show();
    });
   }else if(win<640)
   {
    x=2;
    $('#bestseller_box li:lt('+x+')').show();
 
  $('.more_btn').click(function () {
        x= (x+2 <= size_li) ? x+2 : size_li;
        $('#bestseller_box li:lt('+x+')').show();
    });
   
   } else{
    x=4;
    $('#bestseller_box li:lt('+x+')').show();
 
  $('.more_btn').click(function () {
        x= (x+4 <= size_li) ? x+4 : size_li;
        $('#bestseller_box li:lt('+x+')').show();
    });  
   }
   
});
//new more
$(function(){  		
 size_li = $('#new_box li').size();
 var win=$(window).width();
 if(win < 720 && win >= 640){
    x=3;
    $('#new_box li:lt('+x+')').show();
 
  $('.more_btn1').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('#new_box li:lt('+x+')').show();
    });
   }else if(win<640)
   {
    x=2;
    $('#new_box li:lt('+x+')').show();
 
  $('.more_btn1').click(function () {
        x= (x+2 <= size_li) ? x+2 : size_li;
        $('#new_box li:lt('+x+')').show();
    });
   
   } else{
    x=4;
    $('#new_box li:lt('+x+')').show();
 
  $('.more_btn1').click(function () {
        x= (x+4 <= size_li) ? x+4 : size_li;
        $('#new_box li:lt('+x+')').show();
    });  
   }
   
});


//review

$(function(){

   
    if ($('#banner_wrap').length > 0) {
            var bxSlider = $('#banner_wrap #slide_banner').bxSlider();
        }

        function bxInit() {
            var winSize = $(window).width(),
                sizeID;
            if (winSize < 1200 && winSize >= 500) {
                sizeID = 3;
            } else if (winSize < 500) {
                sizeID = 2;
            } else {
                sizeID = 5;
            }
            bxSlider.reloadSlider({
                minSlides: sizeID,
                maxSlides: sizeID,
                moveSlides: sizeID,
                auto: true,
                slideWidth: 257,
                slideMargin: 5,
                pause: 3000,
                nextText: '',
                prevText: '',
                autoHover: true,
                autoStart: true,
                autoDelay: 750,
                pager: false
            });
        }

        bxInit();
        $(window).resize(function () {
            bxSlider.stopAuto(true);
            bxInit();
            bxSlider.onSliderLoad(function () {
                this.autoDelay(750).autoStart(true);
            });
        });
   		

   $("#prevBtn").on("click",function(){
    bxSlider.goToPrevSlide();  
    return false; 
   });

  $("#nextBtn").on("click",function(){
    bxSlider.goToNextSlide();  
   return false;
  });
   
   //top//
   
         
        $( window ).scroll( function() {
          if ( $( this ).scrollTop() > 800 ) {
            $( '.top' ).fadeIn();
          } else {
            $( '.top' ).fadeOut();
          }
        } );
        $( '.top' ).click( function() {
          $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
          return false;
        } );
   
    
});



