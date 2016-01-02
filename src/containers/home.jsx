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
  componentDidMount() {
    setTimeout(() => {
      if (!this.state.contentReady) {
        return this.setState({contentReady: true});
      }
    }, 4000);
  },
  render() {
    const {title, description, playlist} = this.props;
    const {page, contentReady} = this.state;

    return (
      <div className='home'>
        <Spinner page={page} contentReady={contentReady} onContentReady={this.onContentReady} />
        <VideoPlayer playlist={playlist} contentReady={contentReady} onContentReady={this.onContentReady} />
        <HomeBanner title={title} description={description} />
      </div>
    );
  }
});