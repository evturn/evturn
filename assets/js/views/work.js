EVTURN.Carousel = Backbone.View.extend({
  el: '.work',
  viewContainer    : _.template($('#carousel-container-template').html()),
  itemContainer    : _.template($('#carousel-item-template').html()),
  itemDescription  : _.template($('#carousel-panel-template').html()),
  itemPreloader    : _.template($('#carousel-preloader-template').html()),
  itemTechnologies : _.template($('#project-technologies-template').html()),
  initialize: function() {
    this.render();
    this.setChildViews();
    this.getProjectTechnologies();
  },
  render: function() {
    this.$el.html(this.viewContainer(this.model.toJSON()));
    EVTURN.animations.carouselPreloader(this.itemPreloader);
    return this;
  },
  setChildViews: function() {
    var $carouselPanel = $('.carousel-panel');
    var images = this.model.get('items');
    EVTURN.fn.appendModel('.carousel-panel', this.model, this.itemDescription);
    EVTURN.fn.appendArray('.carousel-inner', images, this.itemContainer);
    var tn = new EVTURN.Thumbnails(this.$el);
    EVTURN.animations.scrollUp();
    return this;
  },
  getProjectTechnologies: function() {
    var techIds = this.model.get('technologies');
    var technologies = EVTURN.fn.getById('technologies', techIds);
    EVTURN.fn.appendModels('.project-technologies', technologies, this.itemTechnologies);
    return this;
  },
});