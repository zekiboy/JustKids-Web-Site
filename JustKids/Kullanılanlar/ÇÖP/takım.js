

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
    $(".slider .slide:first").show();
    var currentSlide = 1;
    setInterval(function() 
    {
      var currentSlide = $(".active");
      var nextSlide = currentSlide.next();
      if (nextSlide.length === 0)
        {
            nextSlide = $(".slide").first();
        }
  
      currentSlide.removeClass("active");
      nextSlide.addClass("active");
    }, 2000); // __ saniye sonra otomatik olarak geçiş yapacak
 
        // Next button click event
    $(".next").click(function()
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
    });
    
});