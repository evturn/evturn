const actions = {
  mountVideoPlayer:   _ => ({ type: 'MOUNT_VIDEO_PLAYER' }),
  fadeLoadingScreen:  _ => ({ type: 'FADE_LOADING_SCREEN' }),
  killLoadingScreen:  _ => ({ type: 'KILL_LOADING_SCREEN' }),
  loadNextVideo:      _ => ({ type: 'LOAD_NEXT_VIDEO' }),
  unmountVideoPlayer: _ => ({ type: 'UNMOUNT_VIDEO_PLAYER' })
};

const killLoadingScreen = () => dispatch => {
  dispatch(actions.fadeLoadingScreen({ ready: true }));
  setTimeout(() => dispatch(actions.killLoadingScreen({ done: true })), 1000);
};

const initializeVideoPlayer = player => dispatch => {
  const timeout = setTimeout(() => dispatch(killLoadingScreen()), 3000);
  let initialized = false;

  dispatch(actions.mountVideoPlayer());

  player.addEventListener('playing',
    () => {
      if (!initialized) {
        clearTimeout(timeout);
        dispatch(killLoadingScreen());
        initialized = true;
      }

      player.playbackRate = 0.6;
    }
  );

  player.addEventListener('ended',
    () => dispatch(actions.loadNextVideo())
  );
}

export const mountVideoPlayer = player => dispatch => {
  if (window.innerWidth < 600) {
    return dispatch(killLoadingScreen());
  }

  dispatch(initializeVideoPlayer(player));
};

export const unmountVideoPlayer = () => dispatch => {
  dispatch(actions.unmountVideoPlayer());
};

export const loadNextVideo = () => dispatch => dispatch(actions.loadNextVideo());