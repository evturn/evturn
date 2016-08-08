import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoPlayer from './VideoPlayer'
import LoadingIndicator from 'components/LoadingIndicator'
import Sections from 'components/Sections'

import * as Actions from './actions'

import css from './style.css'

const img = {
  av: `build/` + require('site-images/ev-av.svg'),
  skel: `build/` + require('site-images/skel.gif'),
  poster: `build/` + require('site-images/transparent.png'),
  title: `build/` + require('site-images/title-white.svg')
}

class Home extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.fullpage}>
          <VideoPlayer
            items={this.props.items}
            ready={this.props.ready}
            done={this.props.done}
            poster={img.poster}
          />

          <LoadingIndicator
            img={img.av}
            ready={this.props.ready}
            done={this.props.done}
          />
          <div className={css.sections}>
            <Sections sections={this.props.sections} />
          </div>
          <div className={css.cover}>
            <div className={css.logo}>
              <img src={img.skel} />
            </div>
            <div className={`${css.title} ${!this.props.done && !this.props.initialized ? css.wait : css.yield}`}>
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
  items: PropTypes.array,
  ready: PropTypes.bool,
  done: PropTypes.bool,
  sections: PropTypes.array,
  initialized: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    items: state.video.items,
    ready: state.video.ready,
    done: state.video.done,
    sections: state.site.sections,
    initialized: state.video.initialized,
  }
}

export default connect(mapStateToProps)(Home)
