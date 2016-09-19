import * as Types from '../../constants'

export const mountVideo = items => ({
  type: Types.MOUNT_VIDEO,
  payload: {
    videos: items,
    playing: false,
    shouldAbort: window.innerWidth < 1025,
  },
})

export const unmountVideo = _ => ({
  type: Types.UNMOUNT_VIDEO,
})

export const abortMount = _ => ({
  type: Types.ABORT_MOUNT,
})

export const videoPlaying = _ => ({
  type: Types.VIDEO_PLAYING,
})

export const videoEnded = _ => ({
  type: Types.VIDEO_ENDED,
})

export const shuffleVideos = _ => ({
  type: Types.SHUFFLE_VIDEOS,
})
