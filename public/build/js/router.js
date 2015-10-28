const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Rza = require('./views/wrapper');
const Index = require('./views/index');
const About = require('./views/about');
const Contact = require('./views/contact');
const Work = require('./views/work');

module.exports = Backbone.Router.extend({
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
    } else {
      this.wrapper.child = new Work({model: model});
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
    let collection = this.get('apps');
    let model = collection.get(id) || collection.get(1);
    this.work(model);
  }
});