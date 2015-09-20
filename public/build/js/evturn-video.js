EVTURN.Video = function(video) {

  let Player = {};

  Player.initialized = false;
  Player.playCount = null;
  Player.playlist = EVTURN.videos();

  Player.timekeeper = function() {
    let isLastVideo = !!(Player.playCount === Player.playlist.length - 1),
        isInitialized = Player.initialized;

    if (!isInitialized || isLastVideo) {
        Player.playCount = 0;
    }
    else {
        Player.playCount += 1;
    }
  };

  Player.init = function() {
    Player.timekeeper();
    video.type = 'video/mp4';
    video.muted = true;
    video.autoplay = true;
    video.preload = 'auto';
    video.src = Player.playlist[Player.playCount];
    video.addEventListener('ended', Player.callback);
    video.addEventListener('loadedmetadata', Player.reposition);
    video.play;
    video.playbackRate = 0.5;
    Player.initialized = true;
  };

  Player.callback = function() {
    Player.timekeeper();
    video.setAttribute('src', Player.playlist[Player.playCount]);
    Player.reposition();
    video.play;
    video.playbackRate = 0.5;
  };

  Player.reposition = function(e) {
    let width = video.videoWidth,
        height = video.videoHeight;

    if (height > width) {
        video.classList.remove('landscape');
        video.classList.add('portrait');
    }
    else {
        video.classList.remove('portrait');
        video.classList.add('landscape');
    }
  };

  Player.init();
};