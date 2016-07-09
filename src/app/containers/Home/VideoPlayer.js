import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoPlayer from 'components/Video'
import * as Actions from './actions'


class Video extends Component {
  componentDidMount() {
    this.props.mountPlayer(this.player)
  }

  componentWillUnmount() {
    this.props.unmountPlayer()
  }

  getBackingInstance(player) {
    this.player = player
  }

  render() {
    return (
      <Video
        backingInstance={::this.getBackingInstace}
        poster={this.props.poster}
        src={this.props.src}
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
  mountPlayer: player => dispatch(Actions.mountPlayer(player)),
  unmountPlayer: _ => dispatch(Actions.unmountPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Video)
