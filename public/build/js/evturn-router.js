let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Rza = require('./wrapper'),
    Index = require('./index'),
    About = require('./about'),
    Contact = require('./contact'),
    Work = require('./work');

EVTURN.Rza = Rza;
EVTURN.IndexView = Index;
EVTURN.Work = Work;
EVTURN.AboutView = About;
EVTURN.ContactView = Contact;

let Router = Backbone.Router.extend({
  wrapper      : null,
  indexView    : null,
  workView     : null,
  aboutView    : null,
  contactView  : null,
  routes       : {
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
    EVTURN.changeState('index');

    if (this.indexView === null) {
        this.indexView = new EVTURN.IndexView();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work(model) {
    EVTURN.changeState('work');

    if (this.workView === null) {
        this.workView = new EVTURN.Work({model: model});
        this.wrapper.child = this.workView;
    }
    else {
        let view = new EVTURN.Work({model: model});
        this.wrapper.child = view;
    }

    this.wrapper.render();
  },
  about() {
    EVTURN.changeState('about');

    if (this.aboutView === null) {
        this.aboutView = new EVTURN.AboutView();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact() {
    EVTURN.changeState('contact');

    if (this.contactView === null) {
        this.contactView = new EVTURN.ContactView();
    }

    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project(id) {
    let collection = EVTURN.get('apps'),
        model = collection.get(id) || collection.get(1);

    this.work(model);
  }
});

module.exports = Router;