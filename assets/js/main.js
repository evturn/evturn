var ev = ev || {};


$(function() {
  ev.init();
});

var router = new ev.Router();
Backbone.history.start();

new WOW().init();