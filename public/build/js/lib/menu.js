'use strict';
module.exports = () => {
  const $body = $('body');
  const $navTrigger = $('.site-nav__trigger');
  const $menuClose = $('.site-menu__close, .site-menu__item a');
  const $menu = $('.site-menu');

  $navTrigger.on('click', () => {
    $menu.addClass('open');
    $body.addClass('nav-is-opened');
  });

  $menuClose.on('click', () => {
    $menu.removeClass('open');
    $body.removeClass('nav-is-opened');
  });
};