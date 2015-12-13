webpackHotUpdate(0,{

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.Thumbnails = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(277);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(335);
	__webpack_require__(339);
	
	var Thumbnails = exports.Thumbnails = _react2.default.createClass({
	  displayName: 'Thumbnails',
	
	  contextTypes: {
	    router: _react2.default.PropTypes.func
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'thumbnail__header' },
	        'Projects'
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'thumbnails' },
	        this.props.projects.map(function (result) {
	          return _react2.default.createElement(
	            'li',
	            { key: result.id, className: 'thumbnail-item' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: 'work/projects/' + result.id },
	              _react2.default.createElement(
	                'div',
	                { className: 'image-container' },
	                _react2.default.createElement('img', { className: 'img-scale', src: result.thumbnail }),
	                _react2.default.createElement('div', { className: 'shadow' })
	              )
	            )
	          );
	        })
	      )
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(350); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "thumbnails.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.d15f72944034064b9514.hot-update.js.map