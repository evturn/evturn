'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const carousel = function() {

  return function(props) {
    let counter = 0;
    let next = 1;
    const total = props.images.length;

    const go = {
      timer: function() {
        this.interval = setInterval(this.cycle, 4000);
      },
      init: function() {
        clearInterval(this.interval);
        this.cycle();
        this.timer();
      },
      cycle: function() {
        const $images = $(document).find('.carousel__item-image');
        const $active = $('.active');
        const $next = $('.next');
        const isActiveLast = !!(counter === total);
        const isNextLast = !!(next === total);

        if (counter === 0) {
          counter = 1;
          next = 2;
          console.log('First image');
        } else if (isActiveLast) {
          counter = 1;
          next = 2;
          console.log('Starting Over');
        } else if (isNextLast) {
          counter += 1;
          next = 1;
          console.log('Next is last image');
        } else {
          counter += 1;
          next = counter + 1;
          console.log('Increment to ' + counter);
        }

        console.log('Currently at ' + counter);

        $active.fadeTo(1000, 0, () => {
          $images.removeClass('active');
        });

        $next.fadeTo(1000, 1, () => {
          $(`#cycle-${counter}`).addClass('active');
        });
        console.log((`#cycle-${counter}`));
        console.log(counter, next, total);
      }
    };
    go.init();
  };
};

export const ProjectCarousel = React.createClass({
  getDefaultProps() {
    return {
      images: ['../images/apps/drive-1.png'],
      counter: 0,
      total: 0
    };
  },
  getInitialState() {
    return {
      images: ['../images/apps/drive-1.png'],
      counter: 0,
      total: 0
    };
  },
  carousel: null,
  componentWillReceiveProps() {
    this.carousel = carousel();
  },
  componentDidMount() {
    this.carousel(this.props);
  },
  componentWillMount() {
    this.carousel = carousel();
  },
  render() {
    return (
      <div className="carousel" >

        { this.props.images.map((result, i) => {
            return (
              <div key={ result } className="carousel__item-image" id={`cycle-${this.props.images.length + 1}`} >
                <img className="img-scale" src={ result } />;
              </div>
            );
          })
        }
      </div>
    );
  }
});