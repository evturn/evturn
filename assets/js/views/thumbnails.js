var Thumbnail = Backbone.View.extend({
  itemTemplate: _.template($('#thumbnail-item-template').html()),
  initialize: function() {
    this.render();
  },
  events: {
    'click .project-thumbnail' : 'select'
  },
  render: function() {
    this.$el.html(this.itemTemplate(this.model.toJSON()));
    return this;
  },
  select: function() {
    var carousel = new Carousel({model: this.model});
  },
});

var Thumbnails = Backbone.View.extend({
  el: '#thumbnails',
  containerTemplate: _.template($('#thumbnail-container-template').html()),
  initialize: function() {
    this.$el.html(this.containerTemplate());
    this.addItems();
  },
  addItem: function(model) {
    var view = new Thumbnail({model: model});
    $('.thumbnail-items').append(view.el);
    return this;
  },
  addItems: function() {
    projects.each(function(project) {
      this.addItem(project);
    }.bind(this));
    return this;
  },
});