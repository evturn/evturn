var ev = ev || {};

ev.Router = Backbone.Router.extend({
  wrapper: null,
  indexView: null,
  aboutView: null,
  contactView: null,
  routes: {
    ''        : 'index',
    'about'   : 'about',
    'contact' : 'contact'
  },
  initialize: function() {
    this.wrapper = new Rza();
  },
  index: function() {
    if (this.indexView === null) {
      this.indexView = new ev.IndexView();
    }
    this.wrapper.child = this.indexView;
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