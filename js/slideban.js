$(function(){ // $(document).ready(function(){ });

    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');
    var current = 0;   //현재 활성화되 있는 이미지의 index를 저장하기위한 변수
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    
    $('#wrap').on({
        mouseover:function(){
            clearInterval(setIntervalId);   
        },
        mouseout:function(){
            timer();         
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){   
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 5000);
    }
    
    function move(i){
        if(current == i) return;    
		        
		/* 현재 활성화된 버튼을 다시 또 누르면 오류비슷한 현상나타날 수 있기 때문에 활성화와 다시 클릭한 index 같으면 활성화처리 수행중지  */
		
        var currentEl = visual.eq(current);  
		// 기존 활성화 index로 활성화되어 있는 이미지를 선택하여 할당
        var nextEl = visual.eq(i);    // 활성화 시킬 이미지 
        
        
		currentEl.css({left:0}).stop().animate({left:'-100%'});  
		  // 이미 활성화된 이미지(중앙)에서 좌측으로 이동(-100%)
        nextEl.css({left:'100%'}).stop().animate({left:0});  
		 // 중앙에 활성화 시킬 이미지 우측(-100%)에서 중앙(0)으로 이동

        current = i;
    }
});