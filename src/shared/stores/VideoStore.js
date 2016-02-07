import alt from '../libs/alt';
import VideoActions from 'actions/VideoActions';

class VideoStore {
  constructor() {
    this.bindActions(VideoActions);

    this.playlist = [];
  }
  static all() {
    const internalState = this.getState();
    return internalState;
  }
  init(videos) {
    this.animation = 'animated fadeIn';
    this.autoPlay = true;
    this.muted = true;
    this.type = 'video/mp4';
    this.preload = 'auto';
    this.poster = 'src/client/assets/images/site/banana-plants.png';
    this.playbackRate = 0.5;
    this.playlist = videos;
    this.current = 0;
    this.src = videos[0];
    this.ready = false;
  }
  setSrc() {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current = this.current + 1;
    }

    this.src = this.playlist[this.current];
    this.playbackRate = this.playbackRate;

    this.setState({
      src: this.src,
      playbackRate: this.playbackRate
    });
  }
  onReady() {
    if (!this.ready) {
      this.setState({
        ready: true
      });
    }
  }
}

export default alt.createStore(VideoStore, 'VideoStore');