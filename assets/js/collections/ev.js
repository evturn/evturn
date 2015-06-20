var ev = ev || {};

var Projects = Backbone.Collection.extend({
  model: Project,
});

var Links = Backbone.Collection.extend({
  model: Link,
});

var Technologies = Backbone.Collection.extend({
  model: Technology,
});