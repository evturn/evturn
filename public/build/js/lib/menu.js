'use strict';
module.exports = () => {
  const $body = $('body');
  const $navTrigger = $('.site-nav__trigger');
  const $navOverlay = $('.nav-overlay');
  const $menuClose = $('.site-menu__close, .site-menu__item a');
  const $menu = $('.site-menu');

  const setNavOpen = () => {
    $menu.addClass('open');
    $body.addClass('nav-is-opened');
  };

  const setNavClosed = () => {
    $menu.removeClass('open');
    $body.removeClass('nav-is-opened');
  };

  $navTrigger.on('click', () => {
    setNavOpen();
  });

  $menuClose.on('click', () => {
    setNavClosed();
  });

  $navOverlay.on('click', () => {
    setNavClosed();
  });
};