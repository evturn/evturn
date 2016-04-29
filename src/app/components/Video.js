import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mountPlayer, unmountPlayer } from 'actions/video';
import 'less/components/video.less';

class Video extends Component {
  componentDidMount() {
    mountPlayer(this.player)
  }
  componentWillUnmount() {
    unmountPlayer()
  }
  render() {
    return (
      <video
        ref={player => this.player = player}
        poster={require('site-images/transparent.png')}
        type="video/mp4"
        preload="auto"
        autoPlay={true}
        muted={true}
        src={this.props.src}
      />
    );
  }
}

Video.propTypes = {
  src: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    src:  state.video.src
  })
)(Video)