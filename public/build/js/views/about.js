EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  viewContainer : _.template($('#technologies-container-template').html()),
  itemContainer : _.template($('#technology-item-template').html()),
  statItem      : _.template($('#stat-item-template').html()),
  bioItem       : _.template($('#bio-paragraph-template').html()),

  initialize() {
    this.collection = EVTURN.get('tech');

    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },

  render() {
    let selector = this.$el,
        template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

  appendStats() {
    let selector = '.statistics.stat-items',
        objects  = EVTURN._stats,
        template = this.statItem;

    this.appendObjects(selector, objects, template);

    return this;
  },

  appendTechnologies() {
    let selector   = '.technology-items',
        collection = this.collection,
        template   = this.itemContainer;

    this.appendModels(selector, collection, template);

    return this;
  },

  appendBio() {
    let selector = '.paragraphs',
        array    = EVTURN._bio,
        template = this.bioItem;

    this.appendArray(selector, array, template);

    return this;
  },

  animateStats() {
    let self = this;

    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      self.count($(this));
    });

  },

  count($this){
    let self = this,
        current = parseInt($this.html(), 10);

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