'use strict';
const Get = require('./data');

module.exports = function(video) {

  let Player = {};

  Player.initialized = false;
  Player.playCount = null;
  Player.playlist = Get.videos();
  Player.timekeeper = () => {
    let isLastVideo = !!(Player.playCount === Player.playlist.length - 1),
        isInitialized = Player.initialized;

    if (!isInitialized || isLastVideo) {
        Player.playCount = 0;
    }
    else {
        Player.playCount += 1;
    }
  };

  Player.init = () => {
    Player.timekeeper();
    video.type = 'video/mp4';
    video.muted = true;
    video.autoplay = true;
    video.preload = 'auto';
    video.src = Player.playlist[Player.playCount];
    video.addEventListener('ended', Player.callback);
    video.play;
    video.playbackRate = 0.5;
    Player.initialized = true;
  };

  Player.callback = () => {
    Player.timekeeper();
    video.setAttribute('src', Player.playlist[Player.playCount]);
    video.play;
    video.playbackRate = 0.5;
  };

  Player.init();
};