webpackHotUpdate(0,{

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.Spinner = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(345);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(378);
	
	var Spinner = exports.Spinner = _react2.default.createClass({
	  displayName: 'Spinner',
	  spin: function spin() {
	    var $container = (0, _jquery2.default)('#preloader');
	    var $image = (0, _jquery2.default)('.preloader');
	
	    $container.delay(1000).fadeOut(1000);
	    $image.delay(1200).fadeOut(1200);
	  },
	  componentDidMount: function componentDidMount() {
	    this.spin();
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      { id: 'preloader', ref: function ref(spinner) {
	          return _this.spinner = spinner;
	        } },
	      _react2.default.createElement('div', { id: 'spinner' }),
	      _react2.default.createElement('img', { className: 'preloader', src: __webpack_require__(380) })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "spinner.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.d0faf00b29a171192dc8.hot-update.js.map