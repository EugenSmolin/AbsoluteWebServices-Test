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

$('body').on('click', '#js-search-mobile-btn', function() {
  $('#js-header-search').toggle();
});