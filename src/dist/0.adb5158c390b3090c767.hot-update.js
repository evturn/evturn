webpackHotUpdate(0,{

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.Video = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _videos = __webpack_require__(338);
	
	var _videos2 = _interopRequireDefault(_videos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(385);
	
	var Video = exports.Video = _react2.default.createClass({
	  displayName: 'Video',
	  init: function init() {
	    var _this = this;
	
	    this.video.type = 'video/mp4';
	    this.video.muted = true;
	    this.video.autoplay = true;
	    this.video.preload = 'auto';
	    this.video.addEventListener('ended', function () {
	      return _this.start();
	    });
	    this.last = _videos2.default.length - 1;
	    this.initialized = false;
	    this.current = 0;
	    this.playlist = _videos2.default;
	    this.start();
	  },
	  start: function start() {
	    var isLastVideo = !!(this.current === this.last);
	    var isInitialized = this.initialized;
	
	    if (!isInitialized) {
	      this.initialized = true;
	    } else if (isLastVideo) {
	      this.current = 0;
	    } else {
	      this.current += 1;
	    }
	
	    this.video.src = this.playlist[this.current];
	    this.video.play;
	    this.video.playbackRate = 0.5;
	  },
	  componentDidMount: function componentDidMount() {
	    this.init();
	  },
	  render: function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement('video', {
	      ref: function ref(video) {
	        return _this2.video = video;
	      },
	
	      type: 'video/mp4' });
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "video.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.adb5158c390b3090c767.hot-update.js.map