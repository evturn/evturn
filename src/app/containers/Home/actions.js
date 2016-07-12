import {
  MOUNT_VIDEO,
  MOUNT_SUCCESS,
  MOUNT_ERROR,
  ABORT_MOUNT,
  PLAY_NEXT,
  UNMOUNT_VIDEO,
  FADE_LOADER,
  HIDE_LOADER,
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
