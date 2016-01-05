import {VideoPlayer} from 'components/video-player';
import {HomeBanner} from 'containers/home/home-banner';
import {default as __videos} from 'sources/videos';

export const Home = React.createClass({
  getDefaultProps() {
    return {
      title: 'Evan Turner',
      description: 'Web Developer',
      playlist: __videos
    };
  },
  getInitialState() {
    return { spinning: this.props.spinning };
  },
  onContentLoaded(readyState) {
    this.props.onInitialLoad(readyState);
  },
  render() {
    return (
      <div className='home'>
        <VideoPlayer
          playlist={this.props.playlist}
          onContentLoaded={this.onContentLoaded} />
        <HomeBanner
          contentReady={this.props.spinning}
          title={this.props.title}
          description={this.props.description} />
      </div>
    );
  }
});