'use strict';

EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  initialize: function initialize() {
    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },
  render: function render() {
    this.$el.html(EVTURN.navbarTemplate());
    this.$el.append(EVTURN.techViewTemplate());

    return this;
  },
  appendStats: function appendStats() {
    var $sel = $('.statistics.stat-items'),
        collection = EVTURN.get('stats');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(EVTURN.statItemTemplate(model));
    }

    return this;
  },
  appendTechnologies: function appendTechnologies() {
    var $sel = $('.technology-items'),
        collection = EVTURN.get('tech');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(EVTURN.techItemTemplate(model));
    }

    return this;
  },
  appendBio: function appendBio() {
    var $sel = $('.paragraphs'),
        collection = EVTURN.get('bio');

    for (var i = 0; i < collection.models.length; i++) {
      var model = collection.models[i].toJSON();

      $sel.append(EVTURN.bioTemplate(model));
    }

    return this;
  },
  animateStats: function animateStats() {
    var self = this;

    $('.stat-count').each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      self.count($(this));
    });
  },
  count: function count($this) {
    var self = this,
        current = parseInt($this.html(), 10);

    current = current + 50;
    $this.html(++current);

    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function () {
        self.count($this);
      }, 50);
    }
  }
});