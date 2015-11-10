'use strict';
const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const views = require('./views');
const view = require('./lib/view').init();
const googleAnalytics = require('google-analytics');
const partials = require('./lib/partial-loader')();

const Router = Backbone.Router.extend({
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
    this.wrapper = new views.Wrapper();
    _.extend(this, this.wrapper);
  },
  index() {
    this.changeState('index');

    if (this.indexView === null) {
      this.indexView = new views.Index();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  },
  work(model) {
    this.changeState('work');

    if (this.workView === null) {
      this.workView = new views.Work({model: model});
      this.wrapper.child = this.workView;
    } else {
      this.wrapper.child = new views.Work({model: model});
    }

    this.wrapper.render();
  },
  about() {
    this.changeState('about');

    if (this.aboutView === null) {
      this.aboutView = new views.About();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },
  contact() {
    this.changeState('contact');

    if (this.contactView === null) {
      this.contactView = new views.Contact();
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

let router = new Router();
Backbone.history.start();