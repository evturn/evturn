const Carousel = require('../lib/carousel');
const data = require('../data');
const engine = require('../lib/view-engine');

module.exports = Backbone.View.extend({
  render: null,
  el: '.page-work',
  events: {
    'click .thumbnail-item' : 'scrollWindowUp'
  },
  initialize() {
    const projects = _.where(data.projects, { featured: true });
    const tech = [];
    const techIds = this.model.get('technologies');
    this.initSpinner();
    techIds.forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });
    this.model.set('technologies', tech);
    this.render = this.render ? this.updateCarousel : this.setView;
    this.render(this.model, projects);
  },
  updateCarousel(model) {
    const $webpage = $('html, body');
    $webpage.animate({ scrollTop: 0 }, 500);
    engine.reloadTemplate({
      filepath: '../../views/templates/project.hbs',
      success(template, data) {
        $('.project-content').html(template(data));
        const carousel = new Carousel();
      },
      data: { project: model.toJSON() }
    });
  },
  setView(model, projects) {
    engine.loadTemplate({
      filepath: '../../views/work.hbs',
      success(template, data) {
        $('.site-content').html(template(data));
        const carousel = new Carousel();
      },
      data: {
        project: model.toJSON(),
        projects: projects
    }});
  },
  initSpinner() {
    const $container = $('.site-logo');
    const $img = $('.site-logo__image');
    $img.addClass('spin');
    setTimeout(() => { $img.removeClass('spin'); }, 740);
  }
});