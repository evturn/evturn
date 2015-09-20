"use strict";

(function(app) {
    let Compiler = {};

    EVTURN.navbarTemplate;
    EVTURN.heroTemplate;
    EVTURN.carouselViewTemplate;
    EVTURN.carouselPanelTemplate;
    EVTURN.carouselTechTemplate;
    EVTURN.carouselLinkTemplate;
    EVTURN.carouselImageTemplate;
    EVTURN.carouselPreloaderTemplate;
    EVTURN.thumbnailViewTemplate;
    EVTURN.thumbnailItemTemplate;
    EVTURN.contactViewTemplate;
    EVTURN.linkItemTemplate;
    EVTURN.techViewTemplate;
    EVTURN.techItemTemplate;
    EVTURN.statItemTemplate;
    EVTURN.bioTemplate;
    EVTURN.footerTemplate;

    Compiler.init = function() {
      Compiler.navbarCompiler();
      Compiler.heroCompiler();
      Compiler.carouselViewCompiler();
      Compiler.carouselPanelCompiler();
      Compiler.carouselTechCompiler();
      Compiler.carouselLinkCompiler();
      Compiler.carouselImageCompiler();
      Compiler.carouselPreloaderCompiler();
      Compiler.thumbnailViewCompiler();
      Compiler.thumbnailItemCompiler();
      Compiler.carouselLinkCompiler();
      Compiler.contactViewCompiler();
      Compiler.linkItemCompiler();
      Compiler.techViewCompiler();
      Compiler.techItemCompiler();
      Compiler.statItemCompiler();
      Compiler.bioCompiler();
      Compiler.footerCompiler();
    };

    Compiler.carouselViewCompiler = function() {
      let html = `
          <div class="container carousel">
            <div class="wrapper carousel-wrapper">
              <div class="carousel-wrapper">
                <div class="carousel-image-container">
                  <div class="carousel slide animated bounceInLeft" data-ride="carousel" id="gallery">
                    <div class="carousel-inner">
                      <!-- Images -->
                    </div>
                  </div>
                </div>
                <div class="carousel-panel">
                  <!-- Description -->
                </div>
              </div>
            </div>
          </div>`;

      return EVTURN.carouselViewTemplate = _.template(html);
    };

    Compiler.carouselImageCompiler = function() {
      let html = `
          <div class="item">
            <img class="img-scale gallery-item" src="<%= image %>">
          </div>`;

      return EVTURN.carouselImageTemplate = _.template(html);
    };

    Compiler.carouselPanelCompiler = function() {
      let html = `<div class="panel-inner">
          <div class="btn-container">
            <a class="btn btn-generic" href="#gallery" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
            <a class="btn btn-generic" href="#gallery" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
          </div>
          <div class="project-text">
            <p class="section-title"><%= name %></p>
            <p class="meta"><%= description %></p>
          </div>
          <div class="project-technologies">
            <p class="meta">Built with</p>
            <!-- Technology-items -->
          </div>
          <div class="project-links">
            <!-- Link items -->
          </div>
        </div>`;

        return EVTURN.carouselPanelTemplate = _.template(html);
    };

    Compiler.carouselTechCompiler = function() {
      let html = `
          <div class="technologies-item">
            <i class="<%= icon %>"></i>
            <p class="caption"><%= technology %></p>
          </div>`;

      return EVTURN.carouselTechTemplate = _.template(html);
    };

    Compiler.carouselLinkCompiler = function() {
      let html = `
          <% var url = url ? '<p class="meta"><a href="' + url + '" target="_blank"><i class="fa fa-link"></i></a></p>' : '' %>
            <%= url %>
          <% var repo = repo ? '<p class="meta"><a href="' + repo + '" target="_blank"><i class="fa fa-github"></i></a></p>' : '' %>
          <%= repo %>`;

      return EVTURN.carouselLinkTemplate = _.template(html);
    };

    Compiler.carouselPreloaderCompiler = function() {
      let html = `
          <div id="carousel-preloader">
            <div id="carousel-spinner"></div>
          <img class="carousel-preloader" src="public/dist/img/site/evturn.jpg">
        </div>`;

      return EVTURN.carouselPreloaderTemplate = _.template(html);
    };

    Compiler.heroCompiler = function() {
      let html = `
          <section class="index-header">
            <video id="ev-vid"></video>
            <div class="carousel-index"></div>
            <div class="curtain"></div>
            <div class="container ev-navbar">
              <div class="inner">
                <div class="header-container">
                  <img src="public/dist/img/site/ev-av.png" class="img-scale">
                  <div class="image-overlay"></div>
                </div>
                <div class="headline-container">
                  <h3 class="subhead">Evan Turner</h3>
                  <h3 class="subhead">Web Developer</h3>
                </div>
                <div class="burger-container">
                  <i class="fa fa-bars"></i>
                </div>
              </div>
            </div>
        </section>`;

      return EVTURN.heroTemplate = _.template(html);
    };

    Compiler.navbarCompiler = function() {
      let html = `
          <div class="container ev-navbar">
            <div class="inner">
              <div class="header-container">
                <img src="public/dist/img/site/ev-av.png" class="img-scale">
              </div>
              <div class="burger-container">
                <i class="fa fa-bars"></i>
              </div>
            </div>
          </div>`;

      return EVTURN.navbarTemplate = _.template(html);
    };

    Compiler.thumbnailViewCompiler = function() {
      let html = `
          <div class="container thumbnails">
            <div class="wrapper thumbnails-wrapper">
              <!-- Thumbnails Items-->
            </div>
          </div>`;

      return EVTURN.thumbnailViewTemplate = _.template(html);
    };

    Compiler.thumbnailItemCompiler = function() {
      let html = `
          <div class="thumbnail-item">
            <a href="#work/<%= id %>">
            <div class="thumbnail-inner">
              <div class="image-container">
                <img class="img-scale" src="<%= thumbnail %>">
                <div class="shadow"></div>
              </div>
            </div>
            </a>
          </div>`;

      return EVTURN.thumbnailItemTemplate = _.template(html);
    };

    Compiler.techViewCompiler = function() {
      let html = `
          <div class="container about">
            <div class="wrapper">
              <div class="image-container animated fadeInUp">
                <img class="img-scale" src="public/dist/img/site/tile.png">
              </div>
              <div class="bio-container">
                <p class="section-title">Web Developer</p>
                <div class="paragraphs">
                  <!-- Bio -->
                </div>
              </div>
              <div class="info-container">
                <div class="stats-container">
                  <p class="subhead">Notable Build Tools</p>
                  <div class="technology-items stat-items">
                    <!-- Technologies -->
                  </div>
                </div>
                <div class="stats-container">
                  <p class="subhead">Statistics</p>
                  <div class="statistics stat-items">
                    <!-- Stats -->
                  </div>
                </div>
              </div>
            </div>
          </div>`;

      return EVTURN.techViewTemplate = _.template(html);
    };

    Compiler.techItemCompiler = function() {
      let html= `
          <div class="stat-item">
            <i class="<%= icon %>"></i>
            <p class="specs"><%= technology %></p>
          </div>`;

      return EVTURN.techItemTemplate = _.template(html);
    };

    Compiler.statItemCompiler = function() {
      let html = `
          <div class="stat-item">
            <span class="stat-icon"><i class="<%= icon %>"></i></span>
            <h4 class="stat-count"><%= number %></h4>
            <p><%= text %></p>
          </div>`;


      return EVTURN.statItemTemplate = _.template(html);
    };

    Compiler.bioCompiler = function() {
      let html = `
          <div class="paragraph">
            <p><%= paragraph %></p>
          </div>`;

      return EVTURN.bioTemplate = _.template(html);
    };

    Compiler.contactViewCompiler = function() {
      let html = `
          <div class="container contact animated fadeIn">
            <div class="wrapper">
              <div class="image-container">
                <img class="img-scale" src="public/dist/img/site/city-invert.png">
                <p class="header-subhead">@evturn // evturn [@] gmail [dot] com</p>
              </div>
              <div class="links-container">
                <ul class="link-items">
                  <!-- Links -->
                </div>
              </div>
            </div>
          </div>`;

      return EVTURN.contactViewTemplate = _.template(html);
    };

    Compiler.linkItemCompiler = function() {
      let html = `
          <li class="link-item">
            <a target="_blank" href="<%= url %>"><i class="<%= icon %>"></i></a>
          </li>`;

      return EVTURN.linkItemTemplate = _.template(html);
    };

    Compiler.footerCompiler = function() {
      let html = `
        <footer class="container footer">
          <div class="inner">
            <div class="copyright-container">
              <p>2015 © evturn.com | All Rights Reserved</p>
            </div>
          </div>
        </footer>`;

      return EVTURN.footerTemplate = _.template(html);
    };

    EVTURN.compile = Compiler.init;

    return EVTURN.compile;
})(EVTURN);