'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

export const ProjectCarousel = React.createClass({
  init(images) {
    this.parent = document.getElementById('carousel');
    this.id = this.parent.dataset.id;
    this.images = images;
    this.total = this.images.length;
    this.counter = null;
    this.cycle();
    this.timer = setInterval(() => this.cycle(), 4000);

    console.log(this.id);
  },
  reset() {
    return clearInterval(this.timer);
  },
  cycle() {
    const isActiveLast = !!(this.counter === this.total);
    const isNextLast = !!(this.next === this.total);
    const isInitializing = !!(this.counter === null);

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
    const all = document.getElementsByClassName('carousel__item-image');
    const active = document.getElementsByClassName('carousel__item-image')[this.counter - 1];
    const next = document.getElementsByClassName('carousel__item-image')[this.next - 1];

    $(all).removeClass('active');
    $(all).removeClass('next');
    $(active).addClass('active');
    $(next).addClass('next');
  },
  dissolve() {
    const active = document.getElementsByClassName('active');
    const next = document.getElementsByClassName('next');

    $(active).fadeTo(1000, 0);
    $(next).fadeTo(1000, 1, () => this.nextImage());
  },
  componentWillUnmount() {
    return this.reset();
  },
  componentWillUpdate() {
    this.reset();
    return this.init(this.props.project.images);
  },
  componentWillReceiveProps() {
    return this.setState({
      images: this.props.project.images,
      id: this.props.project.id,
      name: this.props.project.name
    });
  },
  componentDidMount() {
    return this.init(this.props.project.images);
  },
  render() {
    return (
      <div
        className="carousel"
        id="carousel"
        data-id={ this.props.project.id }>
        {
          this.props.project.images.map((result) => {
            console.log('CAROUSEL RESULT', result);
            return (
              <div
                ref={ (image) => this.image = image }
                key={ result }
                className="carousel__item-image">
                <img className="img-scale" src={ result } />
              </div>
            );
          })
        }
      </div>
    );
  }
});