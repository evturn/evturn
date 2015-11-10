'use-strict';
const $ = require('jquery');
const Handlebars = require('handlebars');
const templates = [
  {
    filepath: '../../views/templates/carousel-navbar.hbs',
    name: 'carousel-navbar'
  }, {
    filepath: '../../views/templates/nav.hbs',
    name: 'nav'
  }, {
    filepath: '../../views/templates/navbar.hbs',
    name: 'navbar'
  }, {
    filepath: '../../views/templates/thumbnails.hbs',
    name: 'thumbnails'
  }, {
    filepath: '../../views/templates/carousel-info.hbs',
    name: 'carousel-info'
  }
];

const loadPartials = module.exports = () => {

  const get = (template) => {
    $.get(template.filepath, (contents) => {
       return Handlebars.registerPartial(template.name, contents);
    });
  };

  for (let template of templates) {
    get(template);
  }

};