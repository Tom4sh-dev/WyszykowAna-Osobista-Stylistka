// $(document).ready(function () {
//     $('.reviews__textbox').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         arrows: false,
//         mobileFirst: true,
//         responsive: [{
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         }],

//     });
// })


$('.reviews__textbox').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 992,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
  }],
  });

document.querySelector(".slick-prev").innerHTML = '<i class="fa-sharp fa-solid fa-angle-left"></i><i class="fa-sharp fa-solid fa-angle-left"></i>';
document.querySelector(".slick-next").innerHTML = '<i class="fa-sharp fa-solid fa-angle-right"></i><i class="fa-sharp fa-solid fa-angle-right"></i>';