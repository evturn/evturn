var PortfolioView = Backbone.View.extend({
	el: '#development',
  carouselTpl : _.template($('#carousel-template').html()),
  navTpl      : _.template($('#carousel-nav-template').html()),
  infoTemplate: _.template($('#project-info-template').html()),
  stackTemplate: _.template($('#project-stack-template').html()),
  siteLinkTpl : _.template($('#site-link-template').html()),
  galleryTpl  : _.template($('#gallery-template').html()),
	initialize: function() {
		this.nav();
    this.carousel();
	},
	events: {
		'click .icon' : 'switch'
	},
  nav: function() {
    this.collection.each(function(model) {
      $('#carousel-icons').append(this.navTpl(model.toJSON()));
    }.bind(this));
    $('i').first().removeClass('fa-circle-thin');
    $('i').first().addClass('fa-circle');
  },
  switch: function(e) {
    e.preventDefault();
    var id      = $(e.currentTarget).data('id');
    var model   = this.collection.get(id);
    var next    = $(e.currentTarget).find('i');
    var current = $('.fa-circle');
    var prev    = $('#carousel-icons').find(current);
    prev.removeClass('fa-circle');
    prev.addClass('fa-circle-thin');
    next.removeClass('fa-circle-thin');
    next.addClass('fa-circle');
    this.carousel(model);
  },
  carousel: function(model) {
    var project = model || this.collection.get(1);
    $('#carousel-slide').html(this.carouselTpl(project.toJSON()));
    $('#project-info').html(this.infoTemplate(project.toJSON()));
    $('.site').empty(); 
    if (project.has('url')) {
      $('.site').append(this.siteLinkTpl(project.toJSON()));
    }
      
    this.gallery(project);
    this.stack(project);
    this.slide();
  },
	slide: function() {
		$('.carousel').carousel({
			interval: 3500
		});
	},
  gallery: function(model) {
    var gallery = model.get('items');
    for (var i = 0; i < gallery.length; i++) {
    $('.carousel-inner').append(this.galleryTpl(gallery[i]));
    }
  },
  stack: function(model) {
    var stack = model.get('stack');
    for (var i = 0; i < stack.length; i++) {
    $('#project-stack').append(this.stackTemplate(stack[i]));
    }
  },
});