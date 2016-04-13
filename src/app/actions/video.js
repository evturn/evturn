import store from 'store';

const videoMounted   = () => ({ type: 'VIDEO_MOUNTED' });
const videoLoading   = () => ({ type: 'VIDEO_LOADING' });
const videoPlaying   = () => ({ type: 'VIDEO_PLAYING' });
const videoEnded     = () => ({ type: 'VIDEO_ENDED' });
const videoTimeout   = () => ({ type: 'VIDEO_TIMEOUT' });
const videoAborted   = () => ({ type: 'VIDEO_ABORTED' });
const videoUnmounted = () => ({ type: 'VIDEO_UNMOUNTED' });
const videoNext      = () => ({ type: 'VIDEO_NEXT' });
const hideSpinner    = () => ({ type: 'HIDE_SPINNER' });

const dispatch = store.dispatch;

let mounted = false;
let timer = null;

function createTimeout(action, duration) {
  return setTimeout(() => dispatch(action()), duration);
}

const createTimer = () => timer = createTimeout(videoTimeout, 3000);
const clearTimer = () => clearTimeout(timer);
const removeSpinner = () => createTimeout(hideSpinner, 1000);

export const load = () => {
  if (window.innerWidth < 600) {
    removeSpinner();
    dispatch(videoAborted());
  } else {
    createTimer();
    dispatch(videoLoading());
  }
};

export const play = () => {
  if (!mounted) {
    clearTimer();
    dispatch(videoMounted());
    removeSpinner();
  }
  dispatch(videoPlaying());
  mounted = true;
};

export const end = () => {
  dispatch(videoEnded());
  dispatch(videoLoading());
};

export const unmount = () => {
  clearTimer();
  dispatch(videoUnmounted());
};

export const next = () => {
  dispatch(videoNext());
};