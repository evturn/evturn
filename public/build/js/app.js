let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Router = require('./router');

let router = new Router();
EVTURN.init();
Backbone.history.start();