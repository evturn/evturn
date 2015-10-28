const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Router = require('./router');
const view = require('./view').init();
const googleAnalytics = require('google-analytics');

let router = new Router();
Backbone.history.start();