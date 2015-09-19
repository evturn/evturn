EVTURN.Carousel = Backbone.View.extend({

  el: '.work',
  itemContainer    : _.template($('#carousel-item-template').html()),
  itemDescription  : _.template($('#carousel-panel-template').html()),
  itemPreloader    : _.template($('#carousel-preloader-template').html()),
  itemLinks        : _.template($('#project-links-template').html()),

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
    let template = this.itemPreloader;

    $('.carousel-image-container').append(template());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);

  },

});