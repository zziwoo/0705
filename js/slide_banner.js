$(function(){ // $(document).ready(function(){ });

    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');
    var current = 0;   //���� Ȱ��ȭ�� �ִ� �̹����� index�� �����ϱ����� ����
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
        }, 4500);
    }
    
    function move(i){
        if(current == i) return;    
		        
		/* ���� Ȱ��ȭ�� ��ư�� �ٽ� �� ������ ��������� ����Ÿ�� �� �ֱ� ������ Ȱ��ȭ�� �ٽ� Ŭ���� index ������ Ȱ��ȭó�� ��������  */
		
        var currentEl = visual.eq(current);  
		// ���� Ȱ��ȭ index�� Ȱ��ȭ�Ǿ� �ִ� �̹����� �����Ͽ� �Ҵ�
        var nextEl = visual.eq(i);    // Ȱ��ȭ ��ų �̹��� 
        
        
		currentEl.css({left:0}).stop().animate({left:'-100%'});  
		  // �̹� Ȱ��ȭ�� �̹���(�߾�)���� �������� �̵�(-100%)
        nextEl.css({left:'100%'}).stop().animate({left:0});  
		 // �߾ӿ� Ȱ��ȭ ��ų �̹��� ����(-100%)���� �߾�(0)���� �̵�

        current = i;
    }
});