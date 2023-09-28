

function inInput() 
{
    var inputDiv = document.getElementById("m6");
    inputDiv.classList.toggle("expanded");
}

function outInput() 
{
    var inputDiv = document.getElementById("m6");
    inputDiv.classList.remove("expanded");
}

$(document).ready(function() 
{
    var current = 0;
    var count = $('.slide').length;
    
    $('.slide').hide();
    $('.slide').eq(0).show();
    
    setInterval(function() {    
        $('.slide').eq(current).fadeOut(function () {
            $(this).removeClass('active');
            current = (current + 1) % count;
            $('.slide').eq(current).addClass('active').fadeIn();
        });
    }, 2000);


    
        // Next button click event
    /*$(".next").click(function()
    {
        $(".slider .slide:nth-child("+ currentSlide +")").hide();
        currentSlide++;
        $(".slider .slide:nth-child("+ currentSlide +")").fadeIn();  
    });
        
        // Previous button click event
    $(".prev").click(function()
    {
        $('.slider .slide:nth-child('+ currentSlide +')').hide();
        currentSlide--;
         $('.slider .slide:nth-child('+ currentSlide +')').fadeIn();    
    });*/
    
});