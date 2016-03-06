import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SiteImage } from '../components/reuseables';
import classNames from 'classnames/bind';
import styles from '../../client/less/containers/about.less';

const cx = classNames.bind(styles);

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bio, featuredTech } = this.props;

    return (
      <div className={cx('root')}>
        <div className={cx('av')}>
          <div className={cx('image')}><SiteImage src="ev-av.png" /></div>
        </div>
        <div className={cx('details')}>
          <div className={cx('bio')}>
            <div className={cx('title')}>Development</div>
            <div className={cx('paragraph')}>{bio}</div>
          </div>
          <div className={cx('tech')}>
            <ul className={cx('list')}>{featuredTech.map(item =>
              <li key={item.icon} className={cx('item')}>
                <span className={cx('icon', item.icon)} />
              </li>
            )}</ul>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bio: PropTypes.string,
  featuredTech: PropTypes.array
};

function mapStateToProps(state) {
  return {
    featuredTech: state.site.about.featuredTech,
    bio: state.site.about.bio
  };
}

export default connect(mapStateToProps)(About);