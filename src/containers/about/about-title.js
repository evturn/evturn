import React from 'react';
export const AboutTitle = React.createClass({
  render() {
    return <div className='about-header'>{this.props.title}</div>;
  }
});