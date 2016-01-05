export const VideoPlayer = React.createClass({
  getDefaultProps() {
    return {
      animation: 'animated fadeIn',
      autoPlay: true,
      muted: true,
      type: 'video/mp4',
      preload: 'auto',
      poster: 'src/assets/images/site/banana-plants.png',
      playbackRate: 0.5
    };
  },
  getInitialState() {
    return {
      current: 0,
      src: this.props.playlist[0],
      playing: false
    };
  },
  componentDidMount() {
    this.onVideoEnded();
    this.onVideoPlay();
  },
  render() {
    return (
      <div className={this.props.animation}>
        <video
          ref={(player) => this.player = player}
          {...this.props}
          {...this.state} />
      </div>
    );
  },
  onVideoEnded() {
    this.player.addEventListener('ended', () => this.setVideoSrc());
  },
  onVideoPlay() {
      this.player.addEventListener('playing', () => {
        if (!this.state.playing) {
          this.props.onContentLoaded(true);
          this.setState({playing: true});
          this.player.playbackRate = this.props.playbackRate;
        }
      });
  },
  setVideoSrc() {
    if (this.state.current === this.props.playlist.length - 1) {
      this.setState({current: 0});
    } else {
      this.setState({current: this.state.current + 1});
    }

    this.player.src = this.props.playlist[this.state.current];
    this.player.playbackRate = this.props.playbackRate;
  }
});