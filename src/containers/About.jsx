import React from 'react';
import TechIcons from 'components/TechIcons';
import StatCounters from 'components/StatCounters';
import __tech from 'sources/tech';
import __stats from 'sources/stats';
import classNames from 'classnames/bind';
import styles from 'styles/containers/about.less';

const cx = classNames.bind(styles);

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.image = 'src/assets/images/site/skel.gif';
    this.text = 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';
    this.title = 'Development';
    this.techTitle = 'Tools';
    this.statsTitle = 'Statistics';
    this.tech = __tech;
    this.stats = __stats;
  }
  render() {
    return (
      <div className={cx('about')}>
        <div className={cx('header')}><img className={cx('about-image')} src={this.image} /></div>
        <div className={cx('bio')}>
          <div className={cx('about-header')}>{this.title}</div>
          <div className={cx('paragraph')}>{this.text}</div>
        </div>
        <div className={cx('about-info')}>
          {this.renderTech()}
          {this.renderStats()}
        </div>
      </div>
    );
  }
  getTechItems() {
    return this.tech.filter((obj) => {
      return obj.featured;
    }).map((obj) => {
      return obj;
    });
  }
  renderTech() {
    const tech = this.getTechItems();

    return (
      <div className={cx('about-tech')}>
        <div className={cx('about-header')}>{this.techTitle}</div>
        <TechIcons items={tech} width={'item-20'} />
      </div>
    );
  }
  renderStats() {
    return (
      <div className={cx('about-stats')}>
        <div className={cx('about-header')}>{this.statsTitle}</div>
        <StatCounters items={this.stats} />
      </div>
    );
  }
}
