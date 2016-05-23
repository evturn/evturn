import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { mountPlayer, unmountPlayer } from 'containers/Home/actions'

import Spinner from 'components/Spinner'

import 'less/components/video.less'

class Video extends Component {
  componentDidMount() {
    this.props.mountPlayer(this.player)
  }
  componentWillUnmount() {
    this.props.unmountPlayer()
  }
  render() {
    return (
      <video
        ref={player => this.player = player}
        poster={require('site-images/transparent.png')}
        type="video/mp4"
        preload="auto"
        autoPlay={true}
        muted={true}
        src={this.props.src}
      />
    )
  }
}

Video.propTypes = {
  src: PropTypes.string
}

const mapStateToProps = ({ video }) => ({
  src:  video.src
})

const mapDispatchToProps = dispatch => ({
  mountPlayer: player => dispatch(mountPlayer(player)),
  unmountPlayer: _ => dispatch(unmountPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Video)
