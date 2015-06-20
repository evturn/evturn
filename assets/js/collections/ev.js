var ev = ev || {};

Projects = Backbone.Collection.extend({
  model: ev.Project,
});

Links = Backbone.Collection.extend({
  model: ev.Link,
});

Technologies = Backbone.Collection.extend({
  model: ev.Technology,
});