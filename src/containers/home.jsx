import {default as Video} from 'components/video';
import {HomeBanner} from 'containers/home/home-banner';
import {default as __videos} from 'sources/videos';

export const Home = React.createClass({
  getDefaultProps() {
    return {
      title: 'Evan Turner',
      description: 'Web Developer',
      videos: __videos
    };
  },
  render() {
    const {title, description, videos} = this.props;

    return (
      <div className='home'>
        <Video playlist={videos} />
        <HomeBanner title={title} description={description} />
      </div>
    );
  }
});