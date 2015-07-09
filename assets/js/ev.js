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
    var a = this.featured(ev.data.links);
    return new Links(a);
  },
  tech: function() {
    var a = ev.featured(ev.data.technologies);
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
  },
  data: {
    links: (function() {
      var array = [
        {
          name: 'email',
          url: 'mailto:evturn@gmail.com',
          icon: 'fa fa-envelope',
          featured: true
        },
        {
          name: 'github',
          url: 'http://github.com/evturn',
          icon: 'fa fa-github-square',
          featured: true
        },
        {
          name: 'linkedin',
          url: 'http://www.linkedin.com/in/evturn/',
          icon: 'fa fa-linkedin-square',
          featured: true
        },
        {
          name: 'general assembly',
          url: 'https://profiles.generalassemb.ly/ev',
          icon: 'fa fa-certificate',
          featured: true
        },
        {
          name: 'twitter',
          url: 'http://twitter.com/evturn',
          icon: 'fa fa-twitter',
          featured: true
        },
        {
          name: 'skype: @evturn',
          url: 'javaScript:void(0);', // jshint ignore:line
          icon: 'fa fa-skype',
          featured: true
        }
      ];
      return array;
    })(),
    technologies: (function() {
      var array = [
        {
          technology: 'Node.js',
          icon: 'devicon-nodejs-plain-wordmark',
          color: 'devicon-nodejs-plain-wordmark colored',
          id: 1,
          featured: true
        },
        {
          technology: 'AngularJS',
          icon: 'devicon-angularjs-plain',
          color: 'devicon-angularjs-plain colored',
          id: 2,
          featured: false
        },
        {
          technology: 'Backbone.js',
          icon: 'devicon-backbonejs-plain',
          color: 'devicon-backbonejs-plain colored',
          id: 3,
          featured: true
        },
        {
          technology: 'jQuery',
          icon: 'devicon-jquery-plain',
          color: 'devicon-jquery-plain colored',
          id: 4,
          featured: false
        },

        {
          technology: 'Bootstrap',
          icon: 'devicon-bootstrap-plain',
          color: 'devicon-bootstrap-plain colored',
          id: 5,
          featured: true
        },
        {
          technology: 'git',
          icon: 'devicon-git-plain',
          color: 'devicon-git-plain colored',
          id: 6,
          featured: true
        },
        {
          technology: 'Photoshop',
          icon: 'devicon-photoshop-plain',
          color: 'devicon-photoshop-plain colored',
          id: 7,
          featured: true
        },
        {
          technology: 'Ubuntu',
          icon: 'devicon-ubuntu-plain',
          color: 'devicon-ubuntu-plain colored',
          id: 8,
          featured: true
        },
        {
          technology: 'Firebase',
          icon: 'fa fa-database fa-2x',
          color: this.icon,
          id: 9,
          featured: false
        },
        {
          technology: 'MongoDB',
          icon: 'devicon-mongodb-plain',
          color: 'devicon-mongodb-plain colored',
          id: 10,
          featured: true
        },
        {
          technology: 'Underscore.js',
          icon: 'fa fa-minus fa-2x',
          color: this.icon,
          id: 11,
          featured: false
        },
        {
          technology: 'Express.js',
          icon: 'devicon-nodejs-plain',
          color: 'devicon-nodejs-plain colored',
          id: 12,
          featured: true
        },
        {
          technology: 'Sass',
          icon: 'devicon-sass-original',
          color: 'devicon-sass-original colored',
          id: 13,
          featured: true
        },
        {
          technology: 'Gulp.js',
          icon: 'devicon-gulp-plain',
          color: 'devicon-gulp-plain',
          id: 14,
          featured: true
        },
        {
          technology: 'Less',
          icon: 'devicon-less-plain-wordmark',
          color: 'devicon-less-plain-wordmark',
          id: 15,
          featured: true
        }
      ];
      return array;
    })()
  }
};