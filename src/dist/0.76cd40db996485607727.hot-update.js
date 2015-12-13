webpackHotUpdate(0,{

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.Links = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(335);
	__webpack_require__(339);
	
	var Link = _react2.default.createClass({
	  displayName: 'Link',
	  render: function render() {
	    var _props$data = this.props.data;
	    var url = _props$data.url;
	    var icon = _props$data.icon;
	
	    return _react2.default.createElement(
	      'li',
	      { className: 'link-item list-item-icon' },
	      _react2.default.createElement(
	        'div',
	        { className: 'list-item-icon__icon' },
	        _react2.default.createElement(
	          'a',
	          { href: url, target: '_blank' },
	          _react2.default.createElement('i', { className: 'icon ' + icon })
	        )
	      )
	    );
	  }
	});
	
	var Links = exports.Links = _react2.default.createClass({
	  displayName: 'Links',
	  componentDidMount: function componentDidMount() {
	    // const image = require('images/site/banana-plants.png');
	    // this.refs['nyc'].style.backgroundImage = `url(${image})`;
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'image-container animated fadeInUp', key: 'nyc', ref: 'nyc' },
	      _react2.default.createElement(
	        'div',
	        { className: 'links' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'link-items list-icons' },
	          this.props.links.map(function (result) {
	            return _react2.default.createElement(Link, { key: result.name, data: result });
	          })
	        )
	      )
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(350); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "links.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.76cd40db996485607727.hot-update.js.map