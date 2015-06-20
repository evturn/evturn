var Work = Backbone.View.extend({
	el: '.work',
  carouselTpl         : _.template($('#carousel-template').html()),
  infoTemplate        : _.template($('#project-info-template').html()),
  galleryTpl          : _.template($('#gallery-template').html()),
	initialize: function() {
    this.carousel();
    this.thumbnails();
    $('html, body').animate({ scrollTop: 0 }, 500);
	},
  events: {
    'click .project-thumbnail' : 'select'
  },
  carousel: function(id) {
    var project = this.collection.get(id) || this.collection.get(1);
    this.$el.html(this.carouselTpl(project.toJSON()));
    $('.project-info-container').html(this.infoTemplate(project.toJSON()));
    this.gallery(project);
		$('.carousel').carousel({interval: 3500});
  },
  thumbnails: function() {
    $('.projects').html(this.thumbsTemplate());
    projects.each(function(app) {
      $('.thumbnail-items').append(this.thumbsChildTemplate(app.toJSON()));
    }.bind(this));
    this.$el.append($('.projects'));
  },
  gallery: function(model) {
    var gallery = model.get('items');
    for (var i = 0; i < gallery.length; i++) {
    $('.carousel-inner').append(this.galleryTpl(gallery[i]));
    }
  },
  select: function(e) {
    var id = $(e.currentTarget).data('id');
    this.carousel(id);
    $("html, body").animate({ scrollTop: 0 }, 500);
  },
});