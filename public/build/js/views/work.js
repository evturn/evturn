const Carousel = require('../lib/carousel');
const data = require('../data');
const engine = require('../lib/view-engine');
const hbs = require('../lib/templates');

module.exports = Backbone.View.extend({
  render: null,
  el: '.page-work',
  initialize() {
    const projects = _.where(data.projects, { featured: true });
    const tech = [];
    const techIds = this.model.get('technologies');

    this.spinner();
    techIds.forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });
    this.model.set('technologies', tech);
    this.render = this.render ? this.swapProject : this.setView;
    this.render(this.model, projects);
  },
  swapProject(model) {
    const callback = (template) => {
      const $webpage = $('html, body');
      const $projectContent = $('.project-content');
      const data = { project: model.toJSON() };
      $projectContent.html(template(data));
      new Carousel();
      $webpage.animate({ scrollTop: 0 }, 500);
    };

    engine.reload({
      url: hbs.templates.project,
      success: callback,
    });
  },
  setView(model, projects) {
    const callback = (template) => {
      const $siteContent = $('.site-content');
      const data = {
        project: model.toJSON(),
        projects: projects
      };
      $siteContent.html(template(data));
      new Carousel();
    };

    engine.load({
      url: hbs.work.page,
      success: callback,
    });
  },
  spinner() {
    const $siteImage = $('.site-logo__image');
    $siteImage.addClass('spin');
    setTimeout(() => $siteImage.removeClass('spin'), 740);
  }
});