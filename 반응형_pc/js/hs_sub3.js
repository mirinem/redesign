$(document).ready(function(){


    //화면스크롤 부드럽게 이동
    const body = new Scrooth({ 
        acceleration:2.4,       
        strength:20,
        deceleration:0.97
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


    $(".F_scroll").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })

})