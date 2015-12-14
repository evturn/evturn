webpackHotUpdate(0,{

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.Header = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(338);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactRouter = __webpack_require__(277);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(389);
	
	var HeaderNav = _react2.default.createClass({
	  displayName: 'HeaderNav',
	
	  contextTypes: {
	    router: _react2.default.PropTypes.func
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'nav',
	      { className: 'site-menu' },
	      _react2.default.createElement(
	        'div',
	        { className: 'site-menu__header' },
	        _react2.default.createElement(
	          'div',
	          { className: 'site-menu__close' },
	          _react2.default.createElement('span', { className: 'icon fa fa-times' })
	        )
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'site-menu__list' },
	        _react2.default.createElement(
	          'li',
	          { className: 'site-menu__item' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            _react2.default.createElement(
	              _reactRouter.IndexLink,
	              { to: '/', className: 'nav-link' },
	              'Home'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: 'site-menu__item' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: 'work', className: 'nav-link' },
	              'Work'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: 'site-menu__item' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: 'about', className: 'nav-link' },
	              'About'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: 'site-menu__item' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: 'contact', className: 'nav-link' },
	              'Contact'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	var Header = exports.Header = _react2.default.createClass({
	  displayName: 'Header',
	  init: function init() {
	    var _this = this;
	
	    this.$body = (0, _jquery2.default)('body');
	    this.$siteHeader = (0, _jquery2.default)('.site-header');
	    this.$navTrigger = (0, _jquery2.default)('.site-nav__trigger');
	    this.$navOverlay = (0, _jquery2.default)('.nav-overlay');
	    this.$menuClose = (0, _jquery2.default)('.site-menu__close, .site-menu__item a');
	    this.$menu = (0, _jquery2.default)('.site-menu');
	
	    this.$navTrigger.on('click', function () {
	      return _this.setNavOpen();
	    });
	    this.$menuClose.on('click', function () {
	      return _this.setNavClosed();
	    });
	    this.$navOverlay.on('click', function () {
	      return _this.setNavClosed();
	    });
	  },
	  setNavOpen: function setNavOpen() {
	    this.$menu.addClass('open');
	    this.$body.addClass('nav-is-opened');
	  },
	  setNavClosed: function setNavClosed() {
	    this.$menu.removeClass('open');
	    this.$body.removeClass('nav-is-opened');
	  },
	  componentDidMount: function componentDidMount() {
	    this.refs['site-logo'].src = __webpack_require__(363);
	    this.init();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement('div', { className: 'nav-overlay' }),
	      _react2.default.createElement(
	        'header',
	        { id: 'site-header', className: 'site-header' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'site-logo' },
	            _react2.default.createElement('img', { className: 'site-logo__image img-scale', ref: 'site-logo' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-nav site-nav__trigger' },
	            _react2.default.createElement('span', { className: 'icon fa fa-bars' })
	          ),
	          _react2.default.createElement(HeaderNav, null)
	        )
	      )
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(390);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(375)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(390, function() {
				var newContent = __webpack_require__(390);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(374)();
	// imports
	
	
	// module
	exports.push([module.id, ".no-scrollbar ::-webkit-scrollbar {\n  display: none;\n}\n.img-shadow {\n  box-shadow: 0px -3px 4px -4px rgba(0, 0, 0, 0.4);\n}\n.img-scale {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.flip-vertical {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -ms-filter: flipv;\n  /*IE*/\n  -webkit-filter: flipv;\n          filter: flipv;\n}\n.site-header {\n  width: 100%;\n  margin: 0 auto;\n}\n@media (min-width: 1024px) {\n  .site-header {\n    height: 170px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n}\n.site-header:before,\n.site-header:after {\n  content: \" \";\n  display: table;\n}\n.site-header:after {\n  clear: both;\n}\n.site-header .site-logo {\n  position: absolute;\n  z-index: 3;\n  margin: 0 auto;\n  padding: 10px;\n  border-radius: 50%;\n  width: 80px;\n}\n.site-header .site-logo:before,\n.site-header .site-logo:after {\n  content: \" \";\n  display: table;\n}\n.site-header .site-logo:after {\n  clear: both;\n}\n@media (min-width: 1024px) {\n  .site-header .site-logo {\n    padding: 20px;\n    width: 140px;\n  }\n}\n.site-header .site-nav {\n  position: absolute;\n  top: 25px;\n  right: 25px;\n  height: 47px;\n  width: 47px;\n  z-index: 3;\n  cursor: pointer;\n  font-size: 40px;\n  text-align: center;\n}\n.site-header .nav-is-opened {\n  display: block;\n}\n.site-header .site-menu {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 21em;\n  left: auto;\n  right: -21em;\n  z-index: 999;\n  height: 100%;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  background-color: #5FA3C0;\n}\n.site-header .site-menu.open {\n  right: 0;\n}\n.site-header .site-menu__list {\n  margin-top: 0;\n}\n.site-header .site-menu__item {\n  text-transform: uppercase;\n  text-align: center;\n  overflow: auto;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n.site-header .site-menu__item a {\n  color: #ffffff;\n}\n.site-header .site-menu__header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n.site-header .site-menu__header:before,\n.site-header .site-menu__header:after {\n  content: \" \";\n  display: table;\n}\n.site-header .site-menu__header:after {\n  clear: both;\n}\n.site-header .site-menu__header .site-menu__close {\n  float: right;\n  cursor: pointer;\n  margin: 0 auto;\n  text-align: center;\n}\n.site-header .site-menu__header .site-menu__close .icon {\n  line-height: 60px;\n  height: 60px;\n  width: 60px;\n  font-size: 25px;\n  background-color: #ffffff;\n}\n.nav-is-opened {\n  overflow: hidden;\n}\n.nav-is-opened .nav-overlay {\n  position: fixed;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.65);\n  top: 0;\n  left: 0;\n}\n@media (min-width: 1024px) {\n  .nav-is-opened .nav-overlay {\n    background: rgba(255, 255, 255, 0.65);\n  }\n}\n.nav-is-opened .site-menu {\n  box-shadow: -20px 0px 50px 0px rgba(50, 50, 50, 0.5);\n}\n", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=0.cf2bf1be229014a5311d.hot-update.js.map