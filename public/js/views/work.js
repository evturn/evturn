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
    this.reload(this.templates.project)
      .then((template) => {
        const $projectContent = $('.project-content');
        $projectContent.html(template({ project }));
        this.carousel.reset();
        this.carousel = Carousel(project.images);
        this.scrollToTop();
        return this;
    });
  },
  renderView(project, projects) {
    this.load(this.pages.work)
      .then((template) => {
        this.$parent.html(template({ project, projects }));
        this.carousel = Carousel(project.images);
        return this;
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