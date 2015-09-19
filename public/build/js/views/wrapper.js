EVTURN.Rza = Backbone.View.extend({

  el: '#rza',
  child: null,
  render() {
    this.$el.html(this.child.$el);

    return this;
  }
});