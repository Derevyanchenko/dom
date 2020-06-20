$(document).ready(function() {

  // open mob menu

    $(".header__toggle").on("click", function(e) {
        e.preventDefault();
        $(".header-mob").slideToggle();
        $(this).toggleClass("header__toggle--active");
    });

  // banner slider

  $('.projects__slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      // appendDots: $(".banner__dots"),
      prevArrow: $(".banner-prev"),
      nextArrow: $(".banner-next"),
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            dots: false
          }
        }
      ]
    }); 

    $(".btn-js, .get-call").on("click", function (event) {
 
      //отменяем стандартную обработку нажатия по ссылке
 
      event.preventDefault();
 
 
 
      //забираем идентификатор бока с атрибута href
 
      var id  = $(this).attr('href'),
 
 
 
      //узнаем высоту от начала страницы до блока на который ссылается якорь
 
          top = $(id).offset().top;
 
       
 
      //анимируем переход на расстояние - top за 1500 мс
 
      $('body,html').animate({scrollTop: top}, 500);

    });


});