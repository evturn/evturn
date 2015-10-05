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
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },
  render() {
    this.$el.html(this.navbarTemplate());
    this.$el.append(this.techViewTemplate());

    return this;
  },
  appendStats() {
    let $sel = $('.statistics.stat-items'),
        collection = this.get('stats'),
        models = collection.models;

    this.compileAndAppend($sel, models, this.statItemTemplate);
    return this;
  },
  appendTechnologies() {
    let $sel = $('.technology-items'),
        collection = this.get('tech'),
        models = collection.models;

    this.compileAndAppend($sel, models, this.techItemTemplate);
    return this;
  },
  appendBio() {
    let $sel = $('.paragraphs'),
        collection = this.get('bio'),
        models = collection.models;

    this.compileAndAppend($sel, models, this.bioTemplate);
    return this;
  },
  animateStats() {
    let self = this;

    $('.stat-count').each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');

      self.count($(this));
    });

  },
  count($this){
    let self = this,
        current = parseInt($this.html(), 10);

    current = current + 50;
    $this.html(++current);

    if (current > $this.data('count')) {
        $this.html($this.data('count'));
    }
    else {
        setTimeout(function() {
          self.count($this);
        }, 50);
    }
  }
});