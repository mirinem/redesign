$(document).ready(function(){


    //화면스크롤 부드럽게 이동
    const body = new Scrooth({ 
        acceleration:1.7,       
        strength:19,
        deceleration:0.95
      });
      
          
    
    $(function(){

        
        let prevScrollTop = 0;
      
        document.addEventListener("scroll", function(){            
            let nowScrollTop = $(window).scrollTop();

            if (nowScrollTop > prevScrollTop){
                // $("header").addClass('down');
                $("header").removeClass('up');  
            }else {
                // $("header").removeClass('down');
                $("header").addClass('up'); 
            } 
            prevScrollTop = nowScrollTop; 

            if(nowScrollTop > 400){
                $("header").addClass("down")
            }else{
                $("header").removeClass("down")
                $("header").removeClass('up');
            }
      
        });
      
    })


    let btnOpen = document.querySelector(".lagIcon")
    let lagState = false
    btnOpen.addEventListener("click",function(){
        if(lagState == false){
            document.querySelector(".languageFloat").classList.add("show")
            lagState = true
        }else{
            document.querySelector(".languageFloat").classList.remove("show")
            lagState = false
        }
        
    })
    

    // 모바일 계열사 슬라이드
    let count = 0;
    
    let perView;    
    let stationWidth;
    let trainWidth;

    let winWidth = $(window).width()
    perView = 1.5
            stationWidth = $(".affiliate").width()
            trainWidth = stationWidth * 5 / perView
            $(".affiliate>ul").width(trainWidth)



    $(".btnNext2").click(function(e){
        count++
        e.preventDefault()
        if(count>4){count=0}
        moveSlider(count)
    })

    $(".btnPrev2").click(function(e){
        count--
        e.preventDefault()
        if(count<0){count=4}
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".affiliate>ul").css("transform","translateX("+(-20*idx)+"%)")
    }
    moveSlider(1)




    $(".F_scroll").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })

})