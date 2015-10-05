let Handlebars = require('handlebars');

  let Compiler = {};

  Compiler.carouselView = () => {
    let html = `
        <div class="container carousel">
          <div class="image-container">
            <div class="carousel animated fadeIn" id="gallery">
              <div class="carousel-inner">
                <!-- Images -->
              </div>
            </div>
          </div>
        <div class="container info">
          <div class="inner">
            <div class="carousel-panel">
              <!-- Description -->
            </div>
          </div>
        </div>
      </div>`;

    return Handlebars.compile(html);
  };

  Compiler.carouselImage = () => {
    let html = `
        <div class="item">
          <img class="img-scale gallery-item" src="{{ image }}">
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.carouselPanel = () => {
    let html = `
        <div class="panel-inner">
          <div class="title-container">
            <p class="section-title">{{name}}</p>
          </div>
          <div class="project-text">
            <p class="meta">{{{description}}}</p>
          </div>
          <div class="project-technologies">
            <!-- Technology-items -->
          </div>
          <div class="project-links">
            <!-- Link items -->
          </div>
        </div>`;

      return Handlebars.compile(html);
  };

  Compiler.carouselTech = () => {
    let html = `
        <div class="technologies-item">
          <i class="{{icon}}"></i>
          <p class="caption">{{technology}}</p>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.carouselLink = () => {
    let html = `
        {{#if url}}
          <p class="meta"><a href="{{url}}" target="_blank"><i class="fa fa-link"></i></a></p>
        {{/if}}
        {{#if repo}}
          <p class="meta"><a href="{{repo}}" target="_blank"><i class="fa fa-github"></i></a></p>
        {{/if}}`;

    return Handlebars.compile(html);
  };

  Compiler.nav = () => {
    let html = `
        <div class="container nav-content">
          <div class="inner">
            <div class="nav-container">
              <div class="nav-inner">
                <div class="header-container">
                  <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>
                  <div class="image-overlay"></div>
                </div>
                <div class="close-container">
                  <i class="fa fa-times"></i>
                </div>
              </div>
            </div>
            <div class="links-container">
              <div data-view="work" class="nav-item nav-work">
                <h4><a class="nav-link" href="#work">Work</a></h4>
              </div>
              <div data-view="about" class="nav-item nav-about">
                <h4><a class="nav-link" href="#about">About</a></h4>
              </div>
              <div data-view="contact" class="nav-item nav-contact">
                <h4><a class="nav-link" href="#contact">Contact</a></h4>
              </div>
            </div>
          </div>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.hero = () => {
    let html = `
        <section class="index-header">
          <video id="ev-vid" poster="public/dist/img/site/vid-poster.gif" type="video/mp4">
          </video>
          <div class="carousel-index"></div>
          <div class="curtain"></div>
          <div class="container ev-navbar">
            <div class="inner">
              <div class="header-container">
                <a href="/#work"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>
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

    return Handlebars.compile(html);
  };

  Compiler.navbar = () => {
    let html = `
        <div class="container ev-navbar">
          <div class="inner">
            <div class="header-container">
              <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale"></a>
              <div class="image-overlay"></div>
            </div>
            <div class="burger-container">
              <i class="fa fa-bars"></i>
            </div>
          </div>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.carouselNavbar = () => {
    let html = `
        <div class="container ev-navbar">
          <div class="inner">
            <div class="header-container">
              <a href="/"><img src="public/dist/img/site/ev-av.png" class="img-scale" id="carousel-logo"></a>
              <div class="image-overlay"></div>
              <div id="carousel-preloader">
                <div id="carousel-spinner"></div>
              </div>
            </div>
            <div class="burger-container">
              <i class="fa fa-bars"></i>
            </div>
          </div>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.thumbnailView = () => {
    let html = `
        <div class="container thumbnails">
          <div class="wrapper thumbnails-wrapper">
            <!-- Thumbnails Items-->
          </div>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.thumbnailItem = () => {
    let html = `
        <div class="thumbnail-item">
          <a href="#work/{{id}}">
          <div class="thumbnail-inner">
            <div class="image-container">
              <img class="img-scale" src="{{thumbnail}}">
              <div class="shadow"></div>
            </div>
          </div>
          </a>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.techView = () => {
    let html = `
        <div class="container about">
          <div class="wrapper">
            <div class="image-container animated fadeInUp">
              <img class="img-scale" src="public/dist/img/site/tile.png">
            </div>
            <div class="bio-container">
              <p class="section-title">Web Development</p>
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

    return  Handlebars.compile(html);
  };

  Compiler.techItem = () => {
    let html= `
        <div class="stat-item">
          <span class="stat-icon"><i class="{{icon}}"></i></span>
          <p class="meta">{{technology}}</p>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.statItem = () => {
    let html = `
        <div class="stat-item">
          <span class="stat-icon"><i class="{{icon}}"></i></span>
          <h5 class="stat-count">{{number}}</h5>
          <p class="meta">{{text}}</p>
        </div>`;


    return Handlebars.compile(html);
  };

  Compiler.bio = () => {
    let html = `
        <div class="paragraph">
          <p>{{paragraph}}</p>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.contactView = () => {
    let html = `
        <div class="container contact animated fadeIn">
          <div class="image-container">
            <img class="img-scale" src="public/dist/img/site/city-invert.png">
          </div>
          <div class="wrapper">
            <div class="links-container">
              <ul class="link-items">
                <!-- Links -->
              </div>
            </div>
          </div>
        </div>`;

    return Handlebars.compile(html);
  };

  Compiler.linkItem = () => {
    let html = `
        <li class="link-item">
          <a target="_blank" href="{{url}}"><i class="{{icon}}"></i></a>
        </li>`;

    return Handlebars.compile(html);
  };

  Compiler.footer = () => {
    let html = `
      <footer class="container footer">
        <div class="inner">
          <div class="copyright-container">
            <p>2015 © evturn.com | All Rights Reserved</p>
          </div>
        </div>
      </footer>`;

    return Handlebars.compile(html);
  };

module.exports = Compiler;