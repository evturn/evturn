var ev = ev || {};

ev.Link = Backbone.Model.extend({});

ev.Project = Backbone.Model.extend({});

ev.Technology = Backbone.Model.extend({});

Projects = Backbone.Collection.extend({
  model: ev.Project,
});

Links = Backbone.Collection.extend({
  model: ev.Link,
});

Technologies = Backbone.Collection.extend({
  model: ev.Technology,
});