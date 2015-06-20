var ev = ev || {};

ev.Router = Backbone.Router.extend({
  wrapper: null,
  indexView: null,
  workView: null,
  aboutView: null,
  contactView: null,
  routes: {
    ''        : 'index',
    'work/*'  : 'project',
    'work/:id': 'project',
    'about'   : 'about',
    'contact' : 'contact'
  },
  initialize: function() {
    this.wrapper = new ev.Rza();
  },
  index: function() {
    ev.build('index');
    if (this.indexView === null) {
      this.indexView = new ev.IndexView();
    }
    this.wrapper.child = this.indexView;
    this.wrapper.render();
    
  },
  work: function(model) {
    ev.build('work');
    if (this.workView === null) {
      this.workView = new ev.Carousel({model: model});
      this.wrapper.child = this.workView;
    } else {
      var view = new ev.Carousel({model: model});
      this.wrapper.child = view;
    }
    this.wrapper.render();
  },
  about: function() {
    ev.build('about');
    if (this.aboutView === null) {
      this.aboutView = new ev.AboutView();
    }
    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function() {
    ev.build('contact');
    if (this.contactView === null) {
      this.contactView = new ev.ContactView();
    }
    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project: function(id) {
    var collection = ev.fetch('projects');
    var model = collection.get(id) || collection.get(1);
    this.work(model);
  }
});