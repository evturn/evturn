'use strict';
const data = require('../data');

const projects = _.where(data.projects, { featured: true });

const Model = module.exports.Model = Backbone.Model.extend({
  populate() {
    const tech = [];
    const techIds = this.get('technologies');
    techIds.forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });
    this.set('technologies', tech);
    const project = this.toJSON();
    const populated = [project, projects];
    return populated;
  }
});

const Collection = module.exports.Collection = Backbone.Collection.extend({
  model: Model,
  select(id) {
    const project = this.get(id) || this.get(4);
    return project;
  }
});

const Projects = module.exports.Projects = new Collection(projects);