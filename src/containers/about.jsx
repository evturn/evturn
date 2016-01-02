import {CounterItems as AboutStat} from 'components/icon-count';
import {TechItems as AboutTech} from 'components/icon-tech';
import {default as __stats} from 'sources/stats';
import {default as __tech} from 'sources/tech';
import {getRelativePath} from 'helpers';

const AboutHeader = React.createClass({
  render() {
    return <div className='about-header'>{this.props.title}</div>;
  }
});

export default React.createClass({
  getTechItems() {
    return __tech.filter((obj) => {
      return obj.featured;
    }).map((obj) => {
      return obj;
    });
  },
  getDefaultProps() {
    return {
      bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
      stats: __stats,
      bioTitle: 'Development',
      techTitle: 'Tools',
      statsTitle: 'Statistics',
      image: 'src/assets/images/site/skel.gif'
    };
  },
  render() {
    const {bio, stats, bioTitle, techTitle, statsTitle, image} = this.props;
    const tech = this.getTechItems();

    return (
      <div className='about'>
        <div className='placeholder'>
          <img className='about-image' src={image} />
        </div>
        <div className='bio'>
        <AboutHeader title={bioTitle} />
          <div className='paragraph'>{bio}</div>
        </div>

        <div className='about-info'>
          <div className='about-tech'>
            <AboutHeader title={techTitle} />
            <AboutTech items={tech} width={'item-20'} />
          </div>
          <div className='about-stats'>
            <AboutHeader title={statsTitle} />
            <AboutStat items={stats} width={'item-50'} />
          </div>
        </div>

      </div>
    );
  }
});
