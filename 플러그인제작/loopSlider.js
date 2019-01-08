$(function(){
    var imgWd = parseInt($("#region").width());
    var num = $("#images a").length;
    var intv = setInterval(function(){ 
        nextAni();
    }, 3000);
    function nextAni(){
      /* #images를 두 번째 이미지를 나타나게 하는 애니메이션을 실행한 후 
        #images의 첫 번째 자식인 a를 맨 뒤로 이동시키며, 왼쪽 마진을 0으로 설정  
      */
      $("#images").not(":animated").animate({"margin-left":-imgWd+"px"}, 500, function(){
          $("#images a").eq(0).appendTo($("#images"));
          $("#images").css("margin-left", "0px");
      });    
    };
    function prevAni(){
/*      #images의 a태그 마지막 요소를 맨 앞으로 가져오면서 #images의 왼쪽 마진은 -imgWd로 설정한 후 #images의 마진을 0으로 애니메이트  */
        $("#images a").eq(num-1).prependTo($("#images"));
        $("#images").css("margin-left", -imgWd+"px");
        $("#images").not(":animated").animate({"margin-left":"0px"}, 500);
    };
    $(".rightbtn").click(function(){
        clearInterval(intv);
        nextAni(); 
        intv = setInterval(function(){ nextAni(); }, 3000);
    });
    $(".leftbtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){ nextAni(); }, 3000);
    });
});