import React, { Component } from 'react'
import css from './style.css'

export class Video extends Component {
  constructor(props) {
    super(props)
    this.setSource = ::this.setSource
    this.onPlay = ::this.onPlay
  }

  static defaultProps = {
    urls: [
      'https://www.dropbox.com/s/ijpt86526hf68ve/vid-28.m4v?dl=1',
      'https://www.dropbox.com/s/nijl1tqzivxjlnd/vid-8.m4v?dl=1',
      'https://www.dropbox.com/s/bjoecb0guaeqkh1/vid-25.m4v?dl=1',
      'https://www.dropbox.com/s/ibiy6fwqjyb5uaw/vid-7.m4v?dl=1',
      'https://www.dropbox.com/s/lubs0xrmu3iqaud/vid-24.m4v?dl=1',
      'https://www.dropbox.com/s/pinkna2jree0czu/vid-1.m4v?dl=1',
      'https://www.dropbox.com/s/wd5zt4mj1s6duyt/vid-23.m4v?dl=1',
      'https://www.dropbox.com/s/e9crqmruokitmzr/vid-22.m4v?dl=1',
      'https://www.dropbox.com/s/5qa9ojk3ao7s0zg/vid-26.m4v?dl=1',
      'https://www.dropbox.com/s/0c507odqgqwjqv2/vid-3.m4v?dl=1',
      'https://www.dropbox.com/s/p56i6t3gxwbypbs/vid-16.m4v?dl=1',
      'https://www.dropbox.com/s/23upki10se8ve37/vid-15.m4v?dl=1',
      'https://www.dropbox.com/s/8tqgae5yuf7x1n7/vid-6.m4v?dl=1',
      'https://www.dropbox.com/s/0dk58ha0o191qmx/vid-11.m4v?dl=1',
      'https://www.dropbox.com/s/jszss7t0msash80/vid-10.m4v?dl=1',
      'https://www.dropbox.com/s/dsab5kvchdzvzyp/vid-12.m4v?dl=1',
      'https://www.dropbox.com/s/a7vmoy155re7drv/vid-18.m4v?dl=1',
      'https://www.dropbox.com/s/wloza0nswfwxb9f/vid-14.m4v?dl=1',
      'https://www.dropbox.com/s/ogq5n2az7o8ooxp/vid-2.m4v?dl=1'
    ]
  }

  state = {src: '', index: 0}

  componentDidMount() {
    this.setSource()
    console.log(this.video.oncanplay)
    this.video.addEventListener('ended', this.setSource)
    this.video.addEventListener('playing', this.onPlay)
  }

  componentWillUnmount() {
    this.video.removeEventListener('ended', this.setSource)
    this.video.removeEventListener('playing', this.onPlay)
  }

  setSource() {
    const { urls } = this.props
    const { index } = this.state
    this.props.onVideoChange({loading: true })
    this.setState({
      src: urls[index],
      playbackRate: index > 0 ? 0.5 : 1,
      index: index >= urls.length - 1 ? 0 : index + 1,
    })
  }

  onPlay(e) {
    console.log(e)
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