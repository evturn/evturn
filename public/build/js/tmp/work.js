'use strict';

EVTURN.Work = Backbone.View.extend({

  el: '.work',
  initialize: function initialize() {
    this.render();
    this.carouselPreloader();
    this.appendCarouselPanel();
    this.appendProjectLinks();
    this.appendProjectTechnologies();
    this.appendCarouselImages();
    this.appendProjectThumbnails();
  },
  render: function render() {
    var model = this.model.toJSON();
    this.$el.html(EVTURN.carouselNavbarTemplate());
    this.$el.append(EVTURN.carouselViewTemplate(model));

    return this;
  },
  appendCarouselPanel: function appendCarouselPanel() {
    var $sel = $('.carousel-panel'),
        model = this.model.toJSON();

    $sel.append(EVTURN.carouselPanelTemplate(model));

    return this;
  },
  appendProjectLinks: function appendProjectLinks() {
    var $sel = $('.project-links'),
        model = this.model.toJSON();

    $sel.append(EVTURN.carouselLinkTemplate(model));

    return this;
  },
  appendProjectTechnologies: function appendProjectTechnologies() {
    var $sel = $('.project-technologies'),
        collection = EVTURN.get('tech', true),
        ids = this.model.get('technologies'),
        models = _.map(ids, function (id) {
      return collection.get(id);
    });

    for (var i = 0; i < models.length; i++) {
      var model = models[i].toJSON();

      $sel.append(EVTURN.carouselTechTemplate(model));
    }

    return this;
  },
  appendCarouselImages: function appendCarouselImages() {
    var $sel = $('.carousel-inner'),
        models = this.model.get('items');

    for (var i = 0; i < models.length; i++) {
      var model = models[i];

      $sel.append(EVTURN.carouselImageTemplate(model));
      if (i === 0) {
        $sel.children().first().addClass('active');
      }
    }

    return this;
  },
  appendProjectThumbnails: function appendProjectThumbnails() {
    var tn = new EVTURN.Thumbnails(this.$el);

    this.scrollUp();
  },
  carouselPreloader: function carouselPreloader() {
    var $img = $('#carousel-logo'),
        $container = $('#carousel-preloader');

    $img.addClass('spin');
    $container.delay(500).fadeOut();
    setTimeout(function () {
      $img.removeClass('spin');
    }, 780);
  }
});