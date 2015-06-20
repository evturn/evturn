var Carousel = Backbone.View.extend({
  el: '#carousel',
  containerTemplate   : _.template($('#carousel-template').html()),
  descriptionTemplate : _.template($('#project-info-template').html()),
  imagesTemplate      : _.template($('#gallery-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    var model = this.model || projects.get(1);
    this.$el.html(this.containerTemplate(model.toJSON()));
    $('.project-info-container').html(this.descriptionTemplate(model.toJSON()));
    this.gallery(model);
    $('.carousel').carousel({interval: 3500});
    this.thumbnails();
  },
  thumbnails: function() {
    var view = new Thumbnails({collection: projects});
    this.$el.append(view.el);
  },
  gallery: function(model) {
    var gallery = model.get('items');
    for (var i = 0; i < gallery.length; i++) {
    $('.carousel-inner').append(this.imagesTemplate(gallery[i]));
    }
  },

});