export const VideoPlayer = React.createClass({
  getDefaultProps() {
    return {
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
      contentReady: this.props.contentReady
    };
  },
  componentDidMount() {
    this.onVideoEnded();
    this.onVideoPlay();
    this.onVideoError();
  },
  componentWillReceiveProps(nextProps) {
    if (this.state.contentReady !== nextProps.contentReady) {
      return this.setState({
        contentReady: nextProps.contentReady
      });
    }
  },
  onVideoEnded() {
    this.player.addEventListener('ended', () => {
      this.setVideoSrc();
    });
  },
  onVideoPlay() {
    this.player.addEventListener('playing', () => {
      this.player.playbackRate = this.props.playbackRate;
      this.props.onContentReady({contentReady: true});
    });
  },
  onVideoError() {
    setTimeout(() => {
      if (!this.state.contentReady) {
        return this.props.onContentReady({contentReady: true});
      }
    }, 5000);
  },
  setVideoSrc() {
    const {playlist} = this.props;
    const {current} = this.state;

    if (current === playlist.length - 1) {
      this.setState({current: 0});
    } else {
      this.setState({current: current + 1});
    }

    this.player.src = playlist[current];
    this.player.playbackRate = this.props.playbackRate;
  },
  render() {
    return (
      <div className='animated fadeIn'>
        <video
          ref={(player) => this.player = player}
          {...this.props}
          {...this.state}
        />
      </div>
    );
  }
});