var ev = ev || {};

ev.Router = Backbone.Router.extend({
  wrapper: null,
  indexView: null,
  workView: null,
  aboutView: null,
  contactView: null,
  routes: {
    ''        : 'index',
    'work'    : 'work',
    'work/:id': 'work',
    'about'   : 'about',
    'contact' : 'contact',

  },
  initialize: function() {
    this.wrapper = new ev.Rza();
  },
  index: function() {
    if (this.indexView === null) {
      this.indexView = new ev.IndexView();
    }
    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work: function(id) {
    if (this.workView === null) {
      var collection = ev.fetch('projects');
      var model = collection.get(id) || collection.get(1)
      this.workView = new ev.Carousel({model: model});
    }
    this.wrapper.child = this.workView;
    this.wrapper.render();
  },
  about: function() {
    if (this.aboutView === null) {
      var collection = ev.fetch('technologies');
      this.aboutView = new ev.AboutView({collection: collection});
    }
    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function() {
    if (this.contactView === null) {
      var collection = ev.fetch('links');
      this.contactView = new ev.ContactView({collection: collection});
    }
    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
});