import React, { Component } from 'react'
import css from './style.css'

export class Video extends Component {


  state = {src: '', index: 0}

  componentDidMount() {
    this.setSource()
    this.video.addEventListener('ended', this.setSource)
    this.video.addEventListener('playing', this.onPlay)
  }

  componentWillUnmount() {
    this.video.removeEventListener('ended', this.setSource)
    this.video.removeEventListener('playing', this.onPlay)
  }

  setSource = _ => {
    const { urls } = this.props
    const { index } = this.state
    this.props.onVideoChange({loading: true })
    this.setState({
      src: urls[index],
      playbackRate: index > 0 ? 0.5 : 1,
      index: index >= urls.length - 1 ? 0 : index + 1,
    })
  }

  onPlay = _ => {
    this.props.onVideoChange({loading: false})
    this.video.playbackRate = this.state.playbackRate
  }

  render() {
    const { src } = this.state
    return (
      <video
        src={src}
        ref={x => this.video = x}
        className={css.video}
        type="video/mp4"
        preload="auto"
        autoPlay
        muted
        playsInline
      />
    )
  }
}

export default Video