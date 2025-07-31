// テキストアニメーション（遅延付き）
$(function () {
  setTimeout(() => {
    $('.txt').addClass('animate');
  }, 100);
});

// スクロール時のアニメーション
$(function () {
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.fade-up, .fade-down, .fadein-blur').each(function () {
      const position = $(this).offset().top;
      if (scroll > position - windowHeight + 180) {
        if ($(this).hasClass('fade-up')) {
          $(this).addClass('fadein-up-active');
        }
        if ($(this).hasClass('fade-down')) {
          $(this).addClass('fadein-down-active');
        }
        if ($(this).hasClass('fadein-blur')) {
          $(this).addClass('fadein-blur-active');
        }
      }
    });
  });
});

// 無限ループの Swiper（実績スライダーなど）
const swiper1 = new Swiper('.swiper-l', {
  loop: true,
  slidesPerView: 3,
  speed: 10000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
});

// 1枚ずつ横スライド（レビューなど）
const swiper2 = new Swiper('.reviews-wrap .swiper-l', {
  loop: true,
  slidesPerView: 1.1,
  speed: 8000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
});

// 声セクションのスライダー
const swiper3 = new Swiper('.voices .swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Slick 無限スライダー
$(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    slidesToShow: 4,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

$(function () {
  const $btn = $('.floating-btn');
  const troubleTop = $('.float-start').offset().top;

  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll + windowHeight > troubleTop + 100) {
      $btn.addClass('visible');
    } else {
      $btn.removeClass('visible');
    }
  });

  const floatEnd = document.querySelector('.float-end');
  if (floatEnd) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $btn.addClass('hide');
        } else {
          $btn.removeClass('hide');
        }
      });
    });
    observer.observe(floatEnd);
  }
});