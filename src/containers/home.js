import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Video from 'components/Video';
import VideoActions from 'actions/VideoActions';
import VideoStore from 'stores/VideoStore';
import __videos from 'sources/videos';
import {HomeBanner} from 'containers/home/home-banner';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.videos = __videos;
    this.title = 'Evan Turner';
    this.description = 'Web Developer';
  }
  render() {
    return (
      <div className='home'>
        <AltContainer stores={[VideoStore]}>
          <Video videos={this.videos}/>
        </AltContainer>
        <HomeBanner
          title={this.title}
          description={this.description}
        />
      </div>
    );
  }
}
