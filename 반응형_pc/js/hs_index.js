
window.onload = function(){


    //화면스크롤 부드럽게 이동
    const body = new Scrooth({ 
        acceleration:1.7,       
        strength:19,
        deceleration:0.95
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

    
    // 배너 슬라이드 무한 재생
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("ul.b_images").animate({ "translateX": "-20%" }, 1500, function(){                      
            $("li.bS_img:first-child").insertAfter("li.bS_img:last-child");
        });        
    };
    



    //  사업분야 슬라이드 
    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let train = document.querySelector(".sector")
    let trainList = train.children  
    let count = 0 

    
    let pagiList = document.querySelectorAll(".pagination>li")

    nextBtn.addEventListener("click",function(e){           
        e.preventDefault()
         
        count++    
        if(count>3){count=0} 
        train.style.transform = "translateX(-"+25*count+"%)" 

        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pagiList[i].classList.remove("on")
        }        
        trainList[count].classList.add("on") 
        pagiList[count].classList.add("on")   
                         
    })    
    

    prevBtn.addEventListener("click",function(e){       
        e.preventDefault()
        count--
        if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)` 

        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pagiList[i].classList.remove("on")
        }        
        trainList[count].classList.add("on") 
        pagiList[count].classList.add("on")    
        
    })

    for(let k=0;k<trainList.length; k++){
        pagiList[k].addEventListener("click",function(){

            count = k  
            for(let i=0; i<trainList.length; i++){
                trainList[i].classList.remove("on")
                pagiList[i].classList.remove("on")
            }
            trainList[k].classList.add("on")
            pagiList[k].classList.add("on")
    
            train.style.transform = `translateX(-${25*k}%)`
        })
    }  

    // 하단 top 버튼 
    $(".F_scroll").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })

    
}