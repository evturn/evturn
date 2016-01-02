import {AboutInfo} from 'containers/about/about-info';
import {AboutStats} from 'containers/about/about-stats';
import {AboutTech} from 'containers/about/about-tech';
import {AboutTitle} from 'containers/about/about-title';

export default React.createClass({
  getDefaultProps() {
    return {
      bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
      bioTitle: 'Development',
      image: 'src/assets/images/site/skel.gif'
    };
  },
  render() {
    const {bio, bioTitle, image} = this.props;

    return (
      <div className='about'>
        <div className='header'>
          <img className='about-image' src={image} />
        </div>
        <div className='bio'>
          <AboutTitle title={bioTitle} />
          <div className='paragraph'>{bio}</div>
        </div>
        <AboutInfo>
          <AboutTech />
          <AboutStats />
        </AboutInfo>
      </div>
    );
  }
});
