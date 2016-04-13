import store from 'store';

const actions = {
  videoLoading:   _ => ({ type: 'VIDEO_LOADING' }),
  videoPlaying:   _ => ({ type: 'VIDEO_PLAYING' }),
  videoTimeout:   _ => ({ type: 'VIDEO_TIMEOUT' }),
  videoAborted:   _ => ({ type: 'VIDEO_ABORTED' }),
  videoUnmounted: _ => ({ type: 'VIDEO_UNMOUNTED' }),
  videoNext:      _ => ({ type: 'VIDEO_NEXT' }),
  hideSpinner:    _ => ({ type: 'HIDE_SPINNER' })
};

const dispatch = store.dispatch;

const videoPlayer = {
  mounted: false,
  timer: null,
  clear() { clearTimeout(this.timer); }
};

function startTimeoutCounter() {
  videoPlayer.timer = setTimeout(() => dispatch(actions.videoTimeout()), 3000)
}

function clearTimeoutCounter() {
  videoPlayer.clear();
}

export const next = () => {
  dispatch(actions.videoNext());
};

export const unmountVideoPlayer = _ => dispatch => {
  videoPlayer.clear();
  dispatch(actions.videoUnmounted());
};

export function mountVideoPlayer(player) {
  startTimeoutCounter();

  if (window.innerWidth < 600) {
    preventVideoLoading();
  } else {
    beginVideoLoading();
  }

  player.addEventListener('playing',
    () => {
      emitVideoPlayback();
      player.playbackRate = 0.6;
    }
  );

  player.addEventListener('ended',
    () => dispatch(actions.videoLoading())
  );
};

function hideSpinner() {
  clearTimeoutCounter();
  setTimeout(() => dispatch(actions.hideSpinner()), 1000);
}

function preventVideoLoading() {
  hideSpinner();
  dispatch(actions.videoAborted());
}

function beginVideoLoading() {
  dispatch(actions.videoLoading());
}

function emitVideoPlayback() {
  if (!videoPlayer.mounted) {
    hideSpinner();
  }

  videoPlayer.mounted = true;
  dispatch(actions.videoPlaying());
}