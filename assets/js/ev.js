var ev = ev || {};

ev = {
  init: function() {
    ev.animations.preloader();
    var wow = new WOW().init();
    var router = new ev.Router();
    Backbone.history.start();
  },
  featured: function(array) {
    var p = array;
    var a = [];
    for (var i = 0; i < p.length; i++) {
      var m = p[i];
      if (m.featured === true ) {
        a.push(m);
      }
    }
    a.reverse();
    return a;
  },
  work: function() {
    var a = this.featured(projObj);
    return new Projects(a);
  },
  links: function() {
    var a = this.featured(linksObj);
    return new Links(a);
  },
  tech: function() {
    var a = this.featured(techsObj);
    return new Technologies(a);
  },
  appendModels: function(className, collection, template) {
    $elem = $('.' + className);
    for (var i = collection.length - 1; i >= 0; i--) {
      $elem.append(template(collection.models[i].toJSON()));  
    }
  },
  createElement: function(string) {
    $('.' + string).remove();
    var element = '<div class="' + string + '"></div>';
    $(element).insertAfter($('#rza'));
  },
  navActive: function(string) {
    $('.nav-link').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },
  build: function(string) {
    this.navActive(string);
    this.createElement(string);
  },
  animations: {
    preloader: function() {
      $(window).load(function() {
        $('#preloader').delay(500).fadeOut();
        $('.preloader').delay(600).fadeOut('slow');
      });
    },
    statCount: function() {
      $('.stat-count').each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        ev.animations.count($(this));
      });
    },
    count: function($this){
      var current = parseInt($this.html(), 10);
      current = current + 50;
      $this.html(++current);
      if (current > $this.data('count')) {
        $this.html($this.data('count'));
      } else {    
        setTimeout(function() {
          ev.animations.count($this);
          }, 50);
      }
    }
  }
};