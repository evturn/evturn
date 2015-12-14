webpackHotUpdate(0,{

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.Links = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(391);
	
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
	
	var Links = exports.Links = _react2.default.createClass({
	  displayName: 'Links',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'links' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'link-items list-icons' },
	        this.props.links.map(function (result) {
	          return _react2.default.createElement(Link, { key: result.name, url: result.url, icon: result.icon });
	        })
	      )
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "links.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(392);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(375)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(392, function() {
				var newContent = __webpack_require__(392);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(374)();
	// imports
	
	
	// module
	exports.push([module.id, ".no-scrollbar ::-webkit-scrollbar {\n  display: none;\n}\n.img-shadow {\n  box-shadow: 0px -3px 4px -4px rgba(0, 0, 0, 0.4);\n}\n.img-scale {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.flip-vertical {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -ms-filter: flipv;\n  /*IE*/\n  -webkit-filter: flipv;\n          filter: flipv;\n}\n.list-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -ms-flex-direction: row;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin: 0 auto;\n}\n.list-item-icon {\n  position: relative;\n  display: inline-block;\n}\n.list-item-icon .list-item-icon__icon {\n  font-size: 14px;\n  text-align: center;\n}\n.list-item-icon .list-item-icon__icon .evcon {\n  font-size: 42px;\n}\n.list-item-icon .list-item-icon__caption {\n  position: absolute;\n  font-size: 9px;\n  bottom: 10px;\n  right: 0;\n  left: 0;\n  text-align: center;\n}\n.page-contact .blend {\n  padding: 80px;\n  position: absolute;\n  height: 80px;\n  top: -160px;\n  right: 0;\n  left: 0;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(100%, rgba(255, 255, 255, 0)));\n  background: -webkit-linear-gradient(top, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n  background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff', GradientType=0);\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -ms-filter: flipv;\n  /*IE*/\n  -webkit-filter: flipv;\n          filter: flipv;\n}\n.page-contact .site-content {\n  background-image: url(" + __webpack_require__(386) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: 50%;\n}\n@media (min-width: 1024px) {\n  .page-contact .site-content {\n    background-position-x: 0%;\n  }\n}\n@media (min-width: 1024px) {\n  .page-contact .site-header {\n    position: absolute;\n  }\n}\n.page-contact .site-logo {\n  right: 0;\n  left: 0;\n  top: 15px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.page-contact .site-nav {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  opacity: 0.5;\n  color: #ffffff;\n  border-radius: 8px;\n}\n.page-contact .site-nav:hover {\n  opacity: 1;\n}\n.page-contact .links {\n  margin-top: 30%;\n}\n@media (min-width: 1024px) {\n  .page-contact .links {\n    margin-top: 15%;\n  }\n}\n.page-contact .link-items {\n  text-align: center;\n}\n.page-contact .link-item {\n  display: inline-block;\n  overflow: auto;\n  text-align: center;\n  margin: 0 auto;\n  width: 100%;\n  height: 110px;\n}\n@media (min-width: 600px) {\n  .page-contact .link-item {\n    width: 25%;\n    height: auto;\n  }\n}\n.page-contact .link-item .list-item-icon__icon {\n  margin-left: 0;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}\n.page-contact .link-item .list-item-icon__icon .icon {\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  font-size: 4em;\n  color: #231f20;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.7);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n@media (min-width: 600px) {\n  .page-contact .link-item .list-item-icon__icon .icon {\n    width: 150px;\n    height: 150px;\n    line-height: 150px;\n    font-size: 7em;\n  }\n  .page-contact .link-item .list-item-icon__icon .icon:hover {\n    background-color: #ffffff;\n    color: #5FA3C0;\n  }\n}\n@media (min-width: 1024px) {\n  .page-contact .link-item .list-item-icon__icon .icon {\n    width: 200px;\n    height: 200px;\n    line-height: 200px;\n    font-size: 8em;\n  }\n}\n", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=0.1e7122ee3250116e64e1.hot-update.js.map