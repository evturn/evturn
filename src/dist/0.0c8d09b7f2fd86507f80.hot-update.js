webpackHotUpdate(0,{

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(276);
	
	var _reactRouter = __webpack_require__(277);
	
	var _createHashHistory = __webpack_require__(280);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _googleAnalytics = __webpack_require__(326);
	
	var _googleAnalytics2 = _interopRequireDefault(_googleAnalytics);
	
	var _App = __webpack_require__(330);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Home = __webpack_require__(336);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _About = __webpack_require__(341);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Contact = __webpack_require__(350);
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	var _Work = __webpack_require__(365);
	
	var _Work2 = _interopRequireDefault(_Work);
	
	var _Project = __webpack_require__(370);
	
	var _Project2 = _interopRequireDefault(_Project);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var history = (0, _createHashHistory2.default)({ queryKey: false });
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: history },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'work(/projects/:projectId)', component: _Work2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Project2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/projects/:projectId', component: _Project2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'contact', component: _Contact2.default })
	  )
	), document.getElementById('site-container'));
	
	ReactDOM.render(_react2.default.createElement(Spinner, null), document.getElementById('loader'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "run.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.0c8d09b7f2fd86507f80.hot-update.js.map