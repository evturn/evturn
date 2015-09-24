'use strict';

var _ = require('underscore'),
    EVTURN = require('./evturn-view');

var Compiler = {};

Compiler.init = function () {
  EVTURN.navTemplate = Compiler.navCompiler();
  EVTURN.navbarTemplate = Compiler.navbarCompiler();
  EVTURN.heroTemplate = Compiler.heroCompiler();
  EVTURN.carouselViewTemplate = Compiler.carouselViewCompiler();
  EVTURN.carouselPanelTemplate = Compiler.carouselPanelCompiler();
  EVTURN.carouselTechTemplate = Compiler.carouselTechCompiler();
  EVTURN.carouselLinkTemplate = Compiler.carouselLinkCompiler();
  EVTURN.carouselNavbarTemplate = Compiler.carouselNavbarCompiler();
  EVTURN.carouselImageTemplate = Compiler.carouselImageCompiler();
  EVTURN.thumbnailViewTemplate = Compiler.thumbnailViewCompiler();
  EVTURN.thumbnailItemTemplate = Compiler.thumbnailItemCompiler();
  EVTURN.contactViewTemplate = Compiler.contactViewCompiler();
  EVTURN.linkItemTemplate = Compiler.linkItemCompiler();
  EVTURN.techViewTemplate = Compiler.techViewCompiler();
  EVTURN.techItemTemplate = Compiler.techItemCompiler();
  EVTURN.statItemTemplate = Compiler.statItemCompiler();
  EVTURN.bioTemplate = Compiler.bioCompiler();
  EVTURN.footerTemplate = Compiler.footerCompiler();
};

Compiler.carouselViewCompiler = function () {
  var html = '\n        <div class="container carousel">\n          <div class="carousel-image-container">\n            <div class="carousel slide animated bounceInLeft" data-ride="carousel" id="gallery">\n              <div class="carousel-inner">\n                <!-- Images -->\n              </div>\n            </div>\n          </div>\n        <div class="container info">\n          <div class="inner">\n            <div class="carousel-panel">\n              <!-- Description -->\n            </div>\n          </div>\n        </div>\n      </div>';

  return _.template(html);
};

Compiler.carouselImageCompiler = function () {
  var html = '\n        <div class="item">\n          <img class="img-scale gallery-item" src="<%= image %>">\n        </div>';

  return _.template(html);
};

Compiler.carouselPanelCompiler = function () {
  var html = '\n        <div class="panel-inner">\n          <div class="title-container">\n            <p class="section-title"><%= name %></p>\n          </div>\n          <div class="project-text">\n            <p class="meta"><%= description %></p>\n          </div>\n          <div class="project-technologies">\n            <!-- Technology-items -->\n          </div>\n          <div class="project-links">\n            <!-- Link items -->\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.carouselTechCompiler = function () {
  var html = '\n        <div class="technologies-item">\n          <i class="<%= icon %>"></i>\n          <p class="caption"><%= technology %></p>\n        </div>';

  return _.template(html);
};

Compiler.carouselLinkCompiler = function () {
  var html = '\n        <% var url = url ? \'<p class="meta"><a href="\' + url + \'" target="_blank"><i class="fa fa-link"></i></a></p>\' : \'\' %>\n          <%= url %>\n        <% var repo = repo ? \'<p class="meta"><a href="\' + repo + \'" target="_blank"><i class="fa fa-github"></i></a></p>\' : \'\' %>\n        <%= repo %>';

  return _.template(html);
};

Compiler.navCompiler = function () {
  var html = '\n        <div class="container nav-content">\n          <div class="inner">\n            <div class="nav-container">\n              <div class="nav-inner">\n                <div class="header-container">\n                  <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>\n                  <div class="image-overlay"></div>\n                </div>\n                <div class="close-container">\n                  <i class="fa fa-times"></i>\n                </div>\n              </div>\n            </div>\n            <div class="links-container">\n              <div data-view="work" class="nav-item nav-work">\n                <h4><a class="nav-link" href="#work">Work</a></h4>\n              </div>\n              <div data-view="about" class="nav-item nav-about">\n                <h4><a class="nav-link" href="#about">About</a></h4>\n              </div>\n              <div data-view="contact" class="nav-item nav-contact">\n                <h4><a class="nav-link" href="#contact">Contact</a></h4>\n              </div>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.heroCompiler = function () {
  var html = '\n        <section class="index-header">\n          <video id="ev-vid" poster="public/dist/img/site/vid-poster.gif" type="video/mp4">\n          </video>\n          <div class="carousel-index"></div>\n          <div class="curtain"></div>\n          <div class="container ev-navbar">\n            <div class="inner">\n              <div class="header-container">\n                <a href="/#work"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>\n                <div class="image-overlay"></div>\n              </div>\n              <div class="headline-container">\n                <h3 class="subhead">Evan Turner</h3>\n                <h3 class="subhead">Web Developer</h3>\n              </div>\n              <div class="burger-container">\n                <i class="fa fa-bars"></i>\n              </div>\n            </div>\n          </div>\n      </section>';

  return _.template(html);
};

Compiler.navbarCompiler = function () {
  var html = '\n        <div class="container ev-navbar">\n          <div class="inner">\n            <div class="header-container">\n              <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>\n              <div class="image-overlay"></div>\n            </div>\n            <div class="burger-container">\n              <i class="fa fa-bars"></i>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.carouselNavbarCompiler = function () {
  var html = '\n        <div class="container ev-navbar">\n          <div class="inner">\n            <div class="header-container">\n              <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale" id="carousel-logo"></a>\n              <div class="image-overlay"></div>\n              <div id="carousel-preloader">\n                <div id="carousel-spinner"></div>\n              </div>\n            </div>\n            <div class="burger-container">\n              <i class="fa fa-bars"></i>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.thumbnailViewCompiler = function () {
  var html = '\n        <div class="container thumbnails">\n          <div class="wrapper thumbnails-wrapper">\n            <!-- Thumbnails Items-->\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.thumbnailItemCompiler = function () {
  var html = '\n        <div class="thumbnail-item">\n          <a href="#work/<%= id %>">\n          <div class="thumbnail-inner">\n            <div class="image-container">\n              <img class="img-scale" src="<%= thumbnail %>">\n              <div class="shadow"></div>\n            </div>\n          </div>\n          </a>\n        </div>';

  return _.template(html);
};

Compiler.techViewCompiler = function () {
  var html = '\n        <div class="container about">\n          <div class="wrapper">\n            <div class="image-container animated fadeInUp">\n              <img class="img-scale" src="public/dist/img/site/tile.png">\n            </div>\n            <div class="bio-container">\n              <p class="section-title">Web Development</p>\n              <div class="paragraphs">\n                <!-- Bio -->\n              </div>\n            </div>\n            <div class="info-container">\n              <div class="stats-container">\n                <p class="subhead">Notable Build Tools</p>\n                <div class="technology-items stat-items">\n                  <!-- Technologies -->\n                </div>\n              </div>\n              <div class="stats-container">\n                <p class="subhead">Statistics</p>\n                <div class="statistics stat-items">\n                  <!-- Stats -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.techItemCompiler = function () {
  var html = '\n        <div class="stat-item">\n          <span class="stat-icon"><i class="<%= icon %>"></i></span>\n          <p class="meta"><%= technology %></p>\n        </div>';

  return _.template(html);
};

Compiler.statItemCompiler = function () {
  var html = '\n        <div class="stat-item">\n          <span class="stat-icon"><i class="<%= icon %>"></i></span>\n          <h5 class="stat-count"><%= number %></h5>\n          <p class="meta"><%= text %></p>\n        </div>';

  return _.template(html);
};

Compiler.bioCompiler = function () {
  var html = '\n        <div class="paragraph">\n          <p><%= paragraph %></p>\n        </div>';

  return _.template(html);
};

Compiler.contactViewCompiler = function () {
  var html = '\n        <div class="container contact animated fadeIn">\n          <div class="wrapper">\n            <div class="image-container">\n              <img class="img-scale" src="public/dist/img/site/city-invert.png">\n              <p class="header-subhead">@evturn // evturn [@] gmail [dot] com</p>\n            </div>\n            <div class="links-container">\n              <ul class="link-items">\n                <!-- Links -->\n              </div>\n            </div>\n          </div>\n        </div>';

  return _.template(html);
};

Compiler.linkItemCompiler = function () {
  var html = '\n        <li class="link-item">\n          <a target="_blank" href="<%= url %>"><i class="<%= icon %>"></i></a>\n        </li>';

  return _.template(html);
};

Compiler.footerCompiler = function () {
  var html = '\n      <footer class="container footer">\n        <div class="inner">\n          <div class="copyright-container">\n            <p>2015 © evturn.com | All Rights Reserved</p>\n          </div>\n        </div>\n      </footer>';

  return _.template(html);
};

module.exports = Compiler;