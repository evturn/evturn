let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Rza = require('./views/wrapper'),
    Index = require('./views/index'),
    About = require('./views/about'),
    Contact = require('./views/contact'),
    Work = require('./views/work');

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
    this.wrapper = new Rza();
    _.extend(this, this.wrapper);
  },
  index() {
    this.changeState('index');

    if (this.indexView === null) {
        this.indexView = new Index();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work(model) {
    this.changeState('work');

    if (this.workView === null) {
        this.workView = new Work({model: model});
        this.wrapper.child = this.workView;
    }
    else {
        let view = new Work({model: model});
        this.wrapper.child = view;
    }

    this.wrapper.render();
  },
  about() {
    this.changeState('about');

    if (this.aboutView === null) {
        this.aboutView = new About();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact() {
    this.changeState('contact');

    if (this.contactView === null) {
        this.contactView = new Contact();
    }

    this.wrapper.child = this.contactView;
    this.wrapper.render();
  },
  project(id) {
    let collection = this.get('apps'),
        model = collection.get(id) || collection.get(1);

    this.work(model);
  }
});

module.exports = Router;