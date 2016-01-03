import {Spinner} from 'components/spinner';
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
    return {
      contentReady: false,
      page: this.props.page
    };
  },
  onContentReady(readyState) {
    return this.setState(readyState);
  },
  render() {
    const {title, description, playlist} = this.props;
    const {page, contentReady} = this.state;

    return (
      <div className='home'>
        <Spinner
          page={page}
          contentReady={contentReady}
        />
        <VideoPlayer
          playlist={playlist}
          contentReady={contentReady}
          onContentReady={this.onContentReady}
        />
        <HomeBanner
          contentReady={contentReady}
          title={title}
          description={description}
        />
      </div>
    );
  }
});