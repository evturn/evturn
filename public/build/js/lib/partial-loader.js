'use-strict';
const $ = require('jquery');
const Handlebars = require('handlebars');
const templates = [
  {
    filepath: '../../views/templates/carousel-navbar.hbs',
    name: 'carousel-navbar'
  }, {
    filepath: '../../views/templates/nav.hbs',
    name: 'nav',
  }, {
    filepath: '../../views/templates/navbar.hbs',
    name: 'navbar',
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