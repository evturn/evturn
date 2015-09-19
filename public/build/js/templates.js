"use strict";

(function(app) {
    let Compiler = {};

    EVTURN.contactViewTemplate;
    EVTURN.linkItemTemplate;

    Compiler.init = function() {
      Compiler.contactViewCompiler();
      Compiler.linkItemCompiler();
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