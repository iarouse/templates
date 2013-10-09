// Generated by CoffeeScript 1.6.1
(function() {

  $(function() {
    var $window, nav;
    $window = $(window);
    /* showbiz
    */

    $('#showcase_container').showbizpro({
      dragAndScroll: "on",
      visibleElementsArray: [4, 3, 2, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });
    $('.fancybox').fancybox();
    /* fixed header
    */

    $window.on('scroll', function() {
      if ($window.scrollTop() > 80) {
        return $('.header-wrapper').addClass('fixed');
      } else {
        return $('.header-wrapper').removeClass('fixed');
      }
    });
    /* smooth scroll
    */

    if ($.fn.smoothScroll) {
      nav = $('#nav');
      nav.find('a').smoothScroll({
        offset: -117
      });
    }
    /*  back to top
    */

    $('body').prepend('<i class="icon-arrow-up go-top"></i>');
    $window.on('scroll', function() {
      if ($(this).scrollTop() > 300) {
        return $('.icon-arrow-up').fadeIn(300);
      } else {
        return $('.icon-arrow-up').fadeOut(300);
      }
    });
    $('.icon-arrow-up').click(function() {
      return $('html, body').animate({
        scrollTop: 0
      }, 300);
    });
    /* color schemes
    */

    $('.colors.inline-list').children('li').hover(function() {
      return $(this).siblings().addClass('dim').end().removeClass('dim');
    }, function() {
      return $(this).siblings().andSelf().removeClass('dim');
    });
    $('.colors.inline-list').children('li').on('click', function() {
      var $this, color;
      $this = $(this);
      color = $this.attr('data-color');
      return $('link[href^="css/main"]').attr('href', 'css/main-' + color + '.css');
    });
    /* camera slider
    */

    if ($('#camera_bg').length && $.fn.camera) {
      jQuery('#camera_bg').camera({
        hover: false,
        imagePath: 'js/vendor/camera/images/',
        fx: 'stampede, mosaicmosaicReverse, mosaicRandom, mosaicSpiral, mosaicSpiralReverse',
        height: '560px;',
        loader: 'none',
        pagination: false,
        thumbnails: false,
        navigation: false,
        navigationHover: false,
        mobileNavHover: false,
        playPause: false,
        pauseOnClick: false,
        time: 5000
      });
    }
    /* form
    */

    if ($('.subscribe-form').length && $.fn.validate) {
      return $(".subscribe-form").validate();
    }
  });

}).call(this);
