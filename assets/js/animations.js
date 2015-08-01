EVTURN.animations = {

  init: function() {
    this.preloader();

  },

  preloader: function() {

    $(window).load(function() {
      let $container = $('#preloader');
      let $image = $('.preloader');

      $container.delay(500).fadeOut();
      $image.delay(600).fadeOut(600);
    });

  },

  statCount: function() {
    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      EVTURN.animations.count($(this));
    });

  },
  count: function($this){
    let current = parseInt($this.html(), 10);

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
  },

  scrollUp: function() {
    $('html, body').animate({scrollTop: 0 }, 500);

  },

  carouselPreloader: function(template) {
    $('.carousel-image-container').append(template());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);

  },

};