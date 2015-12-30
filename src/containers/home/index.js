'use strict';
import React from 'react';
import {default as __videos} from 'sources/videos';
import {default as Video} from 'components/video';

export default React.createClass({
  getDefaultProps() {
    return {
      title: 'Evan Turner',
      description: 'Web Developer',
      videos: __videos
    };
  },
  render() {
    const {
      title,
      description,
      videos
    } = this.props;

    return (
      <div className='home'>
        <Video playlist={videos}/>
        <div className='home-banner'>
          <h3 className='home-title'>{title}</h3>
          <h3 className='home-description'>{description}</h3>
        </div>
      </div>
    );
  }
});