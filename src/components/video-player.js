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
      ready: this.props.ready
    };
  },
  componentDidMount() {
    this.addListeners();
  },
  componentWillReceiveProps(nextProps) {
    this.setState({ ready: nextProps.ready });
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
  addListeners() {
    this.player.addEventListener('ended', () => this.setVideoSrc());
    this.player.addEventListener('playing', () => {
      if (!this.state.ready) {
        this.props.onReady(true);
        this.player.playbackRate = this.props.playbackRate;
      }
    });
  },
  setVideoSrc() {
    if (this.state.current === this.props.playlist.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }

    this.player.src = this.props.playlist[this.state.current];
    this.player.playbackRate = this.props.playbackRate;
  }
});