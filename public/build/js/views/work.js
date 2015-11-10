const _ = require('underscore');
const Thumbnails = require('./thumbnails');
const carousel = require('../lib/carousel');
const loadTemplate = require('../lib/template-loader');
const data = require('../models');

module.exports = Backbone.View.extend({
  templates: [],
  el: '.work',
  filepath: '../../views/work.hbs',
  initialize() {
    const tech = [];
    const techIds = this.model.get('technologies');
    const apps = _.where(data.apps, { featured: true });
    this.initSpinner();
    techIds.forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });
    this.model.set('technologies', tech);
    loadTemplate({
      templates: this.templates,
      filepath: this.filepath,
      success: this.render,
      data: {
        project: this.model.toJSON(),
        projects: apps
    }});
  },
  render(template, data) {
    $('.work').html(template(data));
    carousel();
  },
  renderThumbnails() {
    new Thumbnails($('.work'));
    this.scrollUp();
  },
  initSpinner() {
    const $img = $('#carousel-logo');
    const $container = $('#carousel-preloader');
    $img.addClass('spin');
    $container.delay(500).fadeOut();
    setTimeout(() => { $img.removeClass('spin'); }, 780);
  }
});