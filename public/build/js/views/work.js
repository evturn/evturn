const _ = require('underscore');
const Thumbnails = require('./thumbnails');
const Compiler = require('../templates');
const carousel = require('../lib/carousel');

module.exports = Backbone.View.extend({
  carouselNavbarTemplate : Compiler.carouselNavbar(),
  carouselViewTemplate   : Compiler.carouselView(),
  carouselPanelTemplate  : Compiler.carouselPanel(),
  carouselLinkTemplate   : Compiler.carouselLink(),
  carouselTechTemplate   : Compiler.carouselTech(),
  carouselImageTemplate  : Compiler.carouselImage(),
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
    let collection = this.get('tech', true),
        ids      = this.model.get('technologies'),
        models = _.map(ids, function(id) {
          return collection.get(id);
        });

    this.compileAndAppend($('.project-technologies'), models, this.carouselTechTemplate);
    return this;
  },
  appendCarouselImages() {
    let models = this.model.get('items');

    this.compileAndAppend($('.carousel-inner'), models, this.carouselImageTemplate, false);
    carousel();
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
    setTimeout(() => {
      $img.removeClass('spin');
    }, 780);
  }
});