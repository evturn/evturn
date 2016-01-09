import Spinner from 'components/spinner';
import {VideoPlayer} from 'components/video-player';
import {HomeBanner} from 'containers/home/home-banner';
import {default as __videos} from 'sources/videos';

export default React.createClass({
  getDefaultProps() {
    return {
      title: 'Evan Turner',
      description: 'Web Developer',
      playlist: __videos
    };
  },
  getInitialState() {
    return { ready: false };
  },
  componentDidMount() {
    this.onLoadTimeout();
  },
  render() {
    return (
      <div className='home'>
        <Spinner ready={this.state.ready} />
        <VideoPlayer
          ready={this.state.ready}
          onReady={this.onReady}
          playlist={this.props.playlist}
        />
        <HomeBanner
          title={this.props.title}
          description={this.props.description}
        />
      </div>
    );
  },
  onReady(readyState) {
    this.setState({ ready: readyState });
  },
  onLoadTimeout() {
    setTimeout(() => {
      if (!this.state.ready) {
        this.setState({ ready: true });
      }
    }, 5000);
  }
});