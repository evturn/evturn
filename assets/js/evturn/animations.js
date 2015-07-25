class animations extends EVTURN {

  init() {
    this.preloader();
  }

  preloader() {

    $(window).load(function() {
      var $container = $('#preloader');
      var $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });

  }

  statCount() {
    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      EVTURN.animations.count($(this));
    });

  }

  count($this) {
    var current = parseInt($this.html(), 10);

    current = current + 50;
    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));

    }
    else {
      setTimeout(function() {
        EVTURN.animations.count($this);
        }, 50);

    }
  }

  scrollUp() {
    $('html, body').animate({scrollTop: 0 }, 500);

  }

  carouselPreloader(template) {
    $('.carousel-image-container').append(template());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);

  }

}