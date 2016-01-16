import React from 'react';
export const AboutHeader = React.createClass({
  getDefaultProps() {
    return {
      image: 'src/assets/images/site/skel.gif'
    };
  },
  render() {
    const {image} = this.props;

    return <div className='header'><img className='about-image' src={image} /></div>;
  }
});

