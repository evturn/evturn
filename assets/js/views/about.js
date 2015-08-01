EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  viewContainer : _.template($('#technologies-container-template').html()),
  itemContainer : _.template($('#technology-item-template').html()),
  statItem      : _.template($('#stat-item-template').html()),
  bioItem       : _.template($('#bio-paragraph-template').html()),

  initialize() {
    this.collection = this.get('technologies');
    this.render();
  },

  render() {
    this.setView(this.$el, this.viewContainer);
    this.appendModels('.technology-items', this.collection, this.itemContainer);
    this.appendObjectsArray('.statistics.stat-items', EVTURN.data.stats, this.statItem);
    this.appendArray('.paragraphs', EVTURN.data.bio, this.bioItem);
    this.statCount();

    return this;
  },

  statCount() {
    var self = this;
    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      self.count($(this));
    });

  },

  count($this){
    var self = this;
    let current = parseInt($this.html(), 10);

    current = current + 50;
    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));

    }
    else {
      setTimeout(function() {
        self.count($this);
        }, 50);

    }
  },

});