var ev = ev || {};

ev.Rza = Backbone.View.extend({
  el: '#rza',
  child: null,
  render: function() {
    this.$el.html(this.child.$el);
    return this;
  },
});