'use strict';
const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const views = require('./views');
const engine = require('./lib/view-engine');
const nav = require('./lib/nav');
const googleAnalytics = require('google-analytics');
const spinner = require('./lib/spinner');
const carousel = require('./lib/carousel');
const data = require('./data');
const Model = Backbone.Model.extend({});
const Collection = Backbone.Collection.extend({
  model: Model
});

engine.registerPartials();
engine.registerTemplates();

const Router = Backbone.Router.extend({
  wrapper      : null,
  indexView    : null,
  workView     : null,
  aboutView    : null,
  contactView  : null,
  routes: {
    ''           : 'index',
    'work(/:id)' : 'work',
    'about'      : 'about',
    'contact'    : 'contact'
  },
  initialize() {
    nav();
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
  work(id) {
    const collection = new Collection(data.projects);
    const model = collection.get(id) || collection.get(1);
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
  changeState(string) {
    let $selector = $(document.getElementsByClassName(string));
    let element = document.createElement('div');
    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new views.Wrapper().$el);
  },
});

$(window).load(() => {
  spinner();
});

let router = new Router();
Backbone.history.start();