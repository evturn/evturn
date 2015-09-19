"use strict";

(function(app) {
    let Compiler = {};

    EVTURN.heroTemplate;

    EVTURN.contactViewTemplate;
    EVTURN.linkItemTemplate;

    EVTURN.techViewTemplate;
    EVTURN.techItemTemplate;

    EVTURN.statItemTemplate;
    EVTURN.bioTemplate;

    Compiler.init = function() {
      Compiler.heroCompiler();

      Compiler.contactViewCompiler();
      Compiler.linkItemCompiler();

      Compiler.techViewCompiler();
      Compiler.techItemCompiler();

      Compiler.statItemCompiler();
      Compiler.bioCompiler();
    };

    Compiler.heroCompiler = function() {
      let html = `
          <div class="container animated fadeInUp">
            <div class="wrapper">
              <img class="img-scale" src="public/dist/img/hero-avatar.png">
              <p class="header-subhead">Evan Turner // Development</p>
            </div>
          </div>`;

      return EVTURN.heroTemplate = _.template(html);
    };

    Compiler.techViewCompiler = function() {
      let html = `
          <div class="container about">
            <div class="wrapper">
              <div class="image-container animated fadeInUp">
                <img class="img-scale" src="public/dist/img/tile.png">
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
                <img class="img-scale" src="public/dist/img/city-invert.png">
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

    EVTURN.compile = Compiler.init;

    return EVTURN.compile;
})(EVTURN);