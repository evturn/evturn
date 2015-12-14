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
	      status: 'loading',
	      backdrop: _react2.default.PropTypes.string
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.state.status === 'loading') {
	      this.createLoader();
	    }
	  },
	  createLoader: function createLoader() {
	    var _this = this;
	
	    this.img = new Image();
	    this.img.addEventListener('load', function () {
	      _this.setState({ backdrop: _this.img.src });
	      _this.refs.links.style.backgroundImage = _this.state.backdrop;
	    });
	    this.img.src = __webpack_require__(339);
	  },
	  render: function render() {
	
	    var links = _links2.default.map(function (result, i) {
	      return _react2.default.createElement(Link, { key: result.name, url: result.url, icon: result.icon });
	    });
	
	    return _react2.default.createElement(
	      'div',
	      { ref: 'links', className: 'page-wrapper' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'link-items list-icons animated fadeIn' },
	        links
	      )
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "contact.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.96634f613ca66c883f01.hot-update.js.map