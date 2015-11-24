'use strict';
const data = require('../data');
const projects = _.where(data.projects, { featured: true });

const Model = module.exports.Model = Backbone.Model.extend({
  populate() {
    const tech = [];

    this.get('technologies').forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });
    this.set('tech', tech);
    return [this.toJSON(), projects];
  }
});

const Collection = module.exports.Collection = Backbone.Collection.extend({
  model: Model,
  select(id) {
    return this.get(id) || this.get(4);
  }
});

const Projects = module.exports.Projects = new Collection(projects);