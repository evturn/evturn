const Carousel = require('../lib/carousel');
const data = require('../data');

module.exports = Backbone.View.extend({
  render: null,
  carousel: null,
  el: '.page-work',
  initialize() {
    const [project, projects] = this.model.populate();

    this.rotateSiteLogo();
    this.render = this.render ? this.renderProject : this.renderPage;
    this.render(project, projects);
  },
  renderPage(project, projects) {
    this.load(this.pages.work)

      .then((template) => {
        this.$parent.html(template({ project, projects }));
        this.carousel = Carousel(project.images);
        return this;
      });
  },
  renderProject(project) {
    this.reload(this.templates.project)

      .then((template) => {
        const $webpage = $('html, body');
        const $projectContent = $('.project-content');

        $projectContent.html(template({ project }));
        this.carousel.reset();
        this.carousel = Carousel(project.images);
        $webpage.animate({ scrollTop: 0 }, 500);
        return this;
    });
  },
  rotateSiteLogo() {
    const $siteImage = $('.site-logo__image');

    $siteImage.addClass('spin');
    setTimeout(() => $siteImage.removeClass('spin'), 740);
  },
});