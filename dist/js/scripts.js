var EVTURN = {};

EVTURN.Link = Backbone.Model.extend({});

EVTURN.Project = Backbone.Model.extend({});

EVTURN.Technology = Backbone.Model.extend({});

EVTURN.Projects = Backbone.Collection.extend({
  model: EVTURN.Project,
});

EVTURN.Links = Backbone.Collection.extend({
  model: EVTURN.Link,
});

EVTURN.Technologies = Backbone.Collection.extend({
  model: EVTURN.Technology,
});
EVTURN.AboutView = Backbone.View.extend({
  el: '.about',
  viewContainer: _.template($('#technologies-container-template').html()),
  itemContainer: _.template($('#technology-item-template').html()),
  initialize: function() {
    this.collection = EVTURN.fn.tech();
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    EVTURN.fn.appendModels('technology-items', this.collection, this.itemContainer);
    EVTURN.animations.statCount();
    return this;
  },

});
EVTURN.ContactView = Backbone.View.extend({
  el: '.contact',
  viewContainer: _.template($('#links-container-template').html()),
  itemContainer: _.template($('#link-item-template').html()),
  initialize: function() {
    this.collection = EVTURN.fn.links();
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    EVTURN.fn.appendModels('contact-links', this.collection, this.itemContainer);
  },
});
EVTURN.IndexView = Backbone.View.extend({
  el: '.index',
  viewContainer: _.template($('#index-container-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.viewContainer());
    var tn = new EVTURN.Thumbnails('index');
    return this;
  },
});
EVTURN.Carousel = Backbone.View.extend({
  el: '.work',
  viewContainer   : _.template($('#carousel-container-template').html()),
  itemContainer   : _.template($('#carousel-item-template').html()),
  itemDescription : _.template($('#carousel-panel-template').html()),
  itemPreloader   : _.template($('#carousel-preloader-template').html()),
  initialize: function() {
    this.render();
    this.setChildViews();
  },
  render: function() {
    this.$el.html(this.viewContainer(this.model.toJSON()));
    EVTURN.animations.carouselPreloader(this.itemPreloader);
    return this;
  },
  setChildViews: function() {
    $('.carousel-panel').html(this.itemDescription(this.model.toJSON()));
    var images = this.model.get('items');
    for (var i = 0; i < images.length; i++) {
      $('.carousel-inner').append(this.itemContainer(images[i]));
    }
    var tn = new EVTURN.Thumbnails('work');
    EVTURN.animations.scrollUp();
    return this;
  },
});
EVTURN.Rza = Backbone.View.extend({
  el: '#rza',
  child: null,
  render: function() {
    this.$el.html(this.child.$el);
    return this;
  },
});
EVTURN.Thumbnails = Backbone.View.extend({
  el: '.thumbnail-items',
  viewContainer: _.template($('#thumbnails-container-template').html()),
  itemContainer: _.template($('#thumbnail-item-template').html()),
  initialize: function(elem) {
    this.collection = EVTURN.fn.work();
    this.render(elem);
  },
  events: {
    'click .thumbnail-item' : 'scrollUp'
  },
  render: function(elem) {
    this.$el.empty();
    $('.' + elem).append(this.viewContainer());
    EVTURN.fn.appendModels('thumbnail-items', this.collection, this.itemContainer);
  },
  scrollUp: function() {
    EVTURN.animations.scrollUp();
  },
});
EVTURN.Router = Backbone.Router.extend({
  wrapper      : null,
  indexView    : null,
  workView     : null,
  aboutView    : null,
  contactView  : null,
  routes: {
    ''         : 'index',
    'work/*'   : 'project',
    'work/:id' : 'project',
    'about'    : 'about',
    'contact'  : 'contact'
  },
  initialize: function() {
    this.wrapper = new EVTURN.Rza();
  },
  index: function() {
    EVTURN.fn.build('index');
    if (this.indexView === null) {
      this.indexView = new EVTURN.IndexView();
    }
    this.wrapper.child = this.indexView;
    this.wrapper.render();

  },
  work: function(model) {
    EVTURN.fn.build('work');
    if (this.workView === null) {
      this.workView = new EVTURN.Carousel({model: model});
      this.wrapper.child = this.workView;
    } else {
      var view = new EVTURN.Carousel({model: model});
      this.wrapper.child = view;
    }
    this.wrapper.render();
  },
  about: function() {
    EVTURN.fn.build('about');
    if (this.aboutView === null) {
      this.aboutView = new EVTURN.AboutView();
    }
    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function() {
    EVTURN.fn.build('contact');
    if (this.contactView === null) {
      this.contactView = new EVTURN.ContactView();
    }
    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project: function(id) {
    var collection = EVTURN.fn.work();
    var model = collection.get(id) || collection.get(1);
    this.work(model);
  },
});
EVTURN.animations = {
  init: function() {
    this.preloader();
  },
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
      EVTURN.animations.count($(this));
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
    $('.carousel-preloader').delay(600).fadeOut('slow');
  }
};
EVTURN.data = {
  technologies: [
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
  ],
  projects: [
    {
      name: 'Music Insider',
      description: "Music Insider is a Los Angeles based podcast in which this website hosts along with a blog.",
      id: 1,
      url: 'http://musicinsider.co',
      thumbnail: "assets/img/mi-tn.png",
      lead: "assets/img/mi-1.png",
      items: [
        {item: 'assets/img/mi-2.png'},
        {item: 'assets/img/mi-3.png'},
        {item: 'assets/img/mi-4.png'},
        {item: 'assets/img/mi-5.png'}
      ],
      featured: true
    },
    {
      name: 'Marshallz Blog',
      description: "A blog run by a fictitious nine year old. A new post is authored every hour in addition to sending out <a href='http://twitter.com/marshallzBlog' target='_blank'>sporatic unrelated tweets</a>.",
      id: 2,
      url: 'http://marshallz.com',
      thumbnail: "assets/img/marshallz-tn.png",
      lead: "assets/img/marshallz-1.png",
      items: [
        {item: 'assets/img/marshallz-2.png'},
        {item: 'assets/img/marshallz-6.png'},
        {item: 'assets/img/marshallz-3.jpg'},
        {item: 'assets/img/marshallz-5.png'},
        {item: 'assets/img/marshallz-4.jpg'}
      ],
      featured: true
    },
    {
      name: 'Drive Publishing',
      description: "Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.",
      id: 4,
      url: 'http://drivepublishing.com',
      thumbnail: "assets/img/drive-tn.png",
      lead: 'assets/img/drive-1.png',
      items: [
        {item: 'assets/img/drive-2.png'},
        {item: 'assets/img/drive-3.png'}
      ],
      featured: true
    },
    {
      name: 'Ramen Buffet',
      description: "Ramen Buffet manages a multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.",
      id: 6,
      url: 'http://ramenbuffet.com',
      thumbnail: "assets/img/ramen-tn.png",
      lead: 'assets/img/ramen-1.png',
      items: [
        {item: "assets/img/ramen-2.png"}
      ],
      featured: true
    },
    {
      name: 'Alculator',
      description: "Alculator is a BAC calculator. User can add items to their tab from a bar with an inventory of standard cocktails, wine by the glass or bottle, and beer. The results include the user's blood alcohol level along with a description of that particular level of intoxication.",
      id: 5,
      thumbnail: "assets/img/alculator-tn.png",
      lead: "assets/img/alculator-3.png",
      items: [
        {item: "assets/img/alculator-2.png"},
        {item: "assets/img/alculator-1.png"},
        {item: "assets/img/alculator-4.png"}
      ],
      featured: true
    },
    {
      name: 'Pique',
      description: "Pique is an app for people who are interested in networking, collaborating, and working on projects.",
      id: 3,
      url: 'http://piqueapp.github.io',
      thumbnail: "assets/img/pique-tn.png",
      lead: "assets/img/pique-1.jpg",
      items: [
        {item: 'assets/img/pique-2.png'},
        {item: 'assets/img/pique-3.png'},
        {item: 'assets/img/pique-4.png'}
      ],
      featured: true
    },
    {
      name: 'Hangman',
      description: "A gory and cartoonish version of the classic Hangman game. An API is used to access a library of words which helps to deliver a more unique game play.",
      id: 7,
      thumbnail: "assets/img/hangman-tn.png",
      lead: "assets/img/hangman-1.jpg",
      items: [
        {item: "assets/img/hangman-2.jpg"}
      ],
      featured: true
    },
    {
      name: 'Tic Tac Toe',
      description: "Using photoshop, opponent 'X' displays a random image of two crossing eclairs on each game play, while opponent 'O' is represented with donuts",
      id: 8,
      thumbnail: "assets/img/ttt-tn.png",
      lead: 'assets/img/ttt-1.jpg',
      items: [
        {item: 'assets/img/ttt-2.jpg'}
      ],
      featured: false
    },
    {
      name: 'WhereTO',
      description: 'Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.',
      id: 9,
      thumbnail: "assets/img/whereto-tn.png",
      lead: 'assets/img/whereto-2.png',
      items: [{item: 'assets/img/whereto-1.png'}],
      featured: true
    }
  ],
  links: [
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
  ]
};
EVTURN.fn = {
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
    var a = EVTURN.fn.featured(EVTURN.data.projects);
    return new EVTURN.Projects(a);
  },
  links: function() {
    var a = EVTURN.fn.featured(EVTURN.data.links);
    return new EVTURN.Links(a);
  },
  tech: function() {
    var a = EVTURN.fn.featured(EVTURN.data.technologies);
    return new EVTURN.Technologies(a);
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
    EVTURN.fn.navActive(string);
    EVTURN.fn.createElement(string);
  },
};
var wow = new WOW().init();
EVTURN.animations.init();
var router = new EVTURN.Router();
Backbone.history.start();