export const mountVideo = items => ({
  type: 'MOUNT_VIDEO',
  payload: {
    videos: items,
    playing: false,
    shouldAbort: window.innerWidth < 1025,
  },
})

export const unmountVideo = _ => ({
  type: 'UNMOUNT_VIDEO',
})

export const abortMount = _ => ({
  type: 'ABORT_MOUNT',
})

export const videoPlaying = _ => ({
  type: 'VIDEO_PLAYING',
})

export const videoEnded = _ => ({
  type: 'VIDEO_ENDED',
})

export const shuffleVideos = _ => ({
  type: 'SHUFFLE_VIDEOS',
})

export const toggleMenu = _ => ({
  type: 'TOGGLE_MENU'
})

export const locationChange = _ => ({
  type: 'LOCATION_CHANGE'
})

export const mountCarousel = (slug='drive') => ({
  type: 'MOUNT_CAROUSEL',
  payload: { slug }
})

export const unmountCarousel = _ => ({
  type: 'UNMOUNT_CAROUSEL'
})
