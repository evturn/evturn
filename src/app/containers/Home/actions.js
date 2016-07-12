import {
  MOUNT_VIDEO,
  MOUNT_SUCCESS,
  MOUNT_ERROR,
  ABORT_MOUNT,
  PLAY_NEXT,
  UNMOUNT_VIDEO,
  FADE_LOADER,
  HIDE_LOADER,
  VIDEO_PLAYING,
  VIDEO_ENDED,
} from './constants'

export const mountVideo = player => ({
  type: MOUNT_VIDEO,
  payload: { index: 0 },
  player,
})

const abortPlayerInit = _ => ({
  type: ABORT_INIT,
})

export const unmountVideo = _ => ({
  type: UNMOUNT_VIDEO,
})

export const videoPlaying = _ => ({
  type: VIDEO_PLAYING,
})

export const videoEnded = _ => ({
  type: VIDEO_ENDED,
})
