import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mountVideoPlayer, unmountVideoPlayer } from 'actions/video';
import 'less/components/video.less';

class VideoPlayer extends Component {
  componentDidMount() {
    mountVideoPlayer(this.player);
  }
  componentWillUnmount() {
    unmountVideoPlayer();
  }
  render() {
    const { src } = this.props;

    return (
      <video
        ref={player => this.player = player}
        poster={require('site-images/transparent.png')}
        type="video/mp4"
        preload="auto"
        autoPlay={true}
        muted={true}
        src={src}
      />
    );
  }
}

VideoPlayer.propTypes = {
  total: PropTypes.number,
  playbackRate: PropTypes.number,
  id: PropTypes.number,
  src: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    total:  state.video.total,
    playbackRate: state.video.playbackRate,
    id: state.video.id,
    src:  state.video.src
  })
)(VideoPlayer)