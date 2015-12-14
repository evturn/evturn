webpackHotUpdate(0,{

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(111), RootInstanceProvider = __webpack_require__(119), ReactMount = __webpack_require__(121), React = __webpack_require__(173); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(173);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _video = __webpack_require__(338);
	
	var _headline = __webpack_require__(353);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'home',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {
	        bg: {
	          backgroundImage: 'url(' + __webpack_require__(343) + ')'
	        }
	      }
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: this.props.style.bg },
	      _react2.default.createElement(_video.Video, null),
	      _react2.default.createElement(_headline.Headline, null)
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(328); if (makeExportsHot(module, __webpack_require__(173))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }

})
//# sourceMappingURL=0.76e8445bc8296b52ee32.hot-update.js.map