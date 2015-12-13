'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const ProjectCarousel = React.createClass({
  init(slug) {
    this.ID = slug
    this.spinLogo();
    this.parent = this.refs[this.ID];
    console.log(this.parent.children);
    this.total = $(this.parent.children).length;
    this.counter = null;
    this.cycle();
    this.timer = setInterval(() => this.cycle(), 4000);
  },
  spinLogo() {
    const $webpage = $('html, body');
    const $siteImage = $('.site-logo__image');

    $webpage.animate({ scrollTop: 0 }, 500);
    $siteImage.addClass('spin');
    setTimeout(() => $siteImage.removeClass('spin'), 740);
  },
  reset() {
    clearInterval(this.timer);
    this.removeClasses();
  },
  removeClasses() {
    const slides = $(this.parent).find('carousel__item-image');
    $(slides).removeClass('active');
    $(slides).removeClass('next');
  },
  cycle() {
    const isActiveLast = !!(this.counter === this.total);
    const isNextLast = !!(this.next === this.total);
    const isInitializing = !!(this.counter === null);

    console.log(this);
    if (isInitializing) {
      this.counter = 1;
      this.next = 2;
      return this.nextImage();
    } else if (isActiveLast) {
      this.counter = 1;
      this.next = 2;
    } else if (isNextLast) {
      this.counter += 1;
      this.next = 1;
    } else {
      this.counter += 1;
      this.next = this.counter + 1;
    }
    return this.dissolve();
  },
  nextImage() {
    const active = $(this.parent.children)[this.counter - 1];
    const next = $(this.parent.children)[this.next - 1];

    this.removeClasses();
    $(active).addClass('active');
    $(next).addClass('next');
  },
  dissolve() {
    const active = $(this.parent.children)[this.counter - 1];
    const next = $(this.parent.children)[this.next - 1];

    $(active).fadeTo(1000, 0);
    $(next).fadeTo(1000, 1, () => this.nextImage());
  },
  componentWillUnmount() {
    return this.reset();
  },
  rebind() {
    this.setState({
      name: this.props.name,
      images: this.props.images,
      total: this.props.images.length,
      slug: this.props.slug
    });
    this.init(this.state.slug);
    return this;
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.reset();
      this.rebind();
    }
  },
  componentDidMount() {
    this.setState({
      name: this.props.name,
      images: this.props.images,
      total: this.props.images.length,
      slug: this.props.slug
    });
    this.init(this.props.slug);
  },
  render() {
    return (
      <div className="carousel" ref={ `${this.props.slug}` }>
        { this.props.images.map((result, i) => {
            return (
              <div key={ `${this.props.slug}-${i + 1}` } className="carousel__item-image">
                <img className="img-scale" src={ result } />
              </div>
            );
        }) }
      </div>
    );
  }
});