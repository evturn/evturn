export default React.createClass({
  beginPlayback() {
    const {current} = this.state;
    const {playlist} = this.props;

    this.player.src = playlist[current];
    this.player.play;
    this.player.playbackRate = 0.5;
  },
  onVideoEnded() {
    this.player.addEventListener('ended', () => {
      this.setNextVideo();
    });
  },
  onVideoPlay() {
    this.player.addEventListener('playing', () => {
      this.setState({playing: true});
    });
  },
  setNextVideo() {
    const {playlist} = this.props;
    const {current} = this.state;

    if (current === playlist.length - 1) {
      this.setState({current: 0});
    } else {
      this.setState({current: current + 1});
    }

    this.beginPlayback();
  },
  getDefaultProps() {
    return {
      autoPlay: true,
      muted: true,
      type: 'video/mp4',
      preload: 'auto',
      poster: 'src/assets/images/site/banana-plants.png'
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
    this.beginPlayback();
  },
  render() {
    return (
      <div className='animated fadeIn'>
        <video
          ref={(player) => this.player = player}
          {...this.props}
          {...this.state}>
        </video>
      </div>
    );
  }
});