EVTURN.AboutView = Backbone.View.extend({

  el: '.about',
  initialize() {
    this.render();
    this.appendStats();
    this.appendTechnologies();
    this.appendBio();
    this.animateStats();
  },
  render() {
    this.$el.html(EVTURN.navbarTemplate());
    this.$el.append(EVTURN.techViewTemplate());

    return this;
  },
  appendStats() {
    let $sel = $('.statistics.stat-items'),
        collection = EVTURN.get('stats');

    for (let i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $sel.append(EVTURN.statItemTemplate(model));
    }

    return this;
  },
  appendTechnologies() {
    let $sel = $('.technology-items'),
        collection = EVTURN.get('tech');

    for (let i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $sel.append(EVTURN.techItemTemplate(model));
    }

    return this;
  },
  appendBio() {
    let $sel = $('.paragraphs'),
        collection = EVTURN.get('bio');


    for (let i = 0; i < collection.models.length; i++) {
      let model = collection.models[i].toJSON();

      $sel.append(EVTURN.bioTemplate(model));
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