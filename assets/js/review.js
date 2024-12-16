const block14 = new Swiper('.swiper-block14', {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.block14-next',
        prevEl: '.block14-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1300: {
            spaceBetween: 24,
            slidesPerView: 4,
        },
  }
  });