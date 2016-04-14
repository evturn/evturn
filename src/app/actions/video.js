const actions = {
  mountVideoPlayer:   _ => ({ type: 'MOUNT_VIDEO_PLAYER' }),
  fadeLoadingScreen:  _ => ({ type: 'FADE_LOADING_SCREEN' }),
  killLoadingScreen:  _ => ({ type: 'KILL_LOADING_SCREEN' }),
  loadNextVideo:      _ => ({ type: 'LOAD_NEXT_VIDEO' }),
  unmountVideoPlayer: _ => ({ type: 'UNMOUNT_VIDEO_PLAYER' })
};

const videoPlayer = {
  timer: null,
  clear() { clearTimeout(this.timer); }
};

const killLoadingScreen = () => dispatch => {
  videoPlayer.clear();
  dispatch(actions.fadeLoadingScreen({ ready: true }));
  setTimeout(() => dispatch(actions.killLoadingScreen({ done: true })), 1000);
};

const setLoadingTimeout = () => dispatch => {
  videoPlayer.timer = setTimeout(() => dispatch(killLoadingScreen()), 3000)
}

export const loadNextVideo = () => dispatch => dispatch(actions.loadNextVideo());

export const unmountVideoPlayer = () => dispatch => {
  videoPlayer.clear();
  dispatch(actions.unmountVideoPlayer());
};

export const mountVideoPlayer = player => dispatch => {
  let initialized = false;

  if (window.innerWidth < 600) {
    return dispatch(killLoadingScreen());
  }

  dispatch(actions.mountVideoPlayer());
  dispatch(setLoadingTimeout());

  player.addEventListener('playing',
    () => {
      if (!initialized) {
        dispatch(killLoadingScreen());
        initialized = true;
      }

      player.playbackRate = 0.6;
    }
  );

  player.addEventListener('ended',
    () => dispatch(actions.loadNextVideo())
  );
};

