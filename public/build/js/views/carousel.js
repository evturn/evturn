EVTURN.Carousel = Backbone.View.extend({

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

    this.$el.html(EVTURN.carouselViewTemplate(model));

    return this;
  },
  appendCarouselPanel() {
    let $sel = $('.carousel-panel'),
        model = this.model.toJSON();

    $sel.append(EVTURN.carouselPanelTemplate(model));

    return this;
  },
  appendProjectLinks() {
    let $sel = $('.project-links'),
        model = this.model.toJSON();

    $sel.append(EVTURN.carouselLinkTemplate(model));

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

      $sel.append(EVTURN.carouselTechTemplate(model));
    }

    return this;
  },
  appendCarouselImages() {
    let $sel = $('.carousel-inner'),
        models   = this.model.get('items');

    for (let i = 0; i < models.length; i++) {
      let model = models[i];

      $sel.append(EVTURN.carouselImageTemplate(model));
      if (i === 0) {
        $sel.children().first().addClass('active');
      }
    }

    return this;
  },
  appendProjectThumbnails() {
    let tn = new EVTURN.Thumbnails(this.$el);

    this.scrollUp();
  },
  carouselPreloader() {
    let $sel = $('.carousel-image-container');

    $sel.append(EVTURN.carouselPreloaderTemplate());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);

  }
});