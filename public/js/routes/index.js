'use strict';
const Backbone = require('backbone');
const views = require('../views');
const models = require('../models');

exports = module.exports = Backbone.Router.extend({
  index: null,
  work: null,
  about: null,
  contact: null,
  isActive: false,
  routes: {
    '': 'match',
    'about': 'match',
    'contact': 'match',
    'work(/:id)': 'project'
  },
  getFragment() {
    return Backbone.history.fragment ? Backbone.history.fragment : 'index';
  },
  setupLayout() {
    const $body = $('body');
    const route = this.getFragment();
    const slash = route.indexOf('/');
    const name = slash !== -1 ? route.substring(0, slash) : route;

    $body.removeClass();
    $body.addClass(`page-${name}`);
  },
  match() {
    const name = this.getFragment();
    const view = (name) => { return name.charAt(0).toUpperCase() + name.substr(1); }(name);
    const View = views[view];

    let instance = this[name];

    this.setupLayout();
    this.isActive = false;
    if (instance === null) {
      instance = new View();
      return instance;
    }
    return instance;
  },
  project(id) {
    const projects = models.Projects;
    const project = projects.select(id);

    this.setupLayout();
    if (this.work === null || !this.isActive) {
      this.work = new views.Work({ model: project });
      this.isActive = true;
    } else {
      this.work.model = project;
      this.work.initialize();
    }
  },
});