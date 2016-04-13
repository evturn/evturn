const actions = {
  videoLoading:   _ => ({ type: 'VIDEO_LOADING' }),
  videoPlaying:   _ => ({ type: 'VIDEO_PLAYING' }),
  videoTimeout:   _ => ({ type: 'VIDEO_TIMEOUT' }),
  videoAborted:   _ => ({ type: 'VIDEO_ABORTED' }),
  videoUnmounted: _ => ({ type: 'VIDEO_UNMOUNTED' }),
  videoNext:      _ => ({ type: 'VIDEO_NEXT' }),
  hideSpinner:    _ => ({ type: 'HIDE_SPINNER' })
};

const videoPlayer = {
  mounted: false,
  timer: null,
  clear() { clearTimeout(this.timer); }
};

const hideSpinner = () => dispatch => {
  videoPlayer.clear();
  setTimeout(() => dispatch(actions.hideSpinner()), 1000);
}

const preventVideoLoading = () => dispatch => {
  dispatch(actions.videoAborted());
  dispatch(hideSpinner());
};

const beginVideoLoading = player => dispatch => {
  dispatch(actions.videoLoading());

  player.addEventListener('playing',
    () => {
      if (!videoPlayer.mounted) {
        videoPlayer.mounted = true;
        dispatch(hideSpinner());
      }

      dispatch(actions.videoPlaying());
      player.playbackRate = 0.6;
    }
  );

  player.addEventListener('ended',
    () => dispatch(actions.videoLoading())
  );
};

export const mountVideoPlayer = player => dispatch => {
  videoPlayer.timer = setTimeout(() => dispatch(actions.videoTimeout()), 3000)

  if (window.innerWidth < 600) {
    dispatch(preventVideoLoading());
  } else {
    dispatch(beginVideoLoading(player));
  }
};


export const skipToNextVideo = () => dispatch => dispatch(actions.videoNext());

export const unmountVideoPlayer = () => dispatch => {
  videoPlayer.clear();
  dispatch(actions.videoUnmounted());
};