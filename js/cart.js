$(document).ready(function () {
   
    // 漢堡icon 收合
    $('.bt-toggle').click(function (event) { 
        event.preventDefault();
        $('.menu').toggleClass('active');
        $('.menu').slideToggle();

    });

    // 遮title字黑板出現
    $('.bt-toggle')
    .click(function() {
        $('.menu-screen').fadeToggle(500);
     })


    $(window).resize(function () {
        const width = $(window).width();
        if (width > "375") { // 視窗的寬度大於 1024px ( 電腦斷點 ) 
          $(".menu").removeAttr("style"); 
          //強制把 slideToggle 加上的 style 屬性清除

          $(".menu-screen").removeAttr("style"); 
        }
      });

// list-cart 愛心按鈕
$('.unlike').click(function() {
       $('.like').fadeIn(500);
      })
       $('.like').click(function() {
       $('.like').fadeOut(500);
      })


});