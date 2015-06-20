var ev = ev || {};

ev.Rza = Backbone.View.extend({
  el: '#rza',
  child: null,
  work: function() {
    $('.work').remove();
    var element = '<div class="work"></div>';
    $(element).insertAfter(this.$el);
  },
  render: function() {
    this.$el.html(this.child.$el);
    return this;
  },
});