var ev = ev || {};

var Rza = Backbone.View.extend({
  el: '#rza',
  child: null,
  render: function() {
    this.$el.empty();
    this.$el.append(this.child.$el);
    return this;
  },
});