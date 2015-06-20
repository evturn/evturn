var ev = ev || {};

ev.Router = Backbone.Router.extend({
  wrapper: null,
  aboutView: null,
  contactView: null,
  routes: {
    ''        : 'home',
    'about'   : 'about',
    'contact' : 'contact'
  },
  initialize: function() {
    this.wrapper = new Rza();
  },
  about: function() {
    if (this.contactView === null) {
      var collection = ev.fetch('technologies');
      this.contactView = new ContactView({collection: collection});
    }
    this.wrapper.child = this.contactView;
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