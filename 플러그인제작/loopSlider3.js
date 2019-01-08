(function( $ ){
    $.fn.extend({
        loopSlider:function(options){
            var sw=1;
            var box = $(this);
            var sel1 = options.sel1; /* #images a */
            var sel2 = options.sel2; /* #images */
            var lBtn = options.lBtn;
            var rBtn = options.rBtn;
            var sBtn = options.sBtn;
            var spd = parseInt(options.spd);
            var imgWd = parseInt(box.width());
            var num = $(sel1).length;
            var intv = setInterval(function(){ 
                nextAni();
            }, 3000);
            function nextAni(){
              /* #images를 두 번째 이미지를 나타나게 하는 애니메이션을 실행한 후 
                #images의 첫 번째 자식인 a를 맨 뒤로 이동시키며, 왼쪽 마진을 0으로 설정  
              */
              $(sel2).not(":animated").animate({"margin-left":-imgWd+"px"}, spd, function(){
                  $(sel1).eq(0).appendTo($(sel2));
                  $(sel2).css("margin-left", "0px");
              });    
            };
            function prevAni(){
        /*      #images의 a태그 마지막 요소를 맨 앞으로 가져오면서 #images의 왼쪽 마진은 -imgWd로 설정한 후 #images의 마진을 0으로 애니메이트  */
                $(sel1).eq(num-1).prependTo($(sel2));
                $(sel2).css("margin-left", -imgWd+"px");
                $(sel2).not(":animated").animate({"margin-left":"0px"}, spd);
            };
            $(rBtn).click(function(){
                clearInterval(intv);
                nextAni(); 
                intv = setInterval(function(){ nextAni(); }, 3000);
            });
            $(lBtn).click(function(){
                clearInterval(intv);
                prevAni();
                intv = setInterval(function(){ nextAni(); }, 3000);
            });
            $(sBtn).click(function(){
                if(sw==1){
                    $(sBtn).text("실행");
                    clearInterval(intv);
                } else {
                    $(sBtn).text("정지");
                    intv = setInterval(function(){ nextAni(); }, 3000);
                }
                sw=sw*-1;
            });
        }
    });    
}) (jQuery);    