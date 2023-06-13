$(document).ready(function(){


    //화면스크롤 부드럽게 이동
    const body = new Scrooth({ 
        acceleration:2.4,       
        strength:20,
        deceleration:0.97
      });
      
          
    // 상단 메뉴바 스크롤 시 변화
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

    // 상단 메뉴바 언어영역 애니메이션
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

    // (모바일) 버튼 클릭시 메뉴바 열리게
    let moMenuState = false;
    $("#btnMoMenu").click(function(){

        
        if(moMenuState==false){
            // 메뉴가 현재 닫혀있는 상태 -> 여는기능
            $("#btnMoMenu").addClass("closed")
            $("nav.moMenu").addClass("show")
            moMenuState =true
        }else{
            // 메뉴가 현재 열려있는 상태 -> 닫는기능
            $("#btnMoMenu").removeClass("closed")
            $("nav.moMenu").removeClass("show")
            moMenuState =false
        }

        
        
    })


    // (모바일) 메뉴바 리스트 클릭
    $(".mobileMenuList>li").click(function(){

        if($(this).hasClass("on")==true){
            $(this).css("height","46px")
            $(this).removeClass("on")
        }else{
            $(".mobileMenuList>li").css("height","46px")
            $(".mobileMenuList>li").removeClass("on")
            let li2depth = $(this).children("ul").children().length
            $(this).css("height", ((li2depth)*40+46+28)+"px")
            // ui여백(28px)+li>a높이(46px) 다 다르기 때문에 더해줘야한다. 이전 참고한 방식은 다 같은 높이였으므로 1을 더한것이다.
            $(this).addClass("on")
        }

    })

    $(".mobileMenuList ul").click(function(){
        return false
    })


    // top 버튼 
    $(".F_scroll").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })

})