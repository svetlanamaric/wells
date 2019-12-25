$(document).ready(function(){

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $('.body-box-bottom ul li .submit').click(function(){
        $('.modal').show();

        $('#slider2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });    

    });
    
    $('.close').click(function(){
        $(this).closest('.modal').hide();
    });
    

  });