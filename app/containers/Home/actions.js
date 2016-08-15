import * as Types from '../../constants'

export const mountVideo = items => ({
  type: Types.MOUNT_VIDEO,
  payload: { videos: items },
})

export const unmountVideo = _ => ({
  type: Types.UNMOUNT_VIDEO,
})

export const abortMount = _ => ({
  type: Types.ABORT_MOUNT,
})

export const videoPlaying = initialized => {
  return {
    type: Types.VIDEO_PLAYING,
    payload: { initialized },
  }
}

export const videoEnded = _ => ({
  type: Types.VIDEO_ENDED,
})

export const shuffleVideos = _ => ({
  type: Types.SHUFFLE_VIDEOS,
})
