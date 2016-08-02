import {
  MOUNT_VIDEO,
  UNMOUNT_VIDEO,
  ABORT_MOUNT,
  VIDEO_PLAYING,
  VIDEO_ENDED,
} from '../../constants'

export const mountVideo = _ => ({
  type: MOUNT_VIDEO,
})

export const unmountVideo = _ => ({
  type: UNMOUNT_VIDEO,
})

export const abortMount = _ => ({
  type: ABORT_MOUNT,
})

export const videoPlaying = _ => ({
  type: VIDEO_PLAYING,
})

export const videoEnded = _ => ({
  type: VIDEO_ENDED,
})
