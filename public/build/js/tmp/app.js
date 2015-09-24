'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    EVTURN = require('./evturn-view'),
    Router = require('./evturn-router');

var router = new Router();
EVTURN.init();
Backbone.history.start();