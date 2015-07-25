EVTURN.Carousel = Backbone.View.extend({

  el: '.work',

  viewContainer    : _.template($('#carousel-container-template').html()),
  itemContainer    : _.template($('#carousel-item-template').html()),
  itemDescription  : _.template($('#carousel-panel-template').html()),
  itemPreloader    : _.template($('#carousel-preloader-template').html()),
  itemTechnologies : _.template($('#project-technologies-template').html()),
  itemLinks        :  _.template($('#project-links-template').html()),

  initialize: function() {
    this.render();
    this.setChildren();
  },

  render: function() {
    EVTURN.setModel(this.$el, this.model, this.viewContainer);
    EVTURN.animations.carouselPreloader(this.itemPreloader);
    return this;
  },

  setChildren: function() {
    let images = this.model.get('items');
    let techIds = this.model.get('technologies');
    let technologies = EVTURN.getModelsById('technologies', techIds);

    EVTURN.appendModel('.carousel-panel', this.model, this.itemDescription);
    EVTURN.appendModel('.project-links', this.model, this.itemLinks);
    EVTURN.appendModels('.project-technologies', technologies, this.itemTechnologies);
    EVTURN.appendArray('.carousel-inner', images, this.itemContainer);
    let tn = new EVTURN.Thumbnails(this.$el);
    EVTURN.animations.scrollUp();

    return this;
  },

});