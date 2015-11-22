const Carousel = require('../lib/carousel');
const data = require('../data');

module.exports = Backbone.View.extend({
  render: null,
  carousel: null,
  el: '.page-work',
  initialize() {
    const [project, projects] = this.model.populate();
    this.spinner();
    this.render = this.render ? this.renderProject : this.renderView;
    this.render(project, projects);
  },
  renderProject(project) {
    console.log(project);
    const callback = (template) => {
      const $projectContent = $('.project-content');
      $projectContent.html(template({ project }));
      const $carousel = $('.carousel__item-image');
      this.carousel.init($carousel);
      this.scrollToTop();
    };

    this.reload({
      url: this.templates.project,
      callback: callback,
    });
  },
  renderView(project, projects) {
    const callback = (template) => {
      this.$parent.html(template({ project, projects }));
      const $carousel = $('.carousel__item-image');
      this.carousel = new Carousel($carousel);
    };

    this.load({
      url: this.pages.work,
      callback: callback,
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