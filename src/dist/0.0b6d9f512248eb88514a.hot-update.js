webpackHotUpdate(0,{

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(276);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _links = __webpack_require__(364);
	
	var _links2 = _interopRequireDefault(_links);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(352);
	
	var ContactLink = _react2.default.createClass({
	  displayName: 'ContactLink',
	  render: function render() {
	    console.log(this);
	    return _react2.default.createElement(
	      'li',
	      { className: 'link-item list-item-icon' },
	      _react2.default.createElement(
	        'div',
	        { className: 'list-item-icon__icon' },
	        _react2.default.createElement(
	          'a',
	          { href: this.props.url, target: '_blank' },
	          _react2.default.createElement('i', { className: 'icon ' + this.props.icon })
	        )
	      )
	    );
	  }
	});
	
	var ContactLinks = _react2.default.createClass({
	  displayName: 'ContactLinks',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      links: _links2.default
	    };
	  },
	  render: function render() {
	    var links = this.props.links.map(function (result) {
	      return _react2.default.createElement(ContactLink, { key: result.name, url: result.url, icon: result.icon });
	    });
	    return _react2.default.createElement(
	      'ul',
	      { className: 'link-items list-icons animated fadeIn' },
	      links
	    );
	  }
	});
	
	exports.default = _react2.default.createClass({
	  displayName: 'contact',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {
	        backgroundImage: 'url(' + __webpack_require__(339) + ')'
	      }
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: this.props.style, className: 'page-wrapper', id: 'contact' },
	      _react2.default.createElement(ContactLinks, null)
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "contact.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.0b6d9f512248eb88514a.hot-update.js.map