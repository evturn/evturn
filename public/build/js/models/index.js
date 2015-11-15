'use strict';
const data = require('../data');

const Model = module.exports.Model = Backbone.Model.extend({
  populate() {
    const projects = _.where(data.projects, { featured: true });
    const tech = [];
    const techIds = this.get('technologies');
    techIds.forEach((id) => {
      tech.push(_.findWhere(data.tech, { id: id }));
    });
    this.set('technologies', tech);
    const populated = [this, projects];
    return populated;
  }
});

const Collection = module.exports.Collection = Backbone.Collection.extend({ model: Model });