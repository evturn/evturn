'use strict';
const models = require('../models');

module.exports = function(video) {
  let initialized = false;
  let playCount = null;
  let playlist = models.videos;

  const init = () => {
    timekeeper();
    startPlayback();
  };

  const timekeeper = () => {
    let isLastVideo = !!(playCount === playlist.length - 1);
    let isInitialized = initialized;

    if (!isInitialized || isLastVideo) {
      playCount = 0;
    } else {
      playCount += 1;
    }
  };

  const startPlayback = () => {
    video.type = 'video/mp4';
    video.muted = true;
    video.autoplay = true;
    video.preload = 'auto';
    video.src = playlist[playCount];
    video.addEventListener('ended', nextVideo);
    video.play;
    video.playbackRate = 0.5;
    initialized = true;
  };

  const nextVideo = () => {
    timekeeper();
    video.setAttribute('src', playlist[playCount]);
    video.play;
    video.playbackRate = 0.5;
  };

  return init();
};