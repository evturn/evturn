EVTURN.Carousel = Backbone.View.extend({

  el: '.work',
  viewContainer    : _.template($('#carousel-container-template').html()),
  itemContainer    : _.template($('#carousel-item-template').html()),
  itemDescription  : _.template($('#carousel-panel-template').html()),
  itemPreloader    : _.template($('#carousel-preloader-template').html()),
  itemTechnologies : _.template($('#project-technologies-template').html()),
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
    let selector = this.$el;
    let model    = this.model;
    let template = this.viewContainer;

    this.setModel(selector, model, template);

    return this;
  },


  appendCarouselPanel() {
    let selector = '.carousel-panel';
    let model    = this.model;
    let template = this.itemDescription;

    this.appendModel(selector, model, template);

    return this;
  },

  appendProjectLinks() {
    let selector = '.project-links';
    let model    = this.model;
    let template = this.itemLinks;

    this.appendModel(selector, model, template);

    return this;
  },

  appendProjectTechnologies() {
    let selector     = '.project-technologies';
    let techIds      = this.model.get('technologies');
    let technologies = this.getModelsById('technologies', techIds);
    let template     = this.itemTechnologies;

    this.appendModels(selector, technologies, template);

    return this;
  },

  appendCarouselImages() {
    let selector = '.carousel-inner';
    let images   = this.model.get('items');
    let template = this.itemContainer;

    this.appendArray(selector, images, template);

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