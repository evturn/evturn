import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import LoadingIndicator from 'components/LoadingIndicator'
import { mountPlayer, unmountPlayer } from 'containers/Home/actions'
import { changeHex } from 'containers/App/actions'

import css from './style.less'

const img = {
  bp: require('site-images/banana-plants.png'),
  av: require('site-images/ev-av.svg'),
  poster: require('site-images/transparent.png'),
  title: require('site-images/title-white.svg')
}

class Video extends Component {
  componentDidMount() {
    this.props.changeHex(true)
    this.props.mountPlayer(this.player)
  }

  componentWillUnmount() {
    this.props.unmountPlayer()
    this.props.changeHex(false)
  }

  render() {
    const {
      src,
      ready,
      done
    } = this.props

    return (
      <div
        className={css.video}
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

        <div className={css.title}>
          <img src={img.title} />
          <div className={css.subtitle} />
        </div>
        <div className={css.overlay} />
      </div>
    )
  }
}

Video.propTypes = {
  src: PropTypes.string,
  ready: PropTypes.bool,
  done: PropTypes.bool
}

const mapStateToProps = ({ video }) => ({
  src:  video.src,
  ready: video.ready,
  done: video.done
})

const mapDispatchToProps = dispatch => ({
  mountPlayer: player => dispatch(mountPlayer(player)),
  unmountPlayer: _ => dispatch(unmountPlayer()),
  changeHex: bool => dispatch(changeHex(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Video)