import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFeaturedTech } from 'actions/site';
import TechIcons from 'components/TechIcons';
import StatCounters from 'components/StatCounters';
import classNames from 'classnames/bind';
import styles from 'css/containers/about.less';

const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={cx('about')}>
        <div className={cx('header')}>
          <img className={cx('about-image')} src="src/client/assets/images/site/skel.gif" />
        </div>
        <div className={cx('bio')}>
          <div className={cx('about-header')}>Development</div>
          <div className={cx('paragraph')}>{this.props.bio}</div>
        </div>
        <div className={cx('about-info')}>
          <div className={cx('about-tech')}>
            <div className={cx('about-header')}>Tools</div>
            <TechIcons items={this.props.featuredTech} width={'item-20'} />
          </div>
          <div className={cx('about-stats')}>
            <div className={cx('about-header')}>Statistics</div>
            <StatCounters items={this.props.stats} />
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  stats: PropTypes.array,
  bio: PropTypes.string,
  featuredTech: PropTypes.array
};

function mapStateToProps(state) {
  return {
    featuredTech: state.site.about.featuredTech,
    stats: state.site.about.stats,
    bio: state.site.about.bio
  };
}

export default connect(mapStateToProps)(About);