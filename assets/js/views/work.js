var Work = Backbone.View.extend({
	el: '.work',
  carouselTpl         : _.template($('#carousel-template').html()),
  infoTemplate        : _.template($('#project-info-template').html()),
  galleryTpl          : _.template($('#gallery-template').html()),
  thumbsTemplate      : _.template($('#thumbnails-template').html()),
  thumbsChildTemplate : _.template($('#thumbnail-child-template').html()),
	initialize: function() {
    this.carousel();
    $("html, body").animate({ scrollTop: 0 }, 500);
	},
  events: {
    'click .project-thumbnail' : 'select'
  },
  carousel: function(id) {
    var project = this.collection.get(id) || this.collection.get(1);
    this.$el.html(this.carouselTpl(project.toJSON()));
    $('#project-info').html(this.infoTemplate(project.toJSON()));
    this.gallery(project);
    this.$el.append(this.thumbsTemplate());
		$('.carousel').carousel({interval: 3500});
    this.thumbnails();
  },
  thumbnails: function() {
    portfolio.each(function(app) {
      $('.thumbnail-items').append(this.thumbsChildTemplate(app.toJSON()));
    }.bind(this));
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