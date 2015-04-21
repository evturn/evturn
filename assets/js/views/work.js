var Work = Backbone.View.extend({
	el: '.work',
  carouselTpl : _.template($('#carousel-template').html()),
  infoTemplate: _.template($('#project-info-template').html()),
  stackTemplate: _.template($('#project-stack-template').html()),
  siteLinkTpl : _.template($('#project-link-template').html()),
  galleryTpl  : _.template($('#gallery-template').html()),
	initialize: function() {
    this.carousel();
	},
  carousel: function(id) {
    var project = this.collection.get(id) || this.collection.get(1);
    $('.work').html(this.carouselTpl(project.toJSON()));
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