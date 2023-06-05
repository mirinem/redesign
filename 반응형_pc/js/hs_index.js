
window.onload = function(){

    


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
    
    
}