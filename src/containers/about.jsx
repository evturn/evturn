import {CounterItems as AboutStat} from 'components/icon-count';
import {TechItems as AboutTech} from 'components/icon-tech';
import {default as __stats} from 'sources/stats';
import {default as __tech} from 'sources/tech';

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
  getInitialState() {
    return {
      bio: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
      stats: __stats,
      tech: this.getTechItems(),
      bioTitle: 'Development',
      techTitle: 'Tools',
      statsTitle: 'Statistics'
    };
  },
  render() {
    const {bio, tech, stats, bioTitle, techTitle, statsTitle} = this.state;

    return (
      <div className='about'>
        <div className='placeholder'>
          <img className='about-image' src='src/images/site/skel.gif' />
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
