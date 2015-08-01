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
    this.appendCarouselPanel();
    this.appendProjectLinks();
    this.appendProjectTechnologies();
    this.appendCarouselImages();
    this.appendProjectThumbnails();
  },

  render() {
    this.setModel(this.$el, this.model, this.viewContainer);
    this.carouselPreloader(this.itemPreloader);
    return this;
  },


  appendCarouselPanel() {
    this.appendModel('.carousel-panel', this.model, this.itemDescription);

    return this;
  },

  appendProjectLinks() {
    this.appendModel('.project-links', this.model, this.itemLinks);

    return this;
  },

  appendProjectTechnologies() {
    let techIds = this.model.get('technologies');
    let technologies = this.getModelsById('technologies', techIds);

    this.appendModels('.project-technologies', technologies, this.itemTechnologies);

    return this;
  },

  appendCarouselImages() {
    let images = this.model.get('items');

    this.appendArray('.carousel-inner', images, this.itemContainer);

    return this;
  },

  appendProjectThumbnails() {
    let tn = new EVTURN.Thumbnails(this.$el);

    this.scrollUp();
  },

  carouselPreloader(template) {
    $('.carousel-image-container').append(template());
    $('#carousel-preloader').delay(500).fadeOut();
    $('.carousel-preloader').delay(600).fadeOut(600);

  },

});