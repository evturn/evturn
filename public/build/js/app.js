let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Router = require('./router'),
    view = require('./view').init(),
    googleAnalytics = require('google-analytics');

let router = new Router();
Backbone.history.start();