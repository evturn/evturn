'use strict';

const Menu = exports = module.exports = {
  init: function init() {
    this.$body = $('body');
    this.$siteHeader = $('.site-header');

    this.render();
  },
  addListeners: function addListeners() {
    this.$navTrigger = $('.site-nav__trigger');
    this.$navOverlay = $('.nav-overlay');
    this.$menuClose = $('.site-menu__close, .site-menu__item a');
    this.$menu = $('.site-menu');

    this.$navTrigger.on('click', () => this.setNavOpen());

    this.$menuClose.on('click', () => this.setNavClosed());

    this.$navOverlay.on('click', () => this.setNavClosed());
  },
  setNavOpen: function setNavOpen() {
    this.$menu.addClass('open');
    this.$body.addClass('nav-is-opened');
  },
  setNavClosed: function setNavClosed() {
    this.$menu.removeClass('open');
    this.$body.removeClass('nav-is-opened');
  },
  render: function render() {
    const callback = (template) => {
      this.$siteHeader.html(template);
      this.addListeners();
      return this;
    };

    this.load({
      url: this.templates.header,
      callback: callback
    });
  },
};