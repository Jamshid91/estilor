const block7 = new Swiper('.swiper-block7', {
    loop: true,
    navigation: {
      nextEl: '.block7-next',
      prevEl: '.block7-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 12,
        },
        576: {
          slidesPerView: 2.1,
          spaceBetween: 16,
        },
        767: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1300: {
            spaceBetween: 24,
            slidesPerView: 4,
        },
  }
  });