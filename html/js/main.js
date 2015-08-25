var a=null,c=$(window),d=false;
            $(window).scroll(function(){
              var e=c.scrollTop()>=63;a||(a=$("#fixed-example2"));
              if(!d&&e){
                a.addClass("fixed-test");d=true
              }
              else if(d&&!e){
                a.removeClass("fixed-test");d=false
              }
            });
$(document).ready(function(){
        	$('.btn-close-product').click(function(eventObject){
				$('.products').slideUp();
                eventObject.preventDefault(); 
             });
        	$('.backet-open').click(function(eventObject){
				$('.products').slideDown();
                eventObject.preventDefault(); 
             });
			 
			 $('.open-popup1').click(function(eventObject){
				$('.bg-popup').css('display','block');
				$('.popup1').css('display','block');
             	eventObject.preventDefault(); 
              });
			 $('.open-popup2').click(function(eventObject){
				$('.bg-popup').css('display','block');
				$('.popup2').css('display','block');
             	eventObject.preventDefault(); 
              });
			 $('.open-popup3').click(function(eventObject){
				$('.bg-popup').css('display','block');
				$('.popup3').css('display','block');
             	eventObject.preventDefault(); 
              });
			 $('.open-popup4').click(function(eventObject){
				$('.bg-popup').css('display','block');
				$('.popup4').css('display','block');
             	eventObject.preventDefault(); 
              });
       $('.open-popup5').click(function(eventObject){
        $('.bg-popup').css('display','block');
        $('.popup5').css('display','block');
              eventObject.preventDefault(); 
              });
			  
			  $('.btn-close').click(function(eventObject){
				$('.bg-popup').css('display','none');
				$('.popup').css('display','none');
             	eventObject.preventDefault(); 
              });

        $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});			