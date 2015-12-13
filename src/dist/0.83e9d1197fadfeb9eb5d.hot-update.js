webpackHotUpdate(0,{

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bio = __webpack_require__(358);
	
	var _tech = __webpack_require__(359);
	
	var _stats = __webpack_require__(360);
	
	var _stats2 = __webpack_require__(361);
	
	var _stats3 = _interopRequireDefault(_stats2);
	
	var _helpers = __webpack_require__(362);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(335);
	__webpack_require__(339);
	
	exports.default = _react2.default.createClass({
	  displayName: 'about',
	  componentDidMount: function componentDidMount() {
	    var image = __webpack_require__(365);
	    this.refs['tile'].style.backgroundImage = 'url(' + image + ')';
	  },
	  render: function render() {
	    var pathname = this.props.location.pathname;
	
	    var featured = (0, _helpers.setFeaturedTech)();
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_bio.Bio, null),
	      _react2.default.createElement(
	        'div',
	        { className: 'about-info' },
	        _react2.default.createElement(_tech.Tech, { tech: featured }),
	        _react2.default.createElement(_stats.Stats, { stats: _stats3.default })
	      )
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(350); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "about.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.83e9d1197fadfeb9eb5d.hot-update.js.map