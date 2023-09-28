

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




function egitim_detay()
{
    open("egitimler.html")
}
function kurs_1()
{
    document.getElementById("k1").innerHTML="yardımcı olan, özgüveni ve katılımcılığı "
    document.getElementById("k1_1").innerHTML="artıran; her yaşa hitap eden bir spordur.";
}
function kurs_2()
{
    document.getElementById("k2").innerHTML="beceriler, planlama becerisi, pes etmemek, takım"
    document.getElementById("k2_1").innerHTML="çalışması,analitik düşünme becerilerini geliştirir.";
}
function kurs_3()
{
    document.getElementById("k3").innerHTML="düşünürsek hazırlıksız yakalandığımız anların ne "
    document.getElementById("k3_1").innerHTML="kadar can sıkıcı olduğunu hatırlayabiliriz :)";
}
function kurs_4()
{
    document.getElementById("k4").innerHTML="arttırır ve kişiye farklı bakış açıları kazandırır, "
    
}
function kurs_5()
{
    document.getElementById("k5").innerHTML="eleştirel düşünme ve problem çözme becerilerini güçlendirir."
    document.getElementById("k5_1").innerHTML="artıran; her yaşa hitap eden bir spordur.";
}
function kurs_6()
{
    document.getElementById("k6").innerHTML="yaratıcılıklarını ön plana alarak basit gözüken malzemeler ile "
    document.getElementById("k6_1").innerHTML="benzersiz sanat eserleri ürettikleri bir programdır.";
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