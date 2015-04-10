var PortfolioView = Backbone.View.extend({
	el: '#portfolio',
  carouselTpl : _.template($('#carousel-template').html()),
  navTpl      : _.template($('#carousel-nav-template').html()),
  siteLinkTpl : _.template($('#site-link-template').html()),
  galleryTpl  : _.template($('#gallery-template').html()),
	initialize: function() {
		this.nav();
    this.carousel();
	},
	events: {
		'click .carousel-icon' : 'switch'
	},
  nav: function() {
    this.collection.each(function(model) {
      $('#carousel-nav').append(this.navTpl(model.toJSON()));
    }.bind(this));
    $('i').first().addClass('fa-dot-circle-o');
  },
  switch: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    var icon = $(e.currentTarget).find('i');
    var current = $('.fa-dot-circle-o');
    var last = $('#carousel-nav').find(current);
    last.removeClass('fa-dot-circle-o');
    last.addClass('fa-circle-o');
    icon.removeClass('fa-circle-o');
    icon.addClass('fa-dot-circle-o');
    var project = this.collection.get(id);
    this.carousel(project);
  },
  carousel: function(model) {
    var project = model || this.collection.get(1);
    $('#carousel-slide').html(this.carouselTpl(project.toJSON()));
    $('.summary').html(project.get('summary'));
    $('.specs').html(project.get('stack'));
    $('.site').empty(); 
    if (project.has('url')) {
      $('.site').append(this.siteLinkTpl(project.toJSON()));
    }
      
    this.gallery(project);
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
      var item = gallery[i];
    $('.carousel-inner').append(this.galleryTpl(item));
    }
  },
});