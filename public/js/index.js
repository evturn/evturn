const Router = require('./routes');
const View = require('./lib/view');
const Menu = require('./lib/menu');
const ga = require('./lib/web_modules/google-analytics');

View.init();
View.extend(Menu);
View.extend(Backbone.View.prototype);

$(document).on('ready', () => {
  Menu.init();
  new Router();
  Backbone.history.start();
});