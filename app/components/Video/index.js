import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import poster from 'images/site/poster.png'

export default class Video extends Component {
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
      <video
        className={this.props.className}
        ref={::this.listenForChanges}
        src={this.props.src}
        poster={poster}
        type="video/mp4"
        preload="auto"
        autoPlay="true"
        muted="true"
      />
    )
  }

  static propTypes = {
    src: PropTypes.string,
    ready: PropTypes.bool,
    done: PropTypes.bool,
    initialized: PropTypes.bool,
    poster: PropTypes.string,
    items: PropTypes.array,
    videoEnded: PropTypes.func,
    videoPlaying: PropTypes.func,
    unmountVideo: PropTypes.func,
    mountVideo: PropTypes.func,
  }
}
