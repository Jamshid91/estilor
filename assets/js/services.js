const block3 = new Swiper('.swiper-block3', {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.block3-next',
        prevEl: '.block3-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2.1,
          spaceBetween: 16,
        },
        800: {
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