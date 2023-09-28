

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
    var count = $('.slider_item').length;
    
    $('.slider_item').hide();
    $('.slider_item').eq(0).show();
    
    $('#prev').click(function () {
        $('.slider_item').eq(current).fadeOut(function () {
            $(this).removeClass('active');
            current = (current == 0) ? count - 1 : current - 1;
            $('.slider_item').eq(current).addClass('active').fadeIn();
        });
    });
    
    $('#next').click(function () {
        $('.slider_item').eq(current).fadeOut(function () {
            $(this).removeClass('active');
            current = (current + 1) % count;
            $('.slider_item').eq(current).addClass('active').fadeIn();
        });
    });
    
    setInterval(function() {    
        $('#next').click();
    }, 3000);
    
});