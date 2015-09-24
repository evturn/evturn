let EVTURN = require('./evturn-view'),
    Compiler = require('./evturn-templates');

module.exports = Backbone.View.extend({
  navbarTemplate   : Compiler.navbarCompiler(),
  techViewTemplate : Compiler.techViewCompiler(),
  techItemTemplate : Compiler.techItemCompiler(),
  statItemTemplate : Compiler.statItemCompiler(),
  bioTemplate      : Compiler.bioCompiler(),
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
        collection = EVTURN.get('stats');

    for (let i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $sel.append(this.statItemTemplate(model));
    }

    return this;
  },
  appendTechnologies() {
    let $sel = $('.technology-items'),
        collection = this.get('tech');

    for (let i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $sel.append(this.techItemTemplate(model));
    }

    return this;
  },
  appendBio() {
    let $sel = $('.paragraphs'),
        collection = EVTURN.get('bio');


    for (let i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $sel.append(this.bioTemplate(model));
    }

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