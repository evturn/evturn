let Compiler = require('../templates');

module.exports = Backbone.View.extend({
  navbarTemplate   : Compiler.navbar(),
  techViewTemplate : Compiler.techView(),
  techItemTemplate : Compiler.techItem(),
  statItemTemplate : Compiler.statItem(),
  bioTemplate      : Compiler.bio(),
  el: '.about',
  initialize() {
    this.render();
    this.animateStats();
  },
  render() {
    let stats = this.get('stats').models;
    let techs = this.get('tech').models;
    let paragraphs = this.get('bio').models;

    this.$el.html(this.navbarTemplate());
    this.$el.append(this.techViewTemplate());
    this.compileAndAppend($('.statistics.stat-items'), stats, this.statItemTemplate);
    this.compileAndAppend($('.technology-items'), techs, this.techItemTemplate);
    this.compileAndAppend($('.paragraphs'), paragraphs, this.bioTemplate);
    return this;
  },
  animateStats() {
    let $counters = $('.stat-count');

    $counters.each((index, element) => {
      let $element = $(element);
      $element.data('count', parseInt($element.html(), 10));
      $element.html('0');

      this.count($element);
    });

  },
  count($element){
    let current = parseInt($element.html(), 10);

    current = current + 50;
    $element.html(++current);

    if (current > $element.data('count')) {
        $element.html($element.data('count'));
    }
    else {
        setTimeout(() => {
          this.count($element);
        }, 50);
    }
  }
});