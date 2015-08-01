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

  initialize() {
    this.wrapper = new EVTURN.Rza();
  },

  index() {
    this.changeState('index');

    if (this.indexView === null) {
      this.indexView = new EVTURN.IndexView();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },

  work(model) {
    this.changeState('work');

    if (this.workView === null) {
      this.workView = new EVTURN.Carousel({model: model});
      this.wrapper.child = this.workView;
    }
    else {
      let view = new EVTURN.Carousel({model: model});
      this.wrapper.child = view;
    }

    this.wrapper.render();
  },

  about() {
    this.changeState('about');

    if (this.aboutView === null) {
      this.aboutView = new EVTURN.AboutView();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },

  contact() {
    this.changeState('contact');

    if (this.contactView === null) {
      this.contactView = new EVTURN.ContactView();
    }

    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },

  project(id) {
    let collection = this.get('projects');
    let model = collection.get(id) || collection.get(1);

    this.work(model);
  },

  get(string) {
    let data = EVTURN.data[string];
    let capitalize = (string.charAt(0).toUpperCase() + string.substring(1));
    let collection = new EVTURN[capitalize](data);
    let models = collection.where({featured: true});

    return new EVTURN[capitalize](models.reverse());
  },

  createElement(string) {
    let $selector = $(document.getElementsByClassName(string));
    let element = document.createElement('div');
    element.className = string;
    element.dataset.view = string;

    $selector.remove();
    $(element).insertAfter(new EVTURN.Rza().$el);
  },

  navActive(string) {
    $('.nav-link').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },

  changeState(string) {
    this.navActive(string);
    this.createElement(string);
  },

});