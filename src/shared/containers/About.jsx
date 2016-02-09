import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TechIcons from 'components/TechIcons';
import StatCounters from 'components/StatCounters';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);

    this.text = 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.';
  }
  render() {
    return (
      <div className={cx('about')}>
        <div className={cx('header')}>
          <img className={cx('about-image')} src="src/client/assets/images/site/skel.gif" />
        </div>
        <div className={cx('bio')}>
          <div className={cx('about-header')}>Development</div>
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
    return this.props.tech.filter((obj) => {
      return obj.featured;
    }).map((obj) => {
      return obj;
    });
  }
  renderTech() {
    const tech = this.getTechItems();

    return (
      <div className={cx('about-tech')}>
        <div className={cx('about-header')}>Tools</div>
        <TechIcons items={tech} width={'item-20'} />
      </div>
    );
  }
  renderStats() {
    return (
      <div className={cx('about-stats')}>
        <div className={cx('about-header')}>Statistics</div>
        <StatCounters items={this.props.stats} />
      </div>
    );
  }
}

About.propTypes = {
  tech: PropTypes.array,
  stats: PropTypes.array
};

function mapStateToProps(state) {
  return {
    tech: state.site.tech,
    stats: state.site.stats
  };
}

export default connect(mapStateToProps)(About);