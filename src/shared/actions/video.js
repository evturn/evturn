const videoLoading   = () => { return { type: 'VIDEO_LOADING' } };
const videoPlaying   = () => { return { type: 'VIDEO_PLAYING' } };
const videoEnded     = () => { return { type: 'VIDEO_ENDED' } };
const videoTimeout   = () => { return { type: 'VIDEO_TIMEOUT' } };
const videoAborted   = () => { return { type: 'VIDEO_ABORTED' } };
const videoUnmounted = () => { return { type: 'VIDEO_UNMOUNTED' } };

const timer = {
  timeout: null,
  start(dispatch) {
    this.timeout = setTimeout(() => dispatch(videoTimeout()), 3000);
  },
  clear() {
    clearTimeout(this.timeout);
    this.timeout = null;
  }
};

export function load(dispatch) {
  if (window.width < 600) {
    timer.clear();
    dispatch(videoAborted());
  } else {
    timer.start(dispatch);
    dispatch(videoLoading());
  }
}

export function play(dispatch) {
  timer.clear();
  dispatch(videoPlaying());
}

export function end(dispatch) {
  dispatch(videoEnded());
  dispatch(videoLoading());
}

export function unmount(dispatch) {
  timer.clear();
  dispatch(videoUnmounted());
}