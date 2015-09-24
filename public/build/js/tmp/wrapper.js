'use strict';

EVTURN.Rza = Backbone.View.extend({

  el: '#rza',
  child: null,
  render: function render() {
    this.$el.html(this.child.$el);

    return this;
  }
});