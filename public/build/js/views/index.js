EVTURN.IndexView = Backbone.View.extend({

  el: '.index',
  initialize() {
    this.render();
    this.appendProjectThumbnails();
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
        'public/build/vid-1.mov',
        'public/build/vid-3.mov',
        'public/build/vid-2.mov',
        'public/build/vid-4.mov',
        'public/build/vid-5.mov'
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
    video.style.width = '100%';
    video.src = Player.playlist[Player.playCount];
    video.addEventListener('ended', Player.callback);
    video.play;
    Player.initialized = true;
  };

  Player.callback = function() {
    Player.timekeeper();
    video.setAttribute('src', Player.playlist[Player.playCount]);
    video.play;
  };

  Player.init();
};