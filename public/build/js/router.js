'use strict';
const Backbone = require('backbone');
const views = require('./views');
const engine = require('./lib/view-engine');
const data = require('./data');
const googleAnalytics = require('google-analytics');
const nav = require('./lib/nav');
const spinner = require('./lib/spinner');
const Model = Backbone.Model.extend({});
const Collection = Backbone.Collection.extend({
  model: Model
});

const Router = Backbone.Router.extend({
  index: null,
  work: null,
  about: null,
  contact: null,
  routes: {
    '': 'match',
    'about': 'match',
    'contact': 'match',
    'work(/:id)': 'work'
  },
  initialize() {
    spinner();
    engine.registerPartials();
    engine.registerTemplates();
    nav();
  },
  match() {
    const name = Backbone.history.fragment ? Backbone.history.fragment : 'index';
    const view = (name) => { return name.charAt(0).toUpperCase() + name.substr(1);}(name);
    const View = views[view];
    let instance = this[name];
    if (instance === null) {
      instance = new View();
      return this;
    }
    instance.initialize();
  },
  work(id) {
    const collection = new Collection(data.projects);
    const model = collection.get(id) || collection.get(1);
    this.work = new views.Work({model: model});
  },
});

const router = new Router();
Backbone.history.start();