'use strict';
const engine = require('./view-engine');
const hbs = require('./templates');

module.exports = class Menu {
  constructor() {
    this.render();
  }
  setNavOpen() {
    this.$menu.addClass('open');
    this.$body.addClass('nav-is-opened');
  }
  setNavClosed() {
    this.$menu.removeClass('open');
    this.$body.removeClass('nav-is-opened');
  }
  render() {
    const callback = (template) => {
      $('.site-header').html(template);
      this.init();
    };

    engine.load({
      url: hbs.templates.header,
      success: callback
    });
  }
  init() {
    this.$body = $('body');
    this.$navTrigger = $('.site-nav__trigger');
    this.$navOverlay = $('.nav-overlay');
    this.$menuClose = $('.site-menu__close, .site-menu__item a');
    this.$menu = $('.site-menu');

    this.$navTrigger.on('click', () => {
      this.setNavOpen();
    });

    this.$menuClose.on('click', () => {
      this.setNavClosed();
    });

    this.$navOverlay.on('click', () => {
      this.setNavClosed();
    });
  }
};