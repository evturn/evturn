import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mountVideoPlayer, unmountVideoPlayer } from 'actions/video';
import 'less/components/video.less';

class VideoPlayer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(mountVideoPlayer(this.player));
  }
  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(unmountVideoPlayer());
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
  src: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    src:  state.video.src
  })
)(VideoPlayer)