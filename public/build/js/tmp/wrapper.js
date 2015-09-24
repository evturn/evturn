'use strict';

module.exports = Backbone.View.extend({
  el: '#rza',
  child: null,
  render: function render() {
    this.$el.html(this.child.$el);

    return this;
  }
});