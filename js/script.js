// =========================slick slider js for categories part start======================

$('.food_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    centerMode: false,
    centerPadding: '0',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="prev fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="next fa-solid fa-angle-right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// =========================slick slider js for categories part end========================

// =========================slick slider js for best_team part start=======================

$('.team_slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    centerMode: false,
    centerPadding: '0',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// =========================slick slider js for best_team part end=========================
