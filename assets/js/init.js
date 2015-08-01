EVTURN.init = function() {
  let router = new EVTURN.Router();
  EVTURN.preloader();
  Backbone.history.start();
};

EVTURN.preloader = function() {

  $(window).load(function() {
    let $container = $('#preloader');
    let $image = $('.preloader');

    $container.delay(500).fadeOut();
    $image.delay(600).fadeOut(600);
  });

};