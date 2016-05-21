import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import css from 'less/containers/about.less'

const cx = classNames.bind(css)

class About extends Component {
  render() {
    const { bio, featuredTech, links } = this.props

    return (
      <div className={cx('root')}>

        <div className={cx('about')}>
          <div className={cx('av')}>
            <div className={cx('image')}>
              <img className="img" src={require('site-images/ev-av.png')} />
            </div>
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

        <div className={cx('contact')}>
          <div className={cx('title')}>Contact</div>
          <ul className={cx('links')}>{links.map((x, i) =>
            <li key={i} className={cx('link')}>
              <a href={x.url} target="_blank"><span className={x.icon} /></a>
            </li>
          )}</ul>
        </div>

      </div>
    )
  }
}

About.propTypes = {
  bio: PropTypes.string,
  featuredTech: PropTypes.array,
  links: PropTypes.array
}

const mapStateToProps = ({ site }) => ({
  featuredTech: site.about.featuredTech,
  bio: site.about.bio,
  links: site.contact.links
})

export default connect(mapStateToProps)(About)