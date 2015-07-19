EVTURN.init = function() {
  var router = new EVTURN.Router();

  EVTURN.animations.init();
  Backbone.history.start();
};