webpackHotUpdate(0,{

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(111), RootInstanceProvider = __webpack_require__(119), ReactMount = __webpack_require__(121), React = __webpack_require__(173); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(173);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _projectCarousel = __webpack_require__(368);
	
	var _projectInfo = __webpack_require__(369);
	
	var _projectLinks = __webpack_require__(370);
	
	var _projectTech = __webpack_require__(371);
	
	var _Project = __webpack_require__(372);
	
	var _Project2 = _interopRequireDefault(_Project);
	
	var _projects = __webpack_require__(361);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var _thumbnails = __webpack_require__(373);
	
	var _helpers = __webpack_require__(360);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'work',
	
	  contextTypes: {
	    router: _react2.default.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {
	        bg: { backgroundColor: '#ffffff' }
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      projects: (0, _helpers.setFeaturedProjects)()
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    return this.setState({
	      projects: (0, _helpers.setFeaturedProjects)()
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: this.props.style.bg },
	      this.props.children,
	      _react2.default.createElement(_thumbnails.Thumbnails, { projects: this.state.projects })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(328); if (makeExportsHot(module, __webpack_require__(173))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "work.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }

})
//# sourceMappingURL=0.2d6f4a99d49d2c1d3760.hot-update.js.map