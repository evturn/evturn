let _ = require('underscore'),
    Thumbnails = require('./thumbnails'),
    EVTURN = require('./evturn-view'),
    Compiler = require('./evturn-templates');

module.exports = Backbone.View.extend({
  carouselNavbarTemplate : Compiler.carouselNavbarCompiler(),
  carouselViewTemplate   : Compiler.carouselViewCompiler(),
  carouselPanelTemplate  : Compiler.carouselPanelCompiler(),
  carouselLinkTemplate   : Compiler.carouselLinkCompiler(),
  carouselTechTemplate   : Compiler.carouselTechCompiler(),
  carouselImageTemplate  : Compiler.carouselImageCompiler(),
  el: '.work',
  initialize() {
    this.render();
    this.carouselPreloader();
    this.appendCarouselPanel();
    this.appendProjectLinks();
    this.appendProjectTechnologies();
    this.appendCarouselImages();
    this.appendProjectThumbnails();
  },
  render() {
    let model = this.model.toJSON();
    this.$el.html(this.carouselNavbarTemplate());
    this.$el.append(this.carouselViewTemplate(model));

    return this;
  },
  appendCarouselPanel() {
    let $sel = $('.carousel-panel'),
        model = this.model.toJSON();

    $sel.append(this.carouselPanelTemplate(model));

    return this;
  },
  appendProjectLinks() {
    let $sel = $('.project-links'),
        model = this.model.toJSON();

    $sel.append(this.carouselLinkTemplate(model));

    return this;
  },
  appendProjectTechnologies() {
    let $sel = $('.project-technologies'),
        collection = EVTURN.get('tech', true),
        ids      = this.model.get('technologies'),
        models = _.map(ids, function(id) {
          return collection.get(id);
        });

    for (let i = 0; i < models.length; i++) {
      let model = models[i].toJSON();

      $sel.append(this.carouselTechTemplate(model));
    }

    return this;
  },
  appendCarouselImages() {
    let $sel = $('.carousel-inner'),
        models   = this.model.get('items');

    for (let i = 0; i < models.length; i++) {
      let model = models[i];

      $sel.append(this.carouselImageTemplate(model));
      if (i === 0) {
          $sel.children().first().addClass('active');
      }
    }

    return this;
  },
  appendProjectThumbnails() {
    let tn = new Thumbnails(this.$el);

    this.scrollUp();
  },
  carouselPreloader() {
    let $img = $('#carousel-logo'),
        $container = $('#carousel-preloader');

    $img.addClass('spin');
    $container.delay(500).fadeOut();
    setTimeout(function() {
      $img.removeClass('spin');
    }, 780);
  }
});