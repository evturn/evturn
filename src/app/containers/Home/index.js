import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import LoadingIndicator from 'components/LoadingIndicator'
import Sections from 'components/Sections'
import { mountPlayer, unmountPlayer } from 'containers/Home/actions'

import css from './style.less'

const img = {
  bp: `build/` + require('site-images/banana-plants.png'),
  av: `build/` + require('site-images/ev-av.svg'),
  poster: `build/` + require('site-images/transparent.png'),
  title: `build/` + require('site-images/title-white.svg')
}

class Home extends Component {
  componentDidMount() {
    this.props.mountPlayer(this.player)
  }

  componentWillUnmount() {
    this.props.unmountPlayer()
  }

  render() {
    const {
      thumbnails,
      id,
      src,
      ready,
      done,
      sections
    } = this.props

    return (
      <div className={css.root}>

        <div
          className={css.fullpage}
          style={{ backgroundImage: `url(${img.bp})` }}>

          <video
            ref={player => this.player = player}
            poster={img.poster}
            type="video/mp4"
            preload="auto"
            autoPlay="true"
            muted="true"
            src={src}
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
              <img src={img.av} />
            </div>

            <div className={css.title}>
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
  sections: PropTypes.array
}

const mapStateToProps = ({ video, site }) => ({
  src:  video.src,
  ready: video.ready,
  done: video.done,
  sections: site.work.nav
})

const mapDispatchToProps = dispatch => ({
  mountPlayer: player => dispatch(mountPlayer(player)),
  unmountPlayer: _ => dispatch(unmountPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)