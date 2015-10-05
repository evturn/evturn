let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Router = require('./router'),
    googleAnalytics = require('google-analytics');

let router = new Router();
EVTURN.init();
Backbone.history.start();