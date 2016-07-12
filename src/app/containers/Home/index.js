import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoPlayer from './VideoPlayer'
import LoadingIndicator from 'components/LoadingIndicator'
import Sections from 'components/Sections'

import css from './style.css'

const img = {
  av: `build/` + require('site-images/ev-av.svg'),
  skel: `build/` + require('site-images/skel.gif'),
  poster: `build/` + require('site-images/transparent.png'),
  title: `build/` + require('site-images/title-white.svg')
}

class Home extends Component {
  render() {
    const {
      src,
      ready,
      done,
      sections,
      initialized,
    } = this.props

    return (
      <div className={css.root}>
        <div className={css.fullpage}>
          <VideoPlayer
            src={src}
            ready={ready}
            done={done}
            poster={img.poster}
          />
          <LoadingIndicator
            img={img.av}
            ready={ready}
            done={done}
          />
          <div className={css.sections}>
            <Sections sections={sections} />
          </div>
          <div className={css.cover}>
            <div className={css.logo}>
              <img src={img.skel} />
            </div>
            <div className={`${css.title} ${!done && !initialized ? css.wait : ''}`}>
              <img src={img.title} />
              <div className={css.subtitle} />
            </div>
          </div>
          <div className={css.overlay} />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  src: PropTypes.string,
  ready: PropTypes.bool,
  done: PropTypes.bool,
  sections: PropTypes.array,
  initialized: PropTypes.bool,
}

const mapStateToProps = ({ video, site }) => ({
  src:  video.src,
  ready: video.ready,
  done: video.done,
  sections: site.sections,
  initialized: video.initialized,
})

export default connect(mapStateToProps)(Home)
