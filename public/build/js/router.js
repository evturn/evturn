'use strict';
const Backbone = require('backbone');
const views = require('./views');
const engine = require('./lib/view-engine');
const data = require('./data');
const googleAnalytics = require('google-analytics');
const nav = require('./lib/nav');
const spinner = require('./lib/spinner');
const Model = Backbone.Model.extend({});
const Collection = Backbone.Collection.extend({ model: Model });

const Router = Backbone.Router.extend({
  index: null,
  work: null,
  about: null,
  contact: null,
  isActive: false,
  routes: {
    '': 'match',
    'about': 'match',
    'contact': 'match',
    'work(/:id)': '_work'
  },
  initialize() {
    spinner();
    engine.registerTemplates();
    engine.registerPartials();
    nav();
  },
  match() {
    const name = Backbone.history.fragment ? Backbone.history.fragment : 'index';
    const view = (name) => { return name.charAt(0).toUpperCase() + name.substr(1); }(name);
    const View = views[view];
    let instance = this[name];

    this.isActive = false;
    if (instance === null) {
      instance = new View();
      return this;
    }
    instance;
  },
  _work(id) {
    const collection = new Collection(data.projects);
    const project = collection.get(id) || collection.get(1);

    if (this.work === null || !this.isActive) {
      this.work = new views.Work({ model: project });
      this.isActive = true;
    } else {
      this.work.initialize({model: project});
    }
  },
});

const router = new Router();
Backbone.history.start();