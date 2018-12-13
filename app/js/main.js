$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<div class="custom-prev"><i class="fas fa-chevron-left"></i></div>',
      '<div class="custom-next"><i class="fas fa-chevron-right"></i></div>'
    ]
  });
});


// the following to the end is whats needed for the thumbnails.
$(document).ready(function () {
  // 1) ASSIGN EACH 'DOT' A NUMBER
  dotcount = 1;

  $('.owl-dot').each(function () {
    $(this).addClass('dotnumber' + dotcount);
    $(this).attr('data-info', dotcount);
    dotcount = dotcount + 1;
  });

  // 2) ASSIGN EACH 'SLIDE' A NUMBER
  slidecount = 1;

  $('.owl-item').not('.cloned').each(function () {
    $(this).addClass('slidenumber' + slidecount);
    slidecount = slidecount + 1;
  });

  // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
  $('.owl-dot').each(function () {

    grab = $(this).data('info');

    slidegrab = $('.slidenumber' + grab + ' img').attr('src');
    // console.log(slidegrab);

    $(this).prepend('<img src="' + slidegrab + '" class="custom-dots">');
    // $(this).addClass('custom-dots');
  });
});


$(document).ready(function () {

  // menu scroll
  $(window).scroll(function () {
    var widthWindow = $(window).width();

    if (widthWindow >= 768) {
      var $menu = $("#menu-scroll");
      if ($(this).scrollTop() > 100 && $menu.hasClass("menu-default")) {
        $menu.removeClass("menu-default").addClass("menu-fixed");
      } else if ($(this).scrollTop() <= 100 && $menu.hasClass("menu-fixed")) {
        $menu.removeClass("menu-fixed").addClass("menu-default");
      }
    } else {
      var $menuMob = $("#menu-scroll-mobile");
      if ($(this).scrollTop() > 0 && $menuMob.hasClass("menu-default")) {
        $menuMob.removeClass("menu-default").addClass("menu-fixed");
      } else if ($(this).scrollTop() <= 0 && $menuMob.hasClass("menu-fixed")) {
        $menuMob.removeClass("menu-fixed").addClass("menu-default");
      }
    }

  });

  // menu toggle mobile
  $('body').on('click', '#js-search-mobile-btn', function () {
    $('#js-header-search').toggle();
  });

  // menu footer mobile
  $('body').on('click', '.js-footer-list-chevron', function () {
    $(this).parent().find('.js-footer-list-toggle').slideToggle();
    var iconRotate = $(this).find('.icon-chevron');
    if (!iconRotate.hasClass('chevron-rotate')) {
      iconRotate.addClass('chevron-rotate');
    } else {
      iconRotate.removeClass('chevron-rotate');
    }
  });

});