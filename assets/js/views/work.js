var Work = Backbone.View.extend({
	el: '.work',
	initialize: function() {
    this.render();
    $('html, body').animate({ scrollTop: 0 }, 500);
	},
  render: function() {
    var view = new Carousel();
    this.$el.append(view.el);
    return this;
  },
});