import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Observable } from 'rxjs'

import Video from 'components/Video'
import * as Actions from './actions'

class VideoPlayer extends Component {
  componentDidMount() {
    this.props.mountPlayer()
  }

  componentWillUnmount() {
    this.props.unmountPlayer()

    if (this.player !== null) {
      this.player.removeEventListener('playing', this.playing)
      this.player.removeEventListener('ended', this.ended)
      console.log(this.player)
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
  poster: PropTypes.string
}

const mapStateToProps = ({ video }) => ({
  src:  video.src,
  ready: video.ready,
  done: video.done
})

const mapDispatchToProps = dispatch => ({
  mountPlayer:   player => dispatch(Actions.mountVideo(player)),
  unmountPlayer: _ => dispatch(Actions.unmountVideo()),
  videoPlaying:  _ => dispatch(Actions.videoPlaying()),
  videoEnded:    _ => dispatch(Actions.videoEnded()),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
