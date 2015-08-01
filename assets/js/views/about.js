EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  viewContainer : _.template($('#technologies-container-template').html()),
  itemContainer : _.template($('#technology-item-template').html()),
  statItem      : _.template($('#stat-item-template').html()),
  bioItem       : _.template($('#bio-paragraph-template').html()),

  initialize() {
    this.collection = this.get('technologies');

    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },

  render() {
    let selector = this.$el;
    let template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendStats() {
    let selector = '.statistics.stat-items';
    let objects  = EVTURN._stats;
    let template = this.statItem;

    this.appendObjectsArray(selector, objects, template);

    return this;
  },

  appendTechnologies() {
    let selector   = '.technology-items';
    let collection = this.collection;
    let template   = this.itemContainer;

    this.appendModels(selector, collection, template);

    return this;
  },

  appendBio() {
    let selector = '.paragraphs';
    let array    = EVTURN._bio;
    let template = this.bioItem;

    this.appendArray(selector, array, template);

    return this;
  },

  animateStats() {
    var self = this;
    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      self.count($(this));
    });

  },

  count($this){
    let current = parseInt($this.html(), 10);

    current = current + 50;
    $this.html(++current);

    if (current > $this.data('count')) {
      $this.html($this.data('count'));

    }
    else {
      setTimeout(() => {

        this.count($this);

      }, 50);
    }
  },

});