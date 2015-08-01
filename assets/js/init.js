EVTURN.init = function() {
  let router = new EVTURN.Router();

  EVTURN.animations.init();
  Backbone.history.start();
};