EVTURN.IndexView = Backbone.View.extend({

  el: '.index',
  initialize() {
    this.render();
    // this.appendProjectThumbnails();
    this.setVideo();
  },
  render() {
    this.$el.html(EVTURN.heroTemplate());

    return this;
  },
  setVideo() {
    $(document).ready(function() {
      let video = document.getElementById('ev-vid');

      EVTURN.Vid(video);
    });
  },
  appendProjectThumbnails() {
    let tn = new EVTURN.Thumbnails(this.$el);

    return this;
  }
});

EVTURN.Vid = function(video) {

  let Player = {};

  Player.initialized = false;
  Player.playCount = null;
  Player.playlist = [
        'public/build/vid-7.mov',
        'public/build/vid-10.mov',
        'public/build/vid-15.mov',
        'public/build/vid-3.mov',
        'public/build/vid-11.mov',
        'public/build/vid-6.mov',
        'public/build/vid-8.mov',
        'public/build/vid-12.mov',
        'public/build/vid-13.mov',
        'public/build/vid-1.mov',
        'public/build/vid-16.mov',
        'public/build/vid-18.mov',
        'public/build/vid-14.mov',
        'public/build/vid-17.mov',
        'public/build/vid-2.mov'
  ];

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