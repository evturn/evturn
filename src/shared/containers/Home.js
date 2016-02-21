import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { next } from '../actions/video';
import classNames from 'classnames/bind';
import styles from '../../client/assets/less/containers/home.less';
import Spinner from '../components/Spinner';
import VideoPlayer from '../components/VideoPlayer';
import {
  FullPageContainer, SiteImage,
  UnorderedList, ListItem } from '../components/reuseables';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pages } = this.props;
    return (
      <FullPageContainer className={cx('root')}>
      <div className={cx('mobile')}>
        <div className={cx('top', 'header')}>
          <div className={cx('head')} />
          <div className={cx('subhead')} />
        </div>
        <div className={cx('image')}>
          <SiteImage classname={cx('top', 'img-sm')} src='ev-av.png' />
        </div>
        <UnorderedList classname={cx('top')}>{pages.map((page, i) => {
          const { route, name, id } = page;

          if (id !== 1) {
            return (
              <ListItem key={i} className={cx('item')} onClick={() => toggle()}>
                <Link to={route} children={name} />
              </ListItem>
            );
          }
        })}</UnorderedList>
        <div className={cx('overlay')} />
      </div>
      <div onClick={() => next()}>
        <Spinner />
        <VideoPlayer />
        <div className={cx('title')}>
          <SiteImage classname={cx('img-lg')} src='title-white.svg' />
        </div>
      </div>
      </FullPageContainer>
    );
  }
}

Home.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.array,
  open: PropTypes.bool,
  mounted: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    page: state.site.page,
    pages: state.site.pages,
    open: state.site.open,
    mounted: state.site.mounted
  };
}

export default connect(mapStateToProps)(Home);