import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { play, end, load, unmount } from 'actions/video';
import styles from 'css/components/video.less';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.dispatch = props.dispatch;
  }
  componentDidMount() {
    load(this.dispatch);
    this.attachListeners();
  }
  componentWillUnmount() {
    unmount(this.dispatch);
  }
  render() {
    const { src } = this.props;

    return (
      <video
        ref={(player) => this.player = player}
        poster="src/client/assets/images/site/banana-plants.png"
        type="video/mp4"
        preload="auto"
        autoPlay={true}
        muted={true}
        src={src}
      />
    );
  }
  attachListeners() {
    this.listenForVideoPlay();
    this.listenForVideoEnd();
  }
  listenForVideoPlay() {
    this.player.addEventListener(
      'playing', () => {
        play(this.dispatch)
        this.player.playbackRate = this.props.playbackRate;
      }
    );
  }
  listenForVideoEnd() {
    this.player.addEventListener(
      'ended', () => end(this.dispatch)
    );
  }
}

VideoPlayer.propTypes = {
  total: PropTypes.number,
  type: PropTypes.string,
  preload: PropTypes.string,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
  id: PropTypes.number,
  src: PropTypes.string,
  status: PropTypes.string,
  ready: PropTypes.bool,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    total:  state.video.total,
    type: state.video.type,
    preload:  state.video.preload,
    autoPlay: state.video.autoPlay,
    muted:  state.video.muted,
    playbackRate: state.video.playbackRate,
    id: state.video.id,
    src:  state.video.src,
    status: state.video.status,
    ready:  state.video.ready
  }
}

export default connect(mapStateToProps)(VideoPlayer)