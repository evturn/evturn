const Carousel = require('../lib/carousel');
const data = require('../data');
const engine = require('../lib/view-engine');
const hbs = require('../lib/templates');

module.exports = Backbone.View.extend({
  render: null,
  el: '.page-work',
  initialize() {
    const [project, projects] = this.model.populate();
    this.spinner();
    this.render = this.render ? this.renderProject : this.renderView;
    this.render(project, projects);
  },
  renderProject(project) {
    const callback = (template) => {
      const $projectContent = $('.project-content');
      const data = { project };

      $projectContent.html(template(data));
      new Carousel();
      this.scrollToTop();
    };

    engine.reload({
      url: hbs.templates.project,
      success: callback,
    });
  },
  renderView(project, projects) {
    const callback = (template) => {
      const $siteContent = $('.site-content');
      const data = { project, projects };

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
  },
  scrollToTop() {
    const $webpage = $('html, body');
    $webpage.animate({ scrollTop: 0 }, 500);
  }
});