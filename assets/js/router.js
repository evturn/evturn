EVTURN.Router = Backbone.Router.extend({
  wrapper      : null,
  indexView    : null,
  workView     : null,
  aboutView    : null,
  contactView  : null,
  routes: {
    ''         : 'index',
    'work/*'   : 'project',
    'work/:id' : 'project',
    'about'    : 'about',
    'contact'  : 'contact'
  },
  initialize: function() {
    this.wrapper = new EVTURN.Rza();
  },
  index: function() {
    EVTURN.fn.build('index');
    if (this.indexView === null) {
      this.indexView = new EVTURN.IndexView();
    }
    this.wrapper.child = this.indexView;
    this.wrapper.render();

  },
  work: function(model) {
    EVTURN.fn.build('work');
    if (this.workView === null) {
      this.workView = new EVTURN.Carousel({model: model});
      this.wrapper.child = this.workView;
    } else {
      var view = new EVTURN.Carousel({model: model});
      this.wrapper.child = view;
    }
    this.wrapper.render();
  },
  about: function() {
    EVTURN.fn.build('about');
    if (this.aboutView === null) {
      this.aboutView = new EVTURN.AboutView();
    }
    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact: function() {
    EVTURN.fn.build('contact');
    if (this.contactView === null) {
      this.contactView = new EVTURN.ContactView();
    }
    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project: function(id) {
    var collection = EVTURN.fn.work();
    var model = collection.get(id) || collection.get(1);
    EVTURN.fn.work(model);
  },
});