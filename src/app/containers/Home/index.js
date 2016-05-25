import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { mountPlayer, unmountPlayer } from 'containers/Home/actions'

import LoadingIndicator from 'components/LoadingIndicator'
import Thumbnails from 'components/Thumbnails'

import css from './style.less'

const img = {
  bg: require('site-images/banana-plants.png'),
  poster: require('site-images/transparent.png'),
  title: require('site-images/title-white.svg'),
  av: require('site-images/ev-av.svg')
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
      src,
      ready,
      done,
      thumbnails
    } = this.props

    return (
      <div className={css.root}>
        <div
          className={css.video}
          style={{ backgroundImage: `url(${img.bg})` }}>

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

          <div className={css.title}>
            <img src={img.title} />
            <div className={css.subtitle} />
          </div>
          <div className={css.overlay} />
        </div>

        <Thumbnails nav={thumbnails} />
      </div>
    )
  }
}

Home.propTypes = {
  src: PropTypes.string,
  ready: PropTypes.bool,
  done: PropTypes.bool,
  thumbnails: PropTypes.array
}

const mapStateToProps = ({ video, slideshow }) => ({
  src:  video.src,
  ready: video.ready,
  done: video.done,
  thumbnails: slideshow.nav,
})

const mapDispatchToProps = dispatch => ({
  mountPlayer: player => dispatch(mountPlayer(player)),
  unmountPlayer: _ => dispatch(unmountPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
