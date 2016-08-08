import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from 'components/Video'
import * as Actions from './actions'

class VideoPlayer extends Component {
  componentDidMount() {
    this.props.mountVideo(this.props.items)
  }

  componentWillUnmount() {
    this.props.unmountVideo()

    if (this.player !== null) {
      this.player.removeEventListener('playing', this.playing)
      this.player.removeEventListener('ended', this.ended)
    }
  }

  listenForChanges(player) {
    this.player = player
    if (this.player !== null) {
      this.playing = this.player.addEventListener('playing', _ => {
        if (!this.props.src.includes('vid-28')) {
          this.player.playbackRate = 0.5
        }
        this.props.videoPlaying()
      })
      this.ended = this.player.addEventListener('ended', this.props.videoEnded)
    }
  }

  render() {
    return (
      <Video
        backingInstance={::this.listenForChanges}
        poster={this.props.poster}
        src={this.props.src}
      />
    )
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  ready: PropTypes.bool,
  done: PropTypes.bool,
  initialized: PropTypes.bool,
  poster: PropTypes.string,
  items: PropTypes.array,
}

export default connect(
  state => ({
    src:  state.video.src,
    ready: state.video.ready,
    done: state.video.done,
    items: state.video.items,
    initialized: state.video.initialized,
  }),
  dispatch => ({
    mountVideo:   items => dispatch(Actions.mountVideo(items)),
    unmountVideo: _ => dispatch(Actions.unmountVideo()),
    videoPlaying: _ => dispatch(Actions.videoPlaying()),
    videoEnded:   _ => dispatch(Actions.videoEnded()),
  })
)(VideoPlayer)
