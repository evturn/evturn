var Thumbnails = Backbone.View.extend({
  el: '#thumbnails',
  childEl: $('.thumbnail-items'),
  containerTemplate : _.template($('#thumbnail-container-template').html()),
  itemTemplate      : _.template($('#thumbnail-item-template').html()),
  initialize: function() {
    this.render();
    this.addItems();
  },
  render: function() {
    this.$el.html(this.containerTemplate());
    return this;
  },
  addItems: function() {
    this.collection.each(function(project) {
      this.childEl.append(this.itemTemplate(project.toJSON()));
    }.bind(this));
    return this;
  },
});