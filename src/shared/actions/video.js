const videoMounted   = () => { return { type: 'VIDEO_MOUNTED' } };
const videoLoading   = () => { return { type: 'VIDEO_LOADING' } };
const videoPlaying   = () => { return { type: 'VIDEO_PLAYING' } };
const videoEnded     = () => { return { type: 'VIDEO_ENDED' } };
const videoTimeout   = () => { return { type: 'VIDEO_TIMEOUT' } };
const videoAborted   = () => { return { type: 'VIDEO_ABORTED' } };
const videoUnmounted = () => { return { type: 'VIDEO_UNMOUNTED' } };
const hideSpinner    = () => { return { type: 'HIDE_SPINNER' } };

let dispatch;
let mounted = false;
let timer = null;

function createTimeout(action, duration) {
  return setTimeout(() => dispatch(action()), duration);
}

const createTimer = () => timer = createTimeout(videoTimeout, 3000);
const clearTimer = () => clearTimeout(timer);
const removeSpinner = () => createTimeout(hideSpinner, 1000);

export const connectStoreDispatch = (storeDispatch) => dispatch = storeDispatch;

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
    clearTimer()
    dispatch(videoMounted());
  }
  dispatch(videoPlaying());
  removeSpinner();
};

export const end = () => {
  dispatch(videoEnded());
  dispatch(videoLoading());
};

export const unmount = () => {
  clearTimer();
  dispatch(videoUnmounted());
};