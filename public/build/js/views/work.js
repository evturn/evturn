const carousel = require('../lib/carousel');
const data = require('../data');
const engine = require('../lib/view-engine');

module.exports = Backbone.View.extend({
  render: null,
  el: '.work',
  events: {
    'click .thumbnail-item' : 'scrollWindowUp'
  },
  initialize() {
    console.log(this.model);
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
      filepath: '../../views/templates/carousel.hbs',
      success(template, data) {
        $('.page-carousel').html(template(data));
        carousel();
      },
      data: { project: model.toJSON() }
    });
  },
  setView(model, projects) {
    engine.loadTemplate({
      filepath: '../../views/work.hbs',
      success(template, data) {
        $('#rza').html(template(data));
        carousel();
      },
      data: {
        project: model.toJSON(),
        projects: projects
    }});
  },
  initSpinner() {
    const $img = $('#carousel-logo');
    const $container = $('#carousel-preloader');
    const $spinner = $('#carousel-spinner');
    $img.addClass('spin');
    $container.delay(500).fadeOut();
    setTimeout(() => { $img.removeClass('spin'); }, 740);
  }
});