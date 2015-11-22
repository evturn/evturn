'use strict';
const Backbone = require('backbone');
const views = require('./views');
const View = require('./lib/view');
const Menu = require('./lib/menu');
const models = require('./models');
const ga = require('./lib/web_modules/google-analytics');

View.init();
View.extend(Menu);
View.extend(Backbone.View.prototype);

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
    'work(/:id)': 'project'
  },
  initialize() {
    Menu.init();
  },
  getFragment() {
    return Backbone.history.fragment ? Backbone.history.fragment : 'index';
  },
  setLayout() {
    const route = this.getFragment();
    const slash = route.indexOf('/');
    const name = slash !== -1 ? route.substring(0, slash) : route;
    $('body').removeClass();
    $('body').addClass(`page-${name}`);
  },
  match() {
    const name = this.getFragment();
    const view = (name) => { return name.charAt(0).toUpperCase() + name.substr(1); }(name);
    const View = views[view];
    let instance = this[name];

    this.setLayout();
    this.isActive = false;
    if (instance === null) {
      instance = new View();
      return;
    }
    instance;
  },
  project(id) {
    const projects = models.Projects;
    const project = projects.select(id);

    this.setLayout();
    if (this.work === null || !this.isActive) {
      this.work = new views.Work({ model: project });
      this.isActive = true;
    } else {
      this.work.model = project;
      this.work.initialize();
    }
  },
});

const router = new Router();
Backbone.history.start();