import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { mountPlayer, unmountPlayer } from 'containers/Home/actions'

class Video extends Component {
  componentDidMount() {
    this.props.mountPlayer(this.player)
  }

  componentWillUnmount() {
    this.props.unmountPlayer()
  }

  render() {
    const { src, ready, done, poster} = this.props

    return (
      <video
        ref={player => this.player = player}
        poster={poster}
        type="video/mp4"
        preload="auto"
        autoPlay="true"
        muted="true"
        src={src}
      />
    )
  }
}

Video.propTypes = {
  src: PropTypes.string,
  ready: PropTypes.bool,
  done: PropTypes.bool,
  poster: PropTypes.string
}

const mapStateToProps = ({ video }) => ({
  src:  video.src,
  ready: video.ready,
  done: video.done
})

const mapDispatchToProps = dispatch => ({
  mountPlayer: player => dispatch(mountPlayer(player)),
  unmountPlayer: _ => dispatch(unmountPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Video)
