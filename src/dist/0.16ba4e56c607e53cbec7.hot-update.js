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
	
	var Link = _react2.default.createClass({
	  displayName: 'Link',
	  render: function render() {
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
	
	exports.default = _react2.default.createClass({
	  displayName: 'contact',
	  getInitialState: function getInitialState() {
	    return {
	      links: _links2.default,
	      backdrop: __webpack_require__(339)
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({
	      links: _links2.default
	    });
	
	    this.backdrop.style.backgroundImage = 'url(' + this.state.backdrop + ')';
	    this.list = this.state.links.map(function (result) {
	      return _react2.default.createElement(Link, { key: result.name, url: result.url, icon: result.icon });
	    });
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      { ref: function ref(backdrop) {
	          return _this.backdrop = backdrop;
	        }, className: 'page-wrapper' },
	      _react2.default.createElement('ul', { ref: function ref(list) {
	          return _this.list = list;
	        }, className: 'link-items list-icons animated fadeIn' })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "contact.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.16ba4e56c607e53cbec7.hot-update.js.map