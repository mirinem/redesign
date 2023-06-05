$(document).ready(function(){

    
    $(".btn1985").click(function(e){

        e.preventDefault() 
        $(".popup-history").addClass("show")
    })

    $(".btnPopupClose").click(function(e){

        e.preventDefault() 
        $(".popup-history").removeClass("show")
    })

})