EVTURN.ContactView = Backbone.View.extend({

  el: '.contact',
  className: 'contact',
  initialize() {
    this.collection = EVTURN.get('links');

    this.render();
  },
  render() {
    this.setView();
    this.appendLinks();
  },
  setView() {
    let el = document.querySelector('#rza');

    el.innerHTML = EVTURN.contactViewTemplate();
    return this;
  },
  appendLinks() {
    let selector = document.querySelector('.link-items'),
        links = this.collection.models,
        html = '';

    for (var i = 0; i < links.length; i++) {
      let model = links[i].attributes;

      html = html + EVTURN.linkItemTemplate(model);
    }

    selector.innerHTML = html;

    return this;
  }
});