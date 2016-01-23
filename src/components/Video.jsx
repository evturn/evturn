import React, {Component} from 'react';
import VideoStore from 'stores/VideoStore';
import VideoActions from 'actions/VideoActions';
import styles from 'styles/components/video.less';

export default class Video extends Component {
  constructor(props) {
    super(props);

    this.src = props.src;
    this.ready = props.ready;
  }
  componentWillMount() {
    VideoActions.init(this.props.videos);
  }
  componentDidMount() {
    this.onVideoReady();
    this.onVideoEnded();
    this.onVideoTimeout();
  }
  render() {
    const {...props} = VideoStore.all();

    return <video ref={(player) => this.player = player} {...props} />;
  }
  onVideoReady() {
    this.player.addEventListener('playing', () => {
      VideoActions.onReady();
      this.player.playbackRate = 0.5;
    });
  }
  onVideoEnded() {
    this.player.addEventListener('ended', () => {
      VideoActions.setSrc();
      this.player.playbackRate = 0.5;
    });
  }
  onVideoTimeout() {
    setTimeout(() => {
      if (!this.props.ready) {
        VideoActions.onReady();
      }
    }, 2000);
  }
}