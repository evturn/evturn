const carousel = require('../lib/carousel');
const data = require('../models');
const engine = require('../lib/view-engine');
const loadTemplate = engine.loadTemplate;

module.exports = Backbone.View.extend({
  project: null,
  el: '.work',
  filepath: '../../views/work.hbs',
  events: {
    'click .thumbnail-item' : 'scrollWindowUp'
  },
  initialize() {
    this.loadProject(this.model);
  },
  loadProject(model) {
    const tech = [];
    const techIds = model.get('technologies');
    const projects = _.where(data.projects, { featured: true });

    techIds.forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });

    model.set('technologies', tech);
    loadTemplate({
      filepath: this.filepath,
      success: this.render,
      data: {
        project: model.toJSON(),
        projects: projects
    }});
  },
  render(template, data) {
    $('.work').html(template(data));
    carousel();
  },
  scrollWindowUp() {
    const $webpage = $('html, body');
    $webpage.animate({ scrollTop: 0 }, 500);
  },
  initSpinner() {
    const $img = $('#carousel-logo');
    const $container = $('#carousel-preloader');
    $img.addClass('spin');
    $container.delay(500).fadeOut();
    setTimeout(() => { $img.removeClass('spin'); }, 780);
  }
});