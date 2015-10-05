let $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Router = require('./router'),
    googleAnalytics = require('google-analytics');


require('./view').init();
let router = new Router();
Backbone.history.start();